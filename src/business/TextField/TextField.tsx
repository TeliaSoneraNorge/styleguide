import * as React from 'react';

interface Props {
  /**
   * The label content.
   */
  label?: string;
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helpeText` accessible for screen readers.
   */
  id?: string;
  /**
   * Name attribute of the `input` element.
   */
  name?: string;
  /**
   * The helpe text content
   */
  helpeText?: React.ReactNode;
  /**
   * Override or extend the styles applied to the component.
   */
  className?: string;
  /**
   * The color of the component.
   */
  color?: 'primary' | 'secondary';
  /**
   * The default value of the `input` element.
   */
  defaultValue?: string;
  /**
   * If `true`, the `input` element will be disabled.
   * @default false
   */
  disabled?: boolean;
  /**
   * If `true`, the outline and helptext will be displayed in an error state.
   * @default false
   */
  error?: boolean;

  /**
   * If `true`, the outline and helptext will be displayed in an success state.
   * @default false
   */
  success?: boolean;
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean;
}

export const TextField = () => {
  return <div>TextField</div>;
};
