import React from 'react';
import { IconDefinition } from '../../atoms/Icon';
import Button, { ButtonKind } from '../../atoms/Button';

interface ShoppingCartContinueSectionProps {
  buttons: {
    kind?: ButtonKind;
    label: string;
    icon?: IconDefinition;
    size?: 'small';
    onClick?: (...args: any[]) => any;
  }[];
}

export default function ShoppingCartContinueSection({ buttons }: ShoppingCartContinueSectionProps) {
  return (
    <section className="telia-shopping-cart__section">
      <div className="telia-shopping-cart__section-inner telia-shopping-cart__continue-container">
        {buttons.map(({ kind, label, icon, size, onClick }) => (
          <Button
            text={label}
            icon={icon || undefined}
            kind={kind || 'voca-normal'}
            size={size || undefined}
            onClick={onClick}
            className="telia-shopping-cart__button"
          />
        ))}
      </div>
    </section>
  );
}
