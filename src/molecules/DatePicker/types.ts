import { MutableRefObject, RefObject } from 'react';

type CommonProps = {
  size?: 'compact' | 'default';

  /**
   * @default "Velg periode"
   */
  label?: string;

  /**
   * ordered array of label for months, from january-december
   * @default "Norwegian full name. ['Januar','Februar','Mars','April','Mai','Juni','Juli','August','September','Oktober','November','Desember'];"
   */
  monthLabels?: Array<string>;

  /**
   * ordered array of label for months, from january-december
   * @default "Norwegian short name. ['Ma', 'Ti', 'On', 'To', 'Fr', 'Lø', 'Sø']"
   */
  dayLabels?: Array<string>;

  inputPlaceholder?: string;

  /**
   * Format "yyyy-mm-dd"
   * @default undefined
   */
  maxDate?: string;

  /**
   * Format "yyyy-mm-dd"
   * @default undefined
   */
  minDate?: string;

  /**
   * to control open state of the date picker menu
   */
  open?: boolean;
  setOpen?: (open: boolean) => void;
  /**
   * If `true`, the outline and helptext will be displayed in an error state.
   * @default false
   */
  error?: boolean;
  /**
   * The help text content displayed under the input
   */
  helpText?: React.ReactNode;
  /**
   * Expand the datepicker input field to fit the parent container
   */
  name?: string;
  fullWidth?: boolean;
  required?: boolean;
  disabled?: boolean;
};

export type PeriodPickerProps = CommonProps & {
  /**
   * After a new date has been set
   */
  onSelectDateFrom?: (date?: string) => void;
  onSelectDateTo?: (date?: string) => void;

  period?: {
    /**
     * Format "yyyy-mm-dd"
     * @default today
     */
    start?: string;

    /**
     * Format "yyyy-mm-dd"
     * @default today
     */
    end?: string;
  };

  /**
   * Eg. btn for"last 7 days"
   * Rendered in the date picker menu
   */
  options?: React.ReactNode;
} & (
    | {
        time: true;
        timeFrom?: string;
        timeTo?: string;
        /**
         * Require when time is true
         */
        onSelectedTimeFrom: (time: string) => void;
        onSelectedTimeTo: (time: string) => void;
      }
    | { time?: false }
  );

export type DatePickerProps = CommonProps & {
  /**
   * After a new date has been set
   */
  onSelectDate: (date?: string) => void;

  /**
   * Format "yyyy-mm-dd"
   * @default today
   */
  value?: string;
  inputRef?: RefObject<HTMLInputElement> | MutableRefObject<HTMLInputElement>;
};
