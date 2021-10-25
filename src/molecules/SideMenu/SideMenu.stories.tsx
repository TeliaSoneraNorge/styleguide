import React, { useEffect, useState } from 'react';
import { SideMenu, SideMenuBottom, SideMenuTop, SideMenuItem } from './index';
import { action } from '@storybook/addon-actions';
import { enableTabKeyDetection } from '../../utils/enableTabKeyDetection';
import b from './business.svg';
import { withDesign } from 'storybook-addon-designs';
import { Badge } from '../../atoms/Badge';
import { SideMenuItemGroup } from './SideMenuItemGroup';
import { useBreakpoint } from '../..';

export default {
  component: SideMenu,
  title: 'Component library/Molecules/SideMenu',
  decorators: [withDesign],
};

export const White = () => {
  const [active, setActive] = useState(0);
  enableTabKeyDetection();

  return (
    <>
      <div style={{ display: 'flex', height: '90vh' }}>
        <div style={{ marginRight: '1rem', height: '100%' }}>
          <SideMenu aria-labelledby="main_menu">
            <SideMenuTop>
              <SideMenuItem
                label="Rounded item"
                avatar={{ img: b }}
                onClick={action('user')}
                color="grey"
                kind="rounded"
              />
              <SideMenuItem label="Hjem" icon="home" onClick={() => setActive(0)} active={active === 0} href="/" />

              <SideMenuItem
                label="Abonnenter"
                icon="user"
                onClick={() => setActive(1)}
                active={active === 1}
                href="/abonnenter"
              />
              <SideMenuItem
                hasNotification={true}
                label={<div style={{ fontWeight: 'bold' }}>Økonomi</div>}
                icon="money"
                onClick={() => setActive(2)}
                active={active === 2}
                href="/okonomi"
              />
            </SideMenuTop>

            <SideMenuBottom>
              <SideMenuItem
                label="Innstillinger"
                icon="settings"
                onClick={() => setActive(3)}
                active={active === 3}
                color="grey"
              />
              <SideMenuItem
                label="Log ut"
                icon="logout"
                onClick={() => setActive(4)}
                active={active === 4}
                color="grey"
              />
              <SideMenuItem
                kind="rounded"
                label="Helene Grini"
                avatar={{ text: 'HG' }}
                onClick={action('user')}
                color="grey"
              />
            </SideMenuBottom>
          </SideMenu>
        </div>
        <div style={{ marginRight: '1rem', height: '100%' }}>
          <SideMenu aria-labelledby="main_menu">
            <SideMenuTop>
              <SideMenuItem label="Hjem" icon="home" onClick={() => setActive(0)} active={active === 0} href="/" />
              <SideMenuItem
                label="Abonnenter"
                icon="user"
                onClick={() => setActive(1)}
                active={active === 1}
                href="/abonnenter"
              />
              <SideMenuItem
                label="Økonomi"
                icon="money"
                onClick={() => setActive(2)}
                active={active === 2}
                href="/okonomi"
              />
            </SideMenuTop>
          </SideMenu>
        </div>
        <div style={{ marginRight: '1rem', height: '100%' }}>
          <SideMenu aria-labelledby="main_menu">
            <SideMenuBottom>
              <SideMenuItem label="Innstillinger" icon="settings" onClick={() => setActive(3)} active={active === 3} />
              <SideMenuItem label="Log ut" icon="logout" onClick={() => setActive(4)} active={active === 4} />
              <SideMenuItem label="Helene Grini" avatar={{ text: 'HG' }} onClick={action('user')} />
            </SideMenuBottom>
          </SideMenu>
        </div>
      </div>
      <h4>Try to change the viewport size in the storybook toolbar </h4>
    </>
  );
};

export const Grey = () => {
  const [active, setActive] = useState(0);
  enableTabKeyDetection();

  return (
    <>
      <div style={{ display: 'flex', height: '90vh', backgroundColor: '#fbfbfb' }}>
        <div style={{ marginRight: '1rem', height: '100%' }}>
          <SideMenu aria-labelledby="main_menu" backgroundColor="grey100">
            <SideMenuTop>
              <SideMenuItem
                label="Rounded item"
                avatar={{ img: b }}
                onClick={action('user')}
                color="grey"
                kind="rounded"
              />
              <SideMenuItem label="Hjem" icon="home" onClick={() => setActive(0)} active={active === 0} href="/" />

              <SideMenuItem
                label="Abonnenter"
                icon="user"
                onClick={() => setActive(1)}
                active={active === 1}
                href="/abonnenter"
              />
              <SideMenuItem
                label="Økonomi"
                icon="money"
                onClick={() => setActive(2)}
                active={active === 2}
                href="/okonomi"
              />
            </SideMenuTop>

            <SideMenuBottom>
              <SideMenuItem
                label="Innstillinger"
                icon="settings"
                onClick={() => setActive(3)}
                active={active === 3}
                color="grey"
              />
              <SideMenuItem
                label="Log ut"
                icon="logout"
                onClick={() => setActive(4)}
                active={active === 4}
                color="grey"
              />
              <SideMenuItem
                kind="rounded"
                label="Helene Grini"
                avatar={{ text: 'HG' }}
                onClick={action('user')}
                color="grey"
              />
            </SideMenuBottom>
          </SideMenu>
        </div>
        <div style={{ marginRight: '1rem', height: '100%' }}>
          <SideMenu aria-labelledby="main_menu" backgroundColor="grey100">
            <SideMenuTop>
              <SideMenuItem label="Hjem" icon="home" onClick={() => setActive(0)} active={active === 0} href="/" />
              <SideMenuItem
                label="Abonnenter"
                icon="user"
                onClick={() => setActive(1)}
                active={active === 1}
                href="/abonnenter"
              />
              <SideMenuItem
                label="Økonomi"
                icon="money"
                onClick={() => setActive(2)}
                active={active === 2}
                href="/okonomi"
              />
            </SideMenuTop>
          </SideMenu>
        </div>
        <div style={{ marginRight: '1rem', height: '100%' }}>
          <SideMenu aria-labelledby="main_menu" backgroundColor="grey100">
            <SideMenuBottom>
              <SideMenuItem label="Innstillinger" icon="settings" onClick={() => setActive(3)} active={active === 3} />
              <SideMenuItem label="Log ut" icon="logout" onClick={() => setActive(4)} active={active === 4} />
              <SideMenuItem label="Helene Grini" avatar={{ text: 'HG' }} onClick={action('user')} />
            </SideMenuBottom>
          </SideMenu>
        </div>
      </div>
      <h4>Try to change the viewport size in the storybook toolbar </h4>
    </>
  );
};

export const WithoutCollapse = () => {
  const [active, setActive] = useState(0);
  enableTabKeyDetection();

  return (
    <>
      <div style={{ display: 'flex', height: '90vh', backgroundColor: '#fbfbfb' }}>
        <div style={{ marginRight: '1rem', height: '100%' }}>
          <SideMenu aria-labelledby="main_menu" backgroundColor="grey100" collapse={false}>
            <SideMenuTop>
              <SideMenuItem
                label="Rounded item"
                avatar={{ img: b }}
                onClick={action('user')}
                color="grey"
                kind="rounded"
                collapse={false}
              />
              <SideMenuItem
                label="Hjem"
                icon="home"
                onClick={() => setActive(0)}
                active={active === 0}
                href="/"
                collapse={false}
              />

              <SideMenuItem
                label="Abonnenter"
                icon="user"
                onClick={() => setActive(1)}
                active={active === 1}
                href="/abonnenter"
                collapse={false}
              />
              <SideMenuItem
                label="Økonomi"
                icon="money"
                onClick={() => setActive(2)}
                active={active === 2}
                href="/okonomi"
                collapse={false}
              />
            </SideMenuTop>
          </SideMenu>
        </div>
      </div>
      <h4>Try to change the viewport size in the storybook toolbar </h4>
    </>
  );
};

export const WithItemGroup = () => {
  const [active, setActive] = useState(0);
  const [openGroup, setOpenGroup] = useState<'Subs' | 'Economy' | ''>('');
  enableTabKeyDetection();

  return (
    <>
      <div style={{ display: 'flex', height: '90vh', backgroundColor: '#fbfbfb' }}>
        <div style={{ marginRight: '1rem', height: '100%' }}>
          <SideMenu aria-labelledby="main_menu" backgroundColor="grey100" collapse={false}>
            <SideMenuTop>
              <SideMenuItem
                label="Rounded item"
                avatar={{ img: b }}
                onClick={action('user')}
                color="grey"
                kind="rounded"
                collapse={false}
              />
              <SideMenuItem
                label="Hjem"
                icon="home"
                onClick={() => setActive(0)}
                active={active === 0}
                href="/"
                collapse={false}
              />

              <SideMenuItemGroup
                label="Tjenester"
                icon="menu"
                open={openGroup === 'Subs'}
                collapse={false}
                onClick={() => {
                  setOpenGroup(openGroup === 'Subs' ? '' : 'Subs');
                  setActive(1);
                }}
                active={active === 1}
              >
                <SideMenuItem
                  label="Abonnenter"
                  onClick={() => setActive(2)}
                  active={active === 2}
                  collapse={false}
                  tabIndex={openGroup === 'Subs' ? 1 : -1}
                />
                <SideMenuItem
                  label="Tv"
                  onClick={() => setActive(3)}
                  active={active === 3}
                  collapse={false}
                  tabIndex={openGroup === 'Subs' ? 1 : -1}
                />
              </SideMenuItemGroup>
              <SideMenuItemGroup
                label="Økonomi"
                icon="menu"
                open={openGroup === 'Economy'}
                collapse={false}
                onClick={() => {
                  setOpenGroup(openGroup === 'Economy' ? '' : 'Economy');
                  setActive(4);
                }}
                active={active === 4}
              >
                <SideMenuItem
                  label="Fakturaer"
                  onClick={() => setActive(5)}
                  active={active === 5}
                  collapse={false}
                  tabIndex={openGroup === 'Economy' ? 1 : -1}
                />
                <SideMenuItem
                  label="Økonomi"
                  onClick={() => setActive(6)}
                  active={active === 6}
                  href="/okonomi"
                  collapse={false}
                  tabIndex={openGroup === 'Economy' ? 1 : -1}
                />
              </SideMenuItemGroup>
            </SideMenuTop>

            <SideMenuBottom>
              <SideMenuItem
                label="Innstillinger"
                icon="settings"
                onClick={() => setActive(7)}
                active={active === 7}
                color="grey"
                collapse={false}
              />
              <SideMenuItem
                label="Log ut"
                icon="logout"
                onClick={() => setActive(8)}
                active={active === 8}
                color="grey"
                collapse={false}
              />
              <SideMenuItem
                kind="rounded"
                label="Helene Grini"
                avatar={{ text: 'HG' }}
                onClick={action('user')}
                color="grey"
                collapse={false}
              />
            </SideMenuBottom>
          </SideMenu>
        </div>
      </div>
      <h4>Try to change the viewport size in the storybook toolbar </h4>
    </>
  );
};

type MenuGroups = 'business' | 'Invoice' | 'Profile' | '';

export const WithItemGroupCollapse = () => {
  const [active, setActive] = useState(0);
  const [isMenuExpanded, setIsMenuExpanded] = useState<boolean | undefined>(undefined);
  const [isHover, setIsHover] = useState<boolean | undefined>(undefined);
  const [openMenuGroup, setOpenMenuGroup] = useState<MenuGroups>('');
  const isHoverSupported = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const isTabletScreenSize = !useBreakpoint('md');
  enableTabKeyDetection();

  useEffect(() => {
    if (isHoverSupported) {
      if (!isHover && isTabletScreenSize) {
        setIsMenuExpanded(false);
        setOpenMenuGroup('');
      }
      if (isHover) {
        setIsMenuExpanded(true);
      }
    }
  }, [isHover, isHoverSupported, isTabletScreenSize]);

  const onMenuGroupClick = (menuGroup: MenuGroups) => {
    const isCurrentOpenMenuGroupClick = menuGroup === openMenuGroup;

    setOpenMenuGroup(isCurrentOpenMenuGroupClick ? '' : menuGroup);
    if (isTabletScreenSize) {
      if (!isMenuExpanded) {
        setIsMenuExpanded(!isMenuExpanded);
      } else if (isCurrentOpenMenuGroupClick) {
        setIsMenuExpanded(false);
        setOpenMenuGroup('');
      }
    }
  };

  const onMenuItemClick = (activeId: number, isMenuGroupItemClick = false) => {
    setActive(activeId);
    if (isHoverSupported) {
      if (isTabletScreenSize) {
        setIsMenuExpanded(false);
        setOpenMenuGroup('');
      } else if (!isMenuGroupItemClick) {
        setOpenMenuGroup('');
      }
    } else {
      setOpenMenuGroup('');
      setIsMenuExpanded(false);
    }
  };

  return (
    <>
      <div style={{ display: 'flex', height: '90vh', backgroundColor: '#fbfbfb' }}>
        <div
          onPointerEnter={() => setIsHover(true)}
          onPointerLeave={() => setIsHover(false)}
          style={{ marginRight: '1rem', height: '100%' }}
        >
          <SideMenu aria-labelledby="main_menu" collapse={!isMenuExpanded}>
            <SideMenuTop>
              <SideMenuItemGroup
                label="Rounded item"
                avatar={{ img: b }}
                open={openMenuGroup === 'business'}
                onClick={() => {
                  onMenuGroupClick('business');
                }}
                color="grey"
                kind="rounded"
                hasNotification
                collapse={!isMenuExpanded}
              >
                <SideMenuItem
                  label="Navn"
                  onClick={() => onMenuItemClick(9, true)}
                  active={active === 9}
                  tabIndex={openMenuGroup === 'business' ? 1 : -1}
                  collapse={!isMenuExpanded}
                />
              </SideMenuItemGroup>
              <SideMenuItem
                label="Hjem"
                icon="home"
                kind="rounded"
                onClick={() => onMenuItemClick(0)}
                active={active === 0}
                collapse={!isMenuExpanded}
              />{' '}
              <SideMenuItem
                label="Knapp"
                icon="home"
                onClick={() => onMenuItemClick(1)}
                active={active === 1}
                collapse={!isMenuExpanded}
              />
              <SideMenuItem
                label="Link"
                icon="tv"
                onClick={() => onMenuItemClick(2)}
                active={active === 2}
                collapse={!isMenuExpanded}
                href="#"
              />
              <SideMenuItemGroup
                label="Faktura"
                icon="document"
                open={openMenuGroup === 'Invoice'}
                numberOfNotifications={openMenuGroup !== 'Invoice' ? 2 : undefined}
                onClick={() => {
                  onMenuGroupClick('Invoice');
                }}
                active={(active === 3 || active === 4) && openMenuGroup !== 'Invoice'}
                collapse={!isMenuExpanded}
              >
                <SideMenuItem
                  label="Mobil"
                  numberOfNotifications={1}
                  onClick={() => onMenuItemClick(3, true)}
                  active={active === 3}
                  tabIndex={openMenuGroup === 'Invoice' ? 1 : -1}
                  collapse={!isMenuExpanded}
                />
                <SideMenuItem
                  label="Tv/Internett"
                  numberOfNotifications={1}
                  onClick={() => onMenuItemClick(4, true)}
                  active={active === 4}
                  tabIndex={openMenuGroup === 'Invoice' ? 1 : -1}
                  collapse={!isMenuExpanded}
                />
              </SideMenuItemGroup>
              <SideMenuItemGroup
                label="Profil"
                icon="user"
                open={openMenuGroup === 'Profile'}
                onClick={() => {
                  onMenuGroupClick('Profile');
                }}
                active={(active === 5 || active === 6) && openMenuGroup !== 'Profile'}
                collapse={!isMenuExpanded}
              >
                <SideMenuItem
                  label="Abonnenter"
                  onClick={() => onMenuItemClick(5, true)}
                  active={active === 5}
                  tabIndex={openMenuGroup === 'Profile' ? 1 : -1}
                  collapse={!isMenuExpanded}
                />
                <SideMenuItem
                  label="Tv/Internett"
                  onClick={() => onMenuItemClick(6, true)}
                  active={active === 6}
                  tabIndex={openMenuGroup === 'Profile' ? 1 : -1}
                  collapse={!isMenuExpanded}
                />
              </SideMenuItemGroup>
            </SideMenuTop>

            <SideMenuBottom>
              <SideMenuItem
                label="Innstillinger"
                icon="settings"
                onClick={() => onMenuItemClick(7)}
                active={active === 7}
                color="grey"
                collapse={!isMenuExpanded}
              />
              <SideMenuItem
                label="Log ut"
                icon="logout"
                onClick={() => onMenuItemClick(8)}
                active={active === 8}
                color="grey"
                collapse={!isMenuExpanded}
              />
              <SideMenuItem
                kind="rounded"
                label="Helene Grini"
                avatar={{ text: 'HG' }}
                onClick={action('user')}
                color="grey"
                collapse={!isMenuExpanded}
              />
            </SideMenuBottom>
          </SideMenu>
        </div>
      </div>
      <h4>Try to change the viewport size in the storybook toolbar </h4>
    </>
  );
};

White.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/JtdMO7wBbu3MnDdHv2LLTa/01.-📐Specs?node-id=3983%3A6222',
  },
};

Grey.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/JtdMO7wBbu3MnDdHv2LLTa/01.-📐Specs?node-id=3983%3A6222',
  },
};
