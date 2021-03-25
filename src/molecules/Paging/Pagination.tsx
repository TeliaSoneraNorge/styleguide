import React from 'react';
import { Button } from '../../business';

export interface Props {
  currentPage: number;
  setPage: (number: number) => void;
  dataLength: number;
  perPage: number;
}

export const Pagination: React.FC<Props> = (props) => {
  const numPages = Math.ceil(props.dataLength / props.perPage);
  const pages = new Array(numPages).fill(0);
  const midPagesLength = 3;
  const longRange = numPages > 7;

  const getMidRangeStart = (page: number) => {
    if (page < 4) return 3;
    else if (page > numPages - 3) return numPages - 1 - midPagesLength;
    else return page - 1;
  };

  const [midRangeStart, setMidRangeStart] = React.useState(getMidRangeStart(props.currentPage));
  const moreButton = (
    <Button
      size="compact"
      disabled
      kind="secondary-text"
      label={'...'}
      className="telia-pagination__dottes telia-button--ball"
    />
  );

  const pageButtons: Array<React.ReactElement> = pages.map((e, i) => (
    <Button
      key={i}
      size="compact"
      kind="secondary-text"
      className="telia-button--ball"
      active={i + 1 === props.currentPage}
      label={(i + 1).toString()}
      onClick={(e) => setPage(i + 1)}
    />
  ));

  const getPageButton = (page: number) => pageButtons[page - 1];
  const midPageButtons = pageButtons.slice(midRangeStart - 1, midRangeStart + 2);

  const setPage = (page: number) => {
    setMidRangeStart(getMidRangeStart(page));
    props.setPage(page);
  };

  return (
    <div className="telia-pagination">
      <Button
        size="compact"
        kind="secondary-text"
        className="telia-button--ball"
        icon="arrow-left"
        aria-label="Forrige side"
        onClick={() => setPage(props.currentPage - 1)}
        disabled={props.currentPage <= 1}
      />
      {longRange ? (
        <>
          {getPageButton(1)}
          {props.currentPage > 4 ? moreButton : getPageButton(2)}

          {midPageButtons}

          {props.currentPage < numPages - 3 ? moreButton : getPageButton(numPages - 1)}
          {getPageButton(numPages)}
        </>
      ) : (
        pageButtons
      )}

      <Button
        size="compact"
        kind="secondary-text"
        className="telia-button--ball"
        icon="arrow-right"
        aria-label="Neste side"
        onClick={() => setPage(props.currentPage + 1)}
        disabled={props.currentPage >= numPages}
      />
    </div>
  );
};
