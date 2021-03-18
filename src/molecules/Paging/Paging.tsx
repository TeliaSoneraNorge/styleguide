import React from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from '../..';
import { Button } from '../../business';

export interface Props {
  from: number;
  to: number;
  perPage: number;
  dataLength: number;
  numberOfSelectedRows?: number;
  selectedRowsLabel?: string;

  onPerPageChange: (perPage: number, e?: React.MouseEvent) => void;
  onPageChange: (forward: boolean, e?: React.MouseEvent) => void;

  fromToLabel?: string;
  perPageLabel?: string;
  selectOptions?: Array<number>;
}

export const Paging: React.FC<Props> = (props) => {
  return (
    <div className="telia-paging">
      {props.numberOfSelectedRows ? (
        <span className="telia-paging__text">
          {`${props.numberOfSelectedRows} ${
            props.selectedRowsLabel || `${props.numberOfSelectedRows > 1 ? 'rader' : 'rad'} er valgt`
          }`}
        </span>
      ) : null}
      <div>
        <Dropdown fullWidth={true}>
          <DropdownToggle
            outline={false}
            color="white"
            label={(props.perPageLabel || 'Rader per side: ') + props.perPage}
          />
          <DropdownMenu>
            {(props.selectOptions || [10, 25, 50, 100, 1000]).map((option: number, key: number) => (
              <DropdownItem key={option} onClick={() => props.onPerPageChange(option)}>
                {option}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>

      <span className="telia-paging__text">
        {props.fromToLabel || `${props.from}-${props.to} av ${props.dataLength}`}
      </span>
      <div className="telia-paging__navigation">
        <Button
          size="compact"
          kind="secondary-text"
          icon="arrow-left"
          aria-label="Forrige side"
          onClick={(e) => props.onPageChange(false, e)}
          disabled={props.from <= 1}
        />

        <Button
          size="compact"
          kind="secondary-text"
          icon="arrow-right"
          aria-label="Neste side"
          onClick={(e) => props.onPageChange(true, e)}
          disabled={props.to >= props.dataLength}
        />
      </div>
    </div>
  );
};
