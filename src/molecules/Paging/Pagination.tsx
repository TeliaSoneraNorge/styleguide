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
  const midPagesLength = numPages > 7 ? 3 : numPages - 4;
  const midPagesRange = new Array(midPagesLength).fill(0);
  const longRange = numPages > 7;

  const getMidRangeStart = (page: number) => {
    if (page < 4) return 3;
    else if (page > numPages - 3) return numPages - 1 - midPagesLength;
    else return page - 1;
  };

  const [midRangeStart, setMidRangeStart] = React.useState(getMidRangeStart(props.currentPage));

  const pageButtons: Array<React.ReactElement> = pages.map((e, i) => (
    <Button
      key={i}
      size="compact"
      kind="secondary-text"
      active={i + 1 === props.currentPage}
      label={(i + 1).toString()}
      onClick={(e) => setPage(i + 1)}
    />
  ));
  const getPageButton = (page: number) => pageButtons[page - 1];

  const moreButton = <Button size="compact" kind="secondary-text" label={'...'} className="telia-pagination__dottes" />;

  let midPageButtons = midPagesRange.map((number, i) => getPageButton(i + midRangeStart));
  const nextPage = () => {
    if (props.currentPage > 3 && props.currentPage < numPages - 3) {
      setMidRangeStart(midRangeStart + 1);
    }
    props.setPage(props.currentPage + 1);
  };

  const previousPage = () => {
    if (props.currentPage < numPages - 2 && props.currentPage > 4) {
      setMidRangeStart(midRangeStart - 1);
    }
    props.setPage(props.currentPage - 1);
  };

  const setPage = (page: number) => {
    const pageInMidRange = page > 2 && page < numPages - 1;
    const lowerHidden = page > 4;
    const newMidRangeStart = getMidRangeStart(page);
    if (!pageInMidRange) {
      if (page === 1) {
        props.setPage(page);
        setMidRangeStart(newMidRangeStart);
      } else if (page === numPages) {
        props.setPage(page);
        setMidRangeStart(newMidRangeStart);
      } else {
        props.setPage(page);
      }
    } else {
      if (longRange) {
        if (lowerHidden && page >= midRangeStart && page < numPages - 2) {
          setMidRangeStart(newMidRangeStart);
          props.setPage(page);
        } else if (!lowerHidden && page === 4) {
          setMidRangeStart(newMidRangeStart);
          props.setPage(page);
        } else {
          props.setPage(page);
        }
      } else {
        props.setPage(page);
      }
    }
  };

  React.useEffect(() => {
    midPageButtons = midPagesRange.map((number, i) => getPageButton(i + midRangeStart));
  }, [midRangeStart]);

  return (
    <div className="telia-pagination">
      <Button
        size="compact"
        kind="secondary-text"
        icon="arrow-left"
        aria-label="Forrige side"
        onClick={(e) => previousPage()}
        disabled={props.currentPage <= 1}
      />
      {getPageButton(1)}
      {props.currentPage > 4 && longRange ? moreButton : getPageButton(2)}

      {midPageButtons}

      {props.currentPage < numPages - 3 && longRange ? moreButton : getPageButton(numPages - 1)}
      {getPageButton(numPages)}

      <Button
        size="compact"
        kind="secondary-text"
        icon="arrow-right"
        aria-label="Neste side"
        onClick={(e) => nextPage()}
        disabled={props.currentPage >= numPages}
      />
    </div>
  );
};
