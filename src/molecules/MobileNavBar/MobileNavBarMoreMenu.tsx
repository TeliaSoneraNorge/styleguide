import React from 'react';
import cn from 'classnames';
import { Badge } from '../../atoms/Badge';
import { Icon } from '../../atoms/Icon';
import { Button } from '../../business';
import { useFocusTrap } from '../../utils/useFocusTrap';
import { useEscapeListener } from '../Modal/useEscapeListener';
import { MobileNavBarItemProps } from './MobileNavBarItem';

export type Items = ((MobileNavBarItemProps | { divider: true }) & { key: string })[];
interface Props {
  open: boolean;
  close: () => void;
  items: Items;
}
export const MobileNavBarMoreMenu = (props: Props) => {
  const first = React.useRef<HTMLButtonElement | null>(null);
  const { container } = useFocusTrap();
  useEscapeListener({ onEscape: props.close });

  React.useEffect(() => {
    const closeMenu = (e: MouseEvent | FocusEvent) => {
      const targetIsOutside = e.target && container.current && !container.current.contains((e.target as any) as Node);
      if (props.open && targetIsOutside) {
        props.close();
      }
    };
    window.addEventListener('click', closeMenu);
    return () => {
      window.removeEventListener('click', closeMenu);
    };
  }, [props.open, container]);

  React.useEffect(() => {
    if (props.open) {
      first.current?.focus();
    }
  }, [props.open]);

  if (!props.open) return null;

  return (
    <div className="telia-mobile-nav-bar__more-menu">
      <div ref={container} className="telia-mobile-nav-bar__more-menu__content">
        <div className="telia-mobile-nav-bar__more-menu__content__header">
          <div className="telia-mobile-nav-bar__more-menu__content__close">
            <Button icon="close" onClick={props.close} kind="secondary-text" size="compact" />
          </div>
        </div>
        {props.items.map((item, index) =>
          'divider' in item ? (
            <div className="telia-mobile-nav-bar__more-menu__content__divider" />
          ) : (
            <button
              onClick={item.onClick}
              className={cn('telia-mobile-nav-bar__more-menu__content__button', {
                'telia-mobile-nav-bar__more-menu__content__button--active': item.active,
              })}
              ref={index === 0 ? first : undefined}
            >
              <Icon className="telia-mobile-nav-bar__more-menu__content__button__icon" icon={item.icon} />
              {item.label}
              {item.hasNotification && (
                <Badge
                  className="telia-mobile-nav-bar__more-menu__content__button__badge"
                  size="compact"
                  status="warning"
                  kind="active"
                />
              )}
            </button>
          )
        )}
      </div>
    </div>
  );
};
