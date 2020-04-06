import React from 'react';
import { Table, TableBodyRow, TableBodyCell, TablePagingControls } from './Table';
import _ from 'lodash';
import map from 'lodash/fp/map';
import pick from 'lodash/fp/pick';
import flow from 'lodash/fp/flow';

import { storiesOf } from '@storybook/react';

const subscribers = require('./sampledata.json');

const initialState = {
    selected: [],
    allSelected: false,
    sortKey: "subscription_id",
    sortDirection: "ASC",
    currentPerPage: 10,
    currentPage: 1,
    currentFrom: 0,
    currentTo: 9,
    data: [],
    sortedData: _.sortBy(subscribers, "subscription_id")
}


function reducer(oldState: typeof initialState, action: { type: String, payload: any }): typeof initialState {
    switch (action.type) {
        case "SET_DATA": return { ...oldState, data: action.payload.data };
        case "SET_SORTED_DATA": return { ...oldState, sortedData: action.payload };
        case "SELECT_ALL": return { ...oldState, selected: oldState.data.reduce((acc, elem) => [...acc, elem.subscription_id], []), allSelected: true };
        case "DESELECT_ALL": return { ...oldState, selected: [], allSelected: false };
        case "UNSELECT_ROW": return { ...oldState, selected: oldState.selected.filter((elem) => elem !== action.payload), allSelected: false };
        case "SELECT_ROW":
            const newSelected = [...oldState.selected, action.payload];
            return { ...oldState, selected: newSelected, allSelected: oldState.data.reduce((acc, sub) => acc && newSelected.includes(sub.subscription_id), true) };

        case "SORT_COLUMN":
            const newSortKey = action.payload;
            const newSortDirection = newSortKey !== oldState.sortKey ? "ASC" : oldState.sortDirection === "ASC" ? "DESC" : "ASC";
            return { ...oldState, sortKey: newSortKey, sortDirection: newSortDirection }

        case "SET_PER_PAGE":
            const newPerPage = action.payload;
            const possibleNewPage = oldState.currentPage > Math.ceil(subscribers.length / newPerPage) ? Math.ceil(subscribers.length / newPerPage) : oldState.currentPage;
            const newFrom = (newPerPage * possibleNewPage) - newPerPage;
            const newTo = (newPerPage * possibleNewPage) - 1 > subscribers.length - 1 ? subscribers.length - 1 : (newPerPage * possibleNewPage) - 1;
            return { ...oldState, currentPerPage: newPerPage, currentFrom: newFrom, currentTo: newTo, currentPage: possibleNewPage };

        case "SET_PAGE":
            const newPage = action.payload < 1 ? 1 : action.payload > Math.ceil(subscribers.length / oldState.currentPerPage) ? Math.ceil(subscribers.length / oldState.currentPerPage) : action.payload;
            const newFrom2 = (oldState.currentPerPage * newPage) - oldState.currentPerPage;
            const newTo2 = (oldState.currentPerPage * newPage) - 1 > subscribers.length - 1 ? subscribers.length - 1 : (oldState.currentPerPage * newPage) - 1;
            return { ...oldState, currentPage: newPage, currentFrom: newFrom2, currentTo: newTo2 };

        default:
            console.warn("Reducer called with unknown action type:", action.type, action);
            return { ...oldState };
    }
}

storiesOf('Business|Table', module).add('default', () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {
        const newData = state.sortDirection === "ASC" ? _.sortBy(subscribers, state.sortKey) : _.sortBy(subscribers, state.sortKey).reverse();
        dispatch({ type: "SET_SORTED_DATA", payload: newData });
    }, [ state.sortKey, state.sortDirection ]);

    React.useEffect(() => {
        dispatch({ type: "SET_DATA", payload: { data: state.sortedData.slice(state.currentFrom, state.currentTo+1) } })
    }, [ state.currentFrom, state.currentTo, state.sortedData ])

    return <React.Fragment>
        <Table headings={[
            { id: "formal_name",
              label: "Navn",
              rightAligned: false  },
            { id: "subscription_id",
              label: "Telefonnummer",
              rightAligned: true  },
            { id: "account_id",
              label: "Avdelingsnummer",
              rightAligned: true  },
            { id: "account_name",
              label: "Avdeling",
              rightAligned: false  },
            { id: "resource_type",
              label: "Enhetstype",
              rightAligned: false  },
            { id: "subscription_type",
              label: "Abonnement",
              rightAligned: false  }
        ]}

            onSelectAll={() => state.allSelected ? dispatch({ type: "DESELECT_ALL", payload: {} }) : dispatch({ type: "SELECT_ALL", payload: {} })}
            allSelected={state.allSelected}
            selected={state.selected}
            sortedColumnId={state.sortKey}
            sortedColumnDirection={state.sortDirection}
            onClickColumnHeader={(sortId) => dispatch({ type: "SORT_COLUMN", payload: sortId })}
            paging={<TablePagingControls
                from={state.currentFrom + 1}
                to={state.currentTo + 1}
                dataLength={subscribers.length}
                perPage={state.currentPerPage}
                page={state.currentPage}
                maxPage={Math.ceil(subscribers.length / state.currentPerPage)}
                onPageChange={(page: number) => dispatch({ type: "SET_PAGE", payload: page })}
                onPerPageChange={(perPage: number) => dispatch({ type: "SET_PER_PAGE", payload: perPage })}
            />}
        >
            {state.data.map((subscriber: any, index: number) =>
                <TableBodyRow
                    selectId={subscriber.subscription_id}
                    key={subscriber.subscription_id}
                    onSelect={() => state.selected.includes(subscriber.subscription_id) ? dispatch({ type: "UNSELECT_ROW", payload: subscriber.subscription_id }) : dispatch({ type: "SELECT_ROW", payload: subscriber.subscription_id })}
                    selected={state.selected.includes(subscriber.subscription_id)}>
                        {flow(
                            pick([ "formal_name", "subscription_id", "account_id", "account_name", "resource_type", "subscription_type" ]),
                            map((field: any) =>
                                <TableBodyCell key={Math.ceil(Math.random()*1000000)} rightAligned={!Number.isNaN(parseFloat(field))}>{field ? field.toString() : ""}</TableBodyCell>),
                        )(subscriber)}
                </TableBodyRow>)}
        </Table>

    </React.Fragment>
});