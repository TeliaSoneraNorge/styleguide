import React, { FC } from 'react';
import Heading from '../../atoms/Heading';
import { Icon, IconDefinition } from '../../atoms/Icon';
import { Checkbox } from '../../atoms/Checkbox';

export type ServiceCardProps = {
  icon?: IconDefinition;
  heading: string;
  description?: string;
  price: string;
  strikethrough?: string;
  onAdd: (args?: any) => void;
  checked: boolean;
};

export const ServiceCard: FC<ServiceCardProps> = ({
  icon,
  heading,
  description,
  price,
  strikethrough,
  onAdd,
  checked,
}) => {
  return (
    <div className="telia-servicecard">
      {icon && (
        <div className="telia-servicecard__icon">
          <Icon icon={icon} />
        </div>
      )}
      <div className="telia-servicecard__icon-mobile">
        <div className="telia-servicecard__iconWrapper-mobile">
          <Icon icon={icon} />
          <Heading tag="h2" size="xs">
            {heading}
          </Heading>
        </div>
        <Heading className="telia-servicecard__description-mobile" tag="h2" size="xs">
          {description}
        </Heading>
      </div>

      <div className="telia-servicecard__content">
        <div className="telia-servicecard__headingContainer">
          <Heading tag="h2" size="xs">
            {heading}
          </Heading>
          {description && (
            <Heading className="telia-servicecard__description" tag="h2" size="xs">
              {description}
            </Heading>
          )}
        </div>
        <div className="telia-servicecard__priceContainer">
          <Checkbox checked={checked} onChange={onAdd} label="Legg til" />
          <div className="telia-servicecard__price">
            {strikethrough && <span className="telia-servicecard__strikethrough">{`${strikethrough},-/md`}</span>}
            <span>{`${price},-/md`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
