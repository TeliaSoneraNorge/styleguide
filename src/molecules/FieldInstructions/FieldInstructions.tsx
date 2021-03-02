import React from 'react';
import cn from 'classnames';
import { Icon } from '../..';
import { colors } from '../../utils/colors';
import { Button } from '../../business';

export type FieldInstructionsProps = {
  /**
   * Label to be shown
   */
  label: string;
  /**
   * Text to be shown
   */
  description: string;
  /**
   * Placement of field instructions are similar to positions of the tooltip
   * Default is top-end
   */
  position?: 'top-start' | 'top' | 'top-end' | 'left' | 'right' | 'bottom-start' | 'bottom' | 'bottom-end';
  /**
   * Handle open/close state. Current usage is closing instructions onBlur for TextField.
   * Want open/close on hovering? See Tooltip component
   */
  open?: boolean;
  setOpen?: (open: boolean) => void;
};

export const FieldInstructions = (props: FieldInstructionsProps) => {
  const [open, setOpen] = React.useState(false);
  const { position = 'top-end' } = props;

  const toggle = (o: boolean) => {
    if (props.setOpen !== undefined) {
      props.setOpen(o);
    } else {
      setOpen(o);
    }
  };

  const showCard = props.open ?? open;
  return (
    <div className="telia-field-instructions">
      <div className="telia-field-instructions--icon" onClick={() => toggle(!props.open ?? !open)}>
        <Icon icon="question-circle" style={{ width: '13px', height: '13px', color: colors.corePurple500 }} />
      </div>
      {showCard && (
        <div className={cn('telia-field-instructions--card', `telia-field-instructions--card__${position}`)}>
          <div className="telia-field-instructions--card--header">
            {props.label}
            <Button icon="close" size="compact" kind="secondary-text" onClick={() => toggle(false)} />
          </div>
          <div className="telia-field-instructions--card--divider" />
          <div className="telia-field-instructions--card--body">{props.description}</div>
          <div className="telia-field-instructions--card--arrow" />
        </div>
      )}
    </div>
  );
};
