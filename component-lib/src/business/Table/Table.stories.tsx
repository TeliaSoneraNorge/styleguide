import React from 'react';
import { Table, TableBodyRow, TableBodyCell, TablePagingControls } from './Table';
import _ from 'lodash';

import { storiesOf } from '@storybook/react';

const subscribers = require('./sampledata.json');

storiesOf('Business|Table', module).add('default', () => {
    const [selected, setSelected] = React.useState<Array<string>>([]);
    const data = subscribers.slice(0, 10);

    return <Table headings={[
        "Navn",
        "Navn2",
        "Telefonnummer",
        "Avdelingsnummer",
        "Avdeling",
        "Fornavn",
        "Etternavn",
        "Ettellerannet",
        "Enhetstype",
        "Abonnementsstatus",
        "Statusårsak",
        "Abonnement",
        "Et objekt",
        "Et annet objekt",
        "Profil",
        "Profil2"
    ]}
        onSelectAll={() => selected.length === data.length ? setSelected([]) : setSelected(data.reduce((acc: Array<any>, subscriber: any) => [...acc, subscriber["subscription_id"]], []))}
        onSelectRow={(id: string) => selected.includes(id) ? setSelected(_.filter(selected, (elem) => elem !== id)) : setSelected([...selected, id])}
        rowIdPropertyName="subscription_id"
        selectedRows={selected}
        data={data} />;
});

const initialState = {
    selected: [],
    allSelected: false,
    sortKey: "subscription_id",
    sortDirection: "ASC",
    currentPerPage: 10,
    currentPage: 1,
    currentFrom: 0,
    currentTo: 9,
    data: []
}


function reducer(oldState: typeof initialState, action: {type: String, payload: any}): typeof initialState {
    switch(action.type) {
        case "SET_DATA": return { ...oldState, data: action.payload.data };
        case "SELECT_ALL": return { ...oldState, selected: oldState.data.reduce((acc, elem) => [...acc, elem.subscription_id], []), allSelected: true };
        case "DESELECT_ALL": return { ...oldState, selected: [], allSelected: false };
        case "SELECT_ROW": return { ...oldState, selected: [...oldState.selected, action.payload] };
        case "UNSELECT_ROW": return { ...oldState, selected: oldState.selected.filter((elem) => elem !== action.payload), allSelected: false};

        case "SORT_COLUMN":
        const newSortKey = action.payload;
        const newSortDirection = newSortKey !== oldState.sortKey ? "ASC" : oldState.sortDirection === "ASC" ? "DESC" : "ASC";
        return { ...oldState, sortKey: newSortKey, sortDirection: newSortDirection }

        case "SET_PER_PAGE":
        const newPerPage = action.payload;
        const possibleNewPage = oldState.currentPage > Math.floor(subscribers.length/newPerPage) ? Math.floor(subscribers.length/newPerPage) >= 1 ? Math.floor(subscribers.length/newPerPage) : 1 : oldState.currentPage;
        const newFrom = (newPerPage*possibleNewPage)-newPerPage;
        const newTo = (newPerPage*possibleNewPage)-1 > subscribers.length-1 ? subscribers.length-1 : (newPerPage*possibleNewPage)-1;
        return { ...oldState, currentPerPage: newPerPage, currentFrom: newFrom, currentTo: newTo, currentPage: possibleNewPage };

        case "SET_PAGE":
        const newPage = action.payload < 1 ? 1 : action.payload > Math.ceil(subscribers.length/oldState.currentPerPage) ? Math.ceil(subscribers.length/oldState.currentPerPage) : action.payload;
        const newFrom2 = (oldState.currentPerPage*newPage)-oldState.currentPerPage;
        const newTo2 = (oldState.currentPerPage*newPage)-1 > subscribers.length-1 ? subscribers.length-1 : (oldState.currentPerPage*newPage)-1;
        return { ...oldState, currentPage: newPage, currentFrom: newFrom2, currentTo: newTo2 };

        default: return {...oldState};
    }
}

storiesOf('Business|Table', module).add('default', () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(() => {
       const newData = state.sortDirection === "ASC" ? _.sortBy(subscribers, state.sortKey).slice(state.currentFrom, state.currentTo+1) : _.sortBy(subscribers, state.sortKey).reverse().slice(state.currentFrom, state.currentTo+1);
       dispatch({ type: "SET_DATA", payload: { data: newData }});
    }, [state.sortKey, state.currentFrom, state.currentTo, state.sortDirection]);

    return <React.Fragment>
        <Table headings={{
            formal_name: "Navn",
            full_name: "Navn2",
            subscription_id: "Telefonnummer",
            account_id: "Avdelingsnummer",
            account_name: "Avdeling",
            first_name: "Fornavn",
            last_name: "Etternavn",
            info: "Ettellerannet",
            resource_type: "Enhetstype",
            subsciption_status: "Abonnementsstatus",
            subscription_status_reason: "Statusårsak",
            subscription_type: "Abonnement",
            telephone_number: "Et objekt",
            tags: "Et annet objekt",
            profile_id: "Profil",
            profile_name: "Profil2"
        }}
            onSelectAll={() => state.allSelected ? dispatch({ type: "DESELECT_ALL", payload: {} }) : dispatch({ type: "SELECT_ALL", payload: {} })}
            allSelected={state.allSelected}
            sortedColumnId={state.sortKey}
            sortedColumnDirection={state.sortDirection}
            onClickColumnHeader={(sortId) => dispatch({ type: "SORT_COLUMN", payload: sortId})}
        >
            {state.data.map((subscriber: any, index: number) =>
                <TableBodyRow
                    key={index}
                    onSelect={() => state.selected.includes(subscriber.subscription_id) ? dispatch({ type: "UNSELECT_ROW", payload: subscriber.subscription_id }) : dispatch({ type: "SELECT_ROW", payload: subscriber.subscription_id })}
                    selected={state.selected.includes(subscriber.subscription_id)}>
                    {Object.values(subscriber).map((field: any, index: number) =>
                        <TableBodyCell key={index}>{field ? field.toString() : ""}</TableBodyCell>)}
                </TableBodyRow>)}
        </Table>
        <TablePagingControls
            from={state.currentFrom+1}
            to={state.currentTo+1}
            dataLength={subscribers.length}
            perPage={state.currentPerPage}
            page={state.currentPage}
            maxPage={Math.ceil(subscribers.length/state.currentPerPage)}
            onPageChange={(page: number) => dispatch({ type: "SET_PAGE", payload: page })}
            onPerPageChange={(perPage: number) => dispatch({ type: "SET_PER_PAGE", payload: perPage })}
        />
    </React.Fragment>
});