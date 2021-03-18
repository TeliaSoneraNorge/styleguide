import React from 'react';
import { Paging } from '.';

export default {
  component: Paging,
  title: 'Component library/Molecules/Paging',
};

export const Default = ({}) => {
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
        <div style={{ width: '50%', paddingRight: '1rem', paddingBottom: '1rem' }}>
          <Paging
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
