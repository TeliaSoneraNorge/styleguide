import { useReducer, useEffect } from 'react';
import _ from 'lodash';

type sortDirectionType = 'ASC' | 'DESC' | 'NONE';

interface TableState {
  data: Array<any>;
  sortColumn: string | number;
  sortDirection: sortDirectionType;
  perPage: number;
  from: number;
  to: number;
  selectedRows: Array<string | number>;
  allSelected: boolean;
  selectionId: string | number;
  selecting: boolean;
  sorting: boolean;
  paging: boolean;
}

type setSortingAction = (sortColumn: string | number) => void;
type setPageAction = (forward: boolean) => void;
type setPerPageAction = (perPage: number) => void;
type setSelectRowAction = (rowId: string | number) => void;
type setSelectAllAction = () => void;

type tableStateAction =
  | {
      type: 'CHANGE_PAGE';
      forward: boolean;
    }
  | {
      type: 'CHANGE_PER_PAGE';
      perPage: number;
    }
  | {
      type: 'SORT_COLUMN';
      sortColumn: string | number;
    }
  | {
      type: 'SET_DATA';
      data: Array<any>;
    }
  | {
      type: 'SELECT_ROW' | 'DESELECT_ROW';
      id: string | number;
    }
  | {
      type: 'SELECT_ALL' | 'DESELECT_ALL';
    };

type TableStateHookType = [
  TableState,
  {
    setSorting: setSortingAction;
    setPage: setPageAction;
    setPerPage: setPerPageAction;
    setSelectRow: setSelectRowAction;
    setSelectAll: setSelectAllAction;
    dispatch: React.Dispatch<tableStateAction>;
  }
];

const sortedTableData = (data: Array<any>, sortColumn: string | number, sortDirection: sortDirectionType) =>
  sortDirection === 'ASC' ? _.sortBy(data, sortColumn) : _.sortBy(data, sortColumn).reverse();
const newSortDirection = (
  oldSortColumn: string | number,
  newSortColumn: string | number,
  oldSortDirection: sortDirectionType
) => (newSortColumn === oldSortColumn && oldSortDirection === 'ASC' ? 'DESC' : 'ASC');
const newTo = (currentFrom: number, perPage: number, dataLength: number) =>
  currentFrom + perPage > dataLength ? dataLength : currentFrom + perPage;
const newFrom = (currentFrom: number, forward: boolean, perPage: number, dataLength: number) => {
  const diff = forward ? perPage : perPage * -1;
  return currentFrom + diff > dataLength ? dataLength : currentFrom + diff < 0 ? 0 : currentFrom + diff;
};
const maybePagedData = ({ data, paging, from, to }: TableState) => (paging ? data.slice(from, to) : data);

function tableReducer(state: TableState, action: tableStateAction): TableState {
  switch (action.type) {
    case 'CHANGE_PAGE':
      return _.cloneDeep({
        ...state,
        from: newFrom(state.from, action.forward, state.perPage, state.data.length),
        to: newTo(
          newFrom(state.from, action.forward, state.perPage, state.data.length),
          state.perPage,
          state.data.length
        ),
        allSelected: false,
      });
    case 'CHANGE_PER_PAGE':
      return _.cloneDeep({
        ...state,
        to: newTo(state.from, action.perPage, state.data.length),
        perPage: action.perPage,
        allSelected: false,
      });
    case 'SORT_COLUMN':
      return _.cloneDeep({
        ...state,
        data: sortedTableData(
          state.data,
          action.sortColumn,
          newSortDirection(state.sortColumn, action.sortColumn, state.sortDirection)
        ),
        sortColumn: action.sortColumn,
        sortDirection: newSortDirection(state.sortColumn, action.sortColumn, state.sortDirection),
        allSelected: false,
      });
    case 'SET_DATA':
      return _.cloneDeep({
        ...state,
        data: sortedTableData(action.data, state.sortColumn, state.sortDirection),
        from: 0,
        to: newTo(0, state.perPage, action.data.length),
        selectedRows: [],
        allSelected: false,
      });
    case 'SELECT_ALL':
      return _.cloneDeep({
        ...state,
        selectedRows: maybePagedData(state).map((val) => val[state.selectionId]),
        allSelected: true,
      });
    case 'DESELECT_ALL':
      return _.cloneDeep({
        ...state,
        selectedRows: [],
        allSelected: false,
      });
    case 'SELECT_ROW':
      return _.cloneDeep({
        ...state,
        selectedRows: [...state.selectedRows, action.id],
        allSelected: maybePagedData(state).reduce(
          (acc, sub) => acc && [...state.selectedRows, action.id].includes(sub[state.selectionId]),
          true
        ),
      });

    case 'DESELECT_ROW':
      return _.cloneDeep({
        ...state,
        selectedRows: _.without(state.selectedRows, action.id),
        allSelected: false,
      });
    default:
      return state;
  }
}

type TableStateArgs = {
  data: Array<any>;
} & (
  | {
      sorting: true;
      sortColumn: string | number;
      sortDirection?: sortDirectionType;
    }
  | {}
) &
  (
    | {
        paging: true;
        perPage?: number;
        from?: number;
        to?: number;
      }
    | {}
  ) &
  (
    | {
        selecting: true;
        selectionId: string | number;
        allSelected?: boolean;
        selectedRows?: Array<string | number>;
      }
    | {}
  );

export function useTableState(args: TableStateArgs): TableStateHookType {
  const initialState: TableState = {
    sorting: 'sorting' in args && args.sorting,
    data: 'sorting' in args ? sortedTableData(args.data, args.sortColumn, args.sortDirection || 'ASC') : args.data,
    sortColumn: 'sorting' in args ? args.sortColumn : '',
    sortDirection: 'sorting' in args && args.sortDirection ? args.sortDirection : 'ASC',
    paging: 'paging' in args && args.paging,
    perPage: 'paging' in args && args.perPage ? args.perPage : 10,
    from: 'paging' in args && args.from ? args.from : 0,
    to:
      'paging' in args && args.to
        ? args.to
        : newTo(0, 'perPage' in args && args.perPage ? args.perPage : 10, args.data.length),
    selecting: 'selecting' in args && args.selecting,
    selectedRows: 'selecting' in args && args.selectedRows ? args.selectedRows : [],
    allSelected: 'selecting' in args && args.allSelected ? args.allSelected : false,
    selectionId: 'selecting' in args ? args.selectionId : '',
  };

  const [state, dispatch] = useReducer(tableReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'SET_DATA', data: args.data });
  }, [args.data]);

  const setSorting: setSortingAction = (sortColumn) => dispatch({ type: 'SORT_COLUMN', sortColumn });
  const setPage: setPageAction = (forward) => dispatch({ type: 'CHANGE_PAGE', forward });
  const setPerPage: setPerPageAction = (perPage) => dispatch({ type: 'CHANGE_PER_PAGE', perPage });
  const setSelectRow: setSelectRowAction = (id) =>
    dispatch({ type: state.selectedRows.includes(id) ? 'DESELECT_ROW' : 'SELECT_ROW', id });
  const setSelectAll: setSelectAllAction = () =>
    dispatch({ type: state.allSelected || state.selectedRows.length ? 'DESELECT_ALL' : 'SELECT_ALL' });

  return [state, { setSorting, setPage, setPerPage, setSelectRow, setSelectAll, dispatch }];
}
