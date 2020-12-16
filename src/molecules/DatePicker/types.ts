type CommonProps = {
  size?: 'compact' | 'default';

  /**
   * @default "Velg periode"
   */
  label?: string;

  /**
   * ordered array of label for months, from january-december
   * @default "Norwegain full name. ['Januar','Februar','Mars','April','Mai','Juni','Juli','August','September','Oktober','November','Desember'];"
   */
  monthLabels?: Array<string>;

  /**
   * ordered array of label for months, from january-december
   * @default "Norwgian short name. ['Ma', 'Ti', 'On', 'To', 'Fr', 'Lø', 'Sø']"
   */
  dayLabels?: Array<string>;

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
};
