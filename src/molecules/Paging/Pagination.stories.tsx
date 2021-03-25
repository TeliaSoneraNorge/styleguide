import React from 'react';
import { TablePagination, Pagination } from '.';

export default {
  component: TablePagination,
  title: 'Component library/Molecules/Paging',
};

export const Table_Pagination = ({}) => {
  const [page, setPage] = React.useState(1);
  const [perPage, setPerPage] = React.useState(10);
  const dataLength = 100;

  const onPageChange = (forward: boolean) => {
    if (forward) setPage(page + 1);
    else setPage(page - 1);
  };

  const from = page * perPage - perPage + 1;
  const to = Math.min(page * perPage, dataLength);

  return (
    <>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ width: '70%', paddingRight: '1rem', paddingBottom: '1rem' }}>
          <TablePagination
            from={from}
            to={to}
            perPage={perPage}
            onPageChange={onPageChange}
            onPerPageChange={setPerPage}
            dataLength={dataLength}
          />
        </div>
      </div>
    </>
  );
};

export const Default = () => {
  const [page, setPage] = React.useState(7);
  const [page2, setPage2] = React.useState(1);
  const dataLength = 80;
  const perPage = 10;

  return (
    <>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ width: '100%', paddingRight: '1rem', paddingBottom: '1rem' }}>
          <Pagination currentPage={page} perPage={perPage} setPage={setPage} dataLength={dataLength} />
        </div>
      </div>
      <div style={{ width: '100%', paddingRight: '1rem', paddingBottom: '1rem' }}>
        <Pagination currentPage={page2} perPage={perPage} setPage={setPage2} dataLength={50} />
      </div>
    </>
  );
};
