import React, { useState } from 'react';
import { Table, TableBodyRow, TableBodyCell } from './Table';
import { TablePagination } from '../..';
import _ from 'lodash';
import map from 'lodash/fp/map';
import pick from 'lodash/fp/pick';
import flow from 'lodash/fp/flow';
import { action } from '@storybook/addon-actions';
import { Avatar } from '../../index';
export default {
  component: Table,
  title: 'Business/Table',
};

const subscribers = require('./sampledata.json');

import { useTableState } from './useTableState';

const headings = [
  { id: 'formal_name', label: 'Navn', rightAligned: false },
  { id: 'subscription_id', label: 'Telefonnummer', rightAligned: true },
  { id: 'account_id', label: 'Avdelingsnummer', rightAligned: true },
  { id: 'account_name', label: 'Avdeling', rightAligned: false },
  { id: 'resource_type', label: 'Enhetstype', rightAligned: false },
  { id: 'subscription_type', label: 'Abonnement', rightAligned: false },
];

const headingsFixedWidth = [
  { id: 'formal_name', label: 'Navn', rightAligned: false, width: 120 },
  { id: 'subscription_id', label: 'Telefonnummer', rightAligned: true, width: 120 },
  { id: 'account_id', label: 'Avdelingsnummer', rightAligned: true, width: 120 },
  { id: 'account_name', label: 'Avdeling', rightAligned: false, width: 100 },
  { id: 'resource_type', label: 'Enhetstype', rightAligned: false, width: 120 },
  { id: 'subscription_type', label: 'Abonnement', rightAligned: false, width: 120 },
];
export const Standard = () => {
  return (
    <>
      <Table headings={headings}>
        {subscribers.slice(0, 10).map((subscriber: any, index: number) => (
          <TableBodyRow key={subscriber.subscription_id}>
            {flow(
              pick([
                'formal_name',
                'subscription_id',
                'account_id',
                'account_name',
                'resource_type',
                'subscription_type',
              ]),
              map((field: any) => (
                <TableBodyCell key={Math.ceil(Math.random() * 1000000)} rightAligned={!Number.isNaN(parseFloat(field))}>
                  {field ? field.toString() : ''}
                </TableBodyCell>
              ))
            )(subscriber)}
          </TableBodyRow>
        ))}
      </Table>
    </>
  );
};

export const emptyState = () => {
  return (
    <>
      <Table
        headings={headings}
        tableIsEmpty={![].length}
        emptyTableTitle="It's empty here..."
        emptyTableDescription="There is nothing here yet."
        emptyTableButton={{ label: 'Click here', onClick: () => console.log('click') }}
      >
        {[].map((subscriber: any, index: number) => (
          <TableBodyRow key={subscriber.subscription_id}>
            {flow(
              pick([
                'formal_name',
                'subscription_id',
                'account_id',
                'account_name',
                'resource_type',
                'subscription_type',
              ]),
              map((field: any) => (
                <TableBodyCell key={Math.ceil(Math.random() * 1000000)} rightAligned={!Number.isNaN(parseFloat(field))}>
                  {field ? field.toString() : ''}
                </TableBodyCell>
              ))
            )(subscriber)}
          </TableBodyRow>
        ))}
      </Table>
    </>
  );
};

export const FullWidth = () => {
  return (
    <>
      <Table headings={headings} fullWidth={true}>
        {subscribers.slice(0, 10).map((subscriber: any, index: number) => (
          <TableBodyRow key={subscriber.subscription_id}>
            {flow(
              pick([
                'formal_name',
                'subscription_id',
                'account_id',
                'account_name',
                'resource_type',
                'subscription_type',
              ]),
              map((field: any) => (
                <TableBodyCell key={Math.ceil(Math.random() * 1000000)} rightAligned={!Number.isNaN(parseFloat(field))}>
                  {field ? field.toString() : ''}
                </TableBodyCell>
              ))
            )(subscriber)}
          </TableBodyRow>
        ))}
      </Table>
    </>
  );
};

export const WithPaging = () => {
  const [state, { setPage, setPerPage }] = useTableState({ paging: true, data: subscribers });

  return (
    <>
      <Table
        headings={headings}
        paging={
          <TablePagination
            from={state.from + 1}
            to={state.to}
            dataLength={subscribers.length}
            perPage={state.perPage}
            onPageChange={setPage}
            onPerPageChange={setPerPage}
          />
        }
      >
        {state.data.slice(state.from, state.to).map((subscriber: any, index: number) => (
          <TableBodyRow key={subscriber.subscription_id}>
            {flow(
              pick([
                'formal_name',
                'subscription_id',
                'account_id',
                'account_name',
                'resource_type',
                'subscription_type',
              ]),
              map((field: any) => (
                <TableBodyCell key={Math.ceil(Math.random() * 1000000)} rightAligned={!Number.isNaN(parseFloat(field))}>
                  {field ? field.toString() : ''}
                </TableBodyCell>
              ))
            )(subscriber)}
          </TableBodyRow>
        ))}
      </Table>
    </>
  );
};

export const WithClickableRows = () => {
  const [state, { setPage, setPerPage }] = useTableState({ data: subscribers });

  return (
    <>
      <Table
        headings={headings}
        paging={
          <TablePagination
            from={state.from + 1}
            to={state.to}
            dataLength={subscribers.length}
            perPage={state.perPage}
            onPageChange={setPage}
            onPerPageChange={setPerPage}
          />
        }
      >
        {state.data.slice(state.from, state.to).map((subscriber: any, index: number) => (
          <TableBodyRow onClickRow={() => console.log('You clicked row', index)} key={subscriber.subscription_id}>
            {flow(
              pick([
                'formal_name',
                'subscription_id',
                'account_id',
                'account_name',
                'resource_type',
                'subscription_type',
              ]),
              map((field: any) => (
                <TableBodyCell key={Math.ceil(Math.random() * 1000000)} rightAligned={!Number.isNaN(parseFloat(field))}>
                  {field ? field.toString() : ''}
                </TableBodyCell>
              ))
            )(subscriber)}
          </TableBodyRow>
        ))}
      </Table>
    </>
  );
};

export const WithClickableRowsAndCells = () => {
  const [state, { setPage, setPerPage }] = useTableState({ data: subscribers });

  return (
    <>
      <Table
        headings={headings}
        paging={
          <TablePagination
            from={state.from + 1}
            to={state.to}
            dataLength={subscribers.length}
            perPage={state.perPage}
            onPageChange={setPage}
            onPerPageChange={setPerPage}
          />
        }
      >
        {state.data.slice(state.from, state.to).map((subscriber: any, index: number) => (
          <TableBodyRow onClickRow={() => console.log('You clicked row', index)} key={subscriber.subscription_id}>
            {flow(
              pick([
                'formal_name',
                'subscription_id',
                'account_id',
                'account_name',
                'resource_type',
                'subscription_type',
              ]),
              map((field: any) => (
                <TableBodyCell
                  key={Math.ceil(Math.random() * 1000000)}
                  onClick={() => console.log('You clicked cell with data', field ? field.toString() : '')}
                  rightAligned={!Number.isNaN(parseFloat(field))}
                >
                  {field ? field.toString() : ''}
                </TableBodyCell>
              ))
            )(subscriber)}
          </TableBodyRow>
        ))}
      </Table>
    </>
  );
};

export const Selectable = () => {
  const [state, { setPage, setPerPage, setSelectAll, setSelectRow }] = useTableState({
    data: subscribers,
    paging: true,
    selecting: true,
    selectionId: 'subscription_id',
  });

  return (
    <>
      <Table
        headings={headings}
        onSelectAll={setSelectAll}
        allSelected={state.allSelected}
        selected={state.selectedRows}
        paging={
          <TablePagination
            from={state.from + 1}
            to={state.to}
            dataLength={subscribers.length}
            perPage={state.perPage}
            onPageChange={setPage}
            onPerPageChange={setPerPage}
            numberOfSelectedRows={state.selectedRows.length}
          />
        }
      >
        {state.data.slice(state.from, state.to).map((subscriber: any, index: number) => (
          <TableBodyRow
            selectId={subscriber.subscription_id}
            key={subscriber.subscription_id}
            onSelect={() => setSelectRow(subscriber.subscription_id)}
            selected={state.selectedRows.includes(subscriber.subscription_id)}
          >
            {flow(
              pick([
                'formal_name',
                'subscription_id',
                'account_id',
                'account_name',
                'resource_type',
                'subscription_type',
              ]),
              map((field: any) => (
                <TableBodyCell key={Math.ceil(Math.random() * 1000000)} rightAligned={!Number.isNaN(parseFloat(field))}>
                  {field ? field.toString() : ''}
                </TableBodyCell>
              ))
            )(subscriber)}
          </TableBodyRow>
        ))}
      </Table>
    </>
  );
};

export const Sortable = () => {
  const [state, { setSorting, setPage, setPerPage }] = useTableState({
    data: subscribers,
    paging: true,
    sorting: true,
    sortColumn: 'subscription_id',
  });

  return (
    <>
      <Table
        headings={headings}
        sortedColumnId={state.sortColumn}
        sortedColumnDirection={state.sortDirection}
        onClickColumnHeader={(sortId) => setSorting(sortId)}
        paging={
          <TablePagination
            from={state.from + 1}
            to={state.to}
            dataLength={subscribers.length}
            perPage={state.perPage}
            onPageChange={setPage}
            onPerPageChange={setPerPage}
          />
        }
      >
        {state.data.slice(state.from, state.to).map((subscriber: any, index: number) => (
          <TableBodyRow key={subscriber.subscription_id}>
            {flow(
              pick([
                'formal_name',
                'subscription_id',
                'account_id',
                'account_name',
                'resource_type',
                'subscription_type',
              ]),
              map((field: any) => (
                <TableBodyCell key={Math.ceil(Math.random() * 1000000)} rightAligned={!Number.isNaN(parseFloat(field))}>
                  {field ? field.toString() : ''}
                </TableBodyCell>
              ))
            )(subscriber)}
          </TableBodyRow>
        ))}
      </Table>
    </>
  );
};

export const SortableAndSelectable = () => {
  const [state, { setSorting, setPage, setPerPage, setSelectAll, setSelectRow }] = useTableState({
    data: subscribers,
    paging: true,
    selecting: true,
    selectionId: 'subscription_id',
    sorting: true,
    sortColumn: 'subscription_id',
  });

  return (
    <>
      <Table
        headings={headings}
        onSelectAll={setSelectAll}
        allSelected={state.allSelected}
        selected={state.selectedRows}
        sortedColumnId={state.sortColumn}
        sortedColumnDirection={state.sortDirection}
        onClickColumnHeader={(sortId) => setSorting(sortId)}
        paging={
          <TablePagination
            from={state.from + 1}
            to={state.to}
            dataLength={subscribers.length}
            perPage={state.perPage}
            onPageChange={setPage}
            onPerPageChange={setPerPage}
            numberOfSelectedRows={state.selectedRows.length}
          />
        }
      >
        {state.data.slice(state.from, state.to).map((subscriber: any, index: number) => (
          <TableBodyRow
            selectId={subscriber.subscription_id}
            key={subscriber.subscription_id}
            onSelect={() => setSelectRow(subscriber.subscription_id)}
            selected={state.selectedRows.includes(subscriber.subscription_id)}
          >
            {flow(
              pick([
                'formal_name',
                'subscription_id',
                'account_id',
                'account_name',
                'resource_type',
                'subscription_type',
              ]),
              map((field: any) => (
                <TableBodyCell key={Math.ceil(Math.random() * 1000000)} rightAligned={!Number.isNaN(parseFloat(field))}>
                  {field ? field.toString() : ''}
                </TableBodyCell>
              ))
            )(subscriber)}
          </TableBodyRow>
        ))}
      </Table>
    </>
  );
};
export const WithConnectedRows = () => {
  return (
    <>
      <Table headings={headings}>
        {subscribers.slice(0, 10).map((subscriber: any, index: number) => (
          <TableBodyRow key={subscriber.subscription_id} connectedToPrevious={index === 3 || index === 7}>
            <TableBodyCell>
              <Avatar icon="wireless" size="compact" />
            </TableBodyCell>
            {flow(
              pick([
                'formal_name',
                'subscription_id',
                'account_id',
                'account_name',
                'resource_type',
                'subscription_type',
              ]),
              map((field: any) => (
                <TableBodyCell key={Math.ceil(Math.random() * 1000000)} rightAligned={!Number.isNaN(parseFloat(field))}>
                  {field ? field.toString() : ''}
                </TableBodyCell>
              ))
            )(subscriber)}
          </TableBodyRow>
        ))}
      </Table>
    </>
  );
};

export const SortableSelectableClickableRows = () => {
  const [state, { setSorting, setPage, setPerPage, setSelectAll, setSelectRow }] = useTableState({
    data: subscribers,
    paging: true,
    selecting: true,
    selectionId: 'subscription_id',
    sorting: true,
    sortColumn: 'subscription_id',
  });

  return (
    <>
      <Table
        headings={headings}
        onSelectAll={setSelectAll}
        allSelected={state.allSelected}
        selected={state.selectedRows}
        sortedColumnId={state.sortColumn}
        sortedColumnDirection={state.sortDirection}
        onClickColumnHeader={(sortId) => setSorting(sortId)}
        paging={
          <TablePagination
            from={state.from + 1}
            to={state.to}
            dataLength={subscribers.length}
            perPage={state.perPage}
            onPageChange={setPage}
            onPerPageChange={setPerPage}
            numberOfSelectedRows={state.selectedRows.length}
          />
        }
      >
        {state.data.slice(state.from, state.to).map((subscriber: any, index: number) => (
          <TableBodyRow
            selectId={subscriber.subscription_id}
            key={subscriber.subscription_id}
            onClickRow={action('click row')}
            onSelect={() => setSelectRow(subscriber.subscription_id)}
            selected={state.selectedRows.includes(subscriber.subscription_id)}
          >
            {flow(
              pick([
                'formal_name',
                'subscription_id',
                'account_id',
                'account_name',
                'resource_type',
                'subscription_type',
              ]),
              map((field: any) => (
                <TableBodyCell key={Math.ceil(Math.random() * 1000000)} rightAligned={!Number.isNaN(parseFloat(field))}>
                  {field ? field.toString() : ''}
                </TableBodyCell>
              ))
            )(subscriber)}
          </TableBodyRow>
        ))}
      </Table>
    </>
  );
};

export const Loading = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => setLoading(!loading), loading ? 3000 : 1000);

  return (
    <>
      <Table headings={headingsFixedWidth} loading={loading} dimension={{ rows: 10 }} fullWidth={true}>
        {subscribers.slice(0, 10).map((subscriber: any, index: number) => (
          <TableBodyRow key={subscriber.subscription_id}>
            {flow(
              pick([
                'formal_name',
                'subscription_id',
                'account_id',
                'account_name',
                'resource_type',
                'subscription_type',
              ]),
              map((field: any) => (
                <TableBodyCell key={Math.ceil(Math.random() * 1000000)} rightAligned={!Number.isNaN(parseFloat(field))}>
                  {field ? field.toString() : ''}
                </TableBodyCell>
              ))
            )(subscriber)}
          </TableBodyRow>
        ))}
      </Table>
    </>
  );
};

export const WithBorders = () => {
  const [state, { setPage, setPerPage }] = useTableState({ paging: true, data: subscribers });

  return (
    <>
      <Table
        headings={headings}
        bordered={true}
        paging={
          <TablePagination
            from={state.from + 1}
            to={state.to}
            dataLength={subscribers.length}
            perPage={state.perPage}
            onPageChange={setPage}
            onPerPageChange={setPerPage}
          />
        }
      >
        {state.data.slice(state.from, state.to).map((subscriber: any, index: number) => (
          <TableBodyRow key={subscriber.subscription_id}>
            {flow(
              pick([
                'formal_name',
                'subscription_id',
                'account_id',
                'account_name',
                'resource_type',
                'subscription_type',
              ]),
              map((field: any) => (
                <TableBodyCell key={Math.ceil(Math.random() * 1000000)} rightAligned={!Number.isNaN(parseFloat(field))}>
                  {field ? field.toString() : ''}
                </TableBodyCell>
              ))
            )(subscriber)}
          </TableBodyRow>
        ))}
      </Table>
    </>
  );
};

export const Compact = () => {
  const [state, { setPage, setPerPage }] = useTableState({ paging: true, data: subscribers });

  return (
    <>
      <Table
        headings={headings}
        compact={true}
        paging={
          <TablePagination
            from={state.from + 1}
            to={state.to}
            dataLength={subscribers.length}
            perPage={state.perPage}
            onPageChange={setPage}
            onPerPageChange={setPerPage}
          />
        }
      >
        {state.data.slice(state.from, state.to).map((subscriber: any, index: number) => (
          <TableBodyRow key={subscriber.subscription_id}>
            {flow(
              pick([
                'formal_name',
                'subscription_id',
                'account_id',
                'account_name',
                'resource_type',
                'subscription_type',
              ]),
              map((field: any) => (
                <TableBodyCell key={Math.ceil(Math.random() * 1000000)} rightAligned={!Number.isNaN(parseFloat(field))}>
                  {field ? field.toString() : ''}
                </TableBodyCell>
              ))
            )(subscriber)}
          </TableBodyRow>
        ))}
      </Table>
    </>
  );
};

export const CompactBordered = () => {
  const [state, { setPage, setPerPage }] = useTableState({ paging: true, data: subscribers });

  return (
    <>
      <Table
        headings={headings}
        bordered={true}
        compact={true}
        paging={
          <TablePagination
            from={state.from + 1}
            to={state.to}
            dataLength={subscribers.length}
            perPage={state.perPage}
            onPageChange={setPage}
            onPerPageChange={setPerPage}
          />
        }
      >
        {state.data.slice(state.from, state.to).map((subscriber: any, index: number) => (
          <TableBodyRow key={subscriber.subscription_id}>
            {flow(
              pick([
                'formal_name',
                'subscription_id',
                'account_id',
                'account_name',
                'resource_type',
                'subscription_type',
              ]),
              map((field: any) => (
                <TableBodyCell key={Math.ceil(Math.random() * 1000000)} rightAligned={!Number.isNaN(parseFloat(field))}>
                  {field ? field.toString() : ''}
                </TableBodyCell>
              ))
            )(subscriber)}
          </TableBodyRow>
        ))}
      </Table>
    </>
  );
};
