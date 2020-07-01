import * as React from 'react';
import cs from 'classnames';

export type TabProps = {
  label: string;
  exact?: boolean;
  active?: boolean;
  onClick?: (value: string) => void;
} & (
  | {
      path: string;
    }
  | { value: string });

export const Tab = (props: TabProps) => {
  const element =
    'path' in props ? (
      <a
        href={props.path}
        target="_blank"
        rel="noopener"
        onClick={e => {
          e.preventDefault();
          if (props.onClick) {
            props.onClick(props.path);
          }
        }}
      >
        {props.label}
      </a>
    ) : (
      <button
        onClick={() => {
          if (props.onClick) {
            props.onClick(props.value);
          }
        }}
      >
        {props.label}
      </button>
    );

  return (
    <li
      className={cs({
        active: props.active,
      })}
    >
      {element}
    </li>
  );
};
