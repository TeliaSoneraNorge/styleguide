import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';
import MenuSearch from './MenuSearch';

const defaultLinkTemplate = ({ url, ...otherProps }) =>
    <a href={url} {...otherProps} />;

/**
 * Status: *In progress*.
 **/
export default class Menu extends React.Component {
    static propTypes = {
        menuLinks: PropTypes.array,
        logoImageDesktopPath: PropTypes.string,
        logoTitle: PropTypes.string,
        activeIndex: PropTypes.number,
        onSearchSubmit: PropTypes.func,
        linkTemplate: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            mobileMenuOpen: false,
        };

        this.closeMenu = this.closeMenu.bind(this);
    }

    closeMenu() {
        this.setState({ mobileMenuOpen: false });
    }

    render() {
        const LinkTemplate = this.props.linkTemplate || defaultLinkTemplate;

        return (
            <div className={ classnames('menu',{
                [this.props.className]: this.props.className,
            })}>
                <div className="menu__top">
                    <LinkTemplate url={this.props.logoUrl}>
                        <img className="menu__logo"
                            src={this.props.logoImageDesktopPath}
                            alt={this.props.logoTitle} />
                    </LinkTemplate>
                    <ul className="menu__heading">
                        {
                            this.props.menuLinks &&
                            this.props.menuLinks.map(( menuLink, index ) => {
                                return (
                                    <li key={'dekstop-heading-link'+index}>
                                        <LinkTemplate
                                            url={`${menuLink.heading.url}`}
                                            className={ classnames('menu__heading-item link',{
                                            'menu__heading-item--active': this.props.activeIndex === index,
                                        })}>{menuLink.heading.text}</LinkTemplate>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    {this.props.onSearchSubmit && <MenuSearch onSubmit={this.props.onSearchSubmit} /> }
                    {
                        this.props.loginUrl &&
                        <a href={this.props.loginUrl} className="menu__login-button button button--small">
                            <SvgIcon className="menu__login-button-icon" iconName="ico_login" color="none" /> logg inn
                        </a>
                    }
                    <button className="menu__mobile-button" onClick={ () => { this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen }); }}>
                        <SvgIcon className="menu__mobile-button-icon" iconName="ico_menu_mobile" color="black" />
                        <span className="menu__mobile-button-text"> Meny </span>
                    </button>
                </div>
                <div className="menu__content">
                    {
                        this.props.menuLinks &&
                        this.props.menuLinks.map(( menuLink, index ) => {
                            return (
                                <ul
                                    key={`desktop-panel`+index}
                                    id={`${menuLink.heading.text}-panel`}
                                    className={ classnames('menu__content-panel',{
                                        'menu__content-panel--hidden': this.props.activeIndex !== index,
                                    })}>
                                    {
                                        menuLink.links.map( ( link, index ) => {
                                            return <li key={'dekstop-link'+index} >
                                                {
                                                    link.url &&
                                                    <LinkTemplate className="menu__item link" url={link.url}>{link.text}</LinkTemplate>
                                                }
                                                {
                                                    !link.url &&
                                                    <div className="menu__item link menu__submenu">
                                                        <span className="" onClick={ () => { this.setState( { open : !this.state.open }); } }>{link.text}
                                                            <SvgIcon iconName="ico_dropArrow" color="purple"
                                                                className={ classnames('icon-link__icon menu__submenu-icon',{
                                                                    'menu__submenu-icon--open': this.state.open
                                                                })} /></span>
                                                        <div className={ classnames('menu__submenu-container',{
                                                            'menu__submenu-container--open': this.state.open
                                                        })}>
                                                            {
                                                                link.subLinks.map( ( sublink, index ) => {
                                                                    return <LinkTemplate key={'mobile-sublink'+index} className="menu__subitem link" url={sublink.url}>{sublink.text}</LinkTemplate>;
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                }
                                            </li>;
                                        })
                                    }
                                </ul>
                            );
                        })
                    }
                </div>

                <div className={ classnames('menu__mobile',{
                    'menu__mobile--open' : this.state.mobileMenuOpen })}>
                    <div className="menu__mobile-header">
                        <button className="menu__mobile-close-button" onClick={ () => { this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen }); } }><SvgIcon iconName="ico_delete" color="white"
                            className={ classnames('menu__mobile-close-button-icon',{
                            })} /></button>
                        <ul className="menu__mobile-heading-links">
                            {
                                this.props.menuLinks &&
                                this.props.menuLinks.map(( menuLink, index ) => {
                                    return (
                                        <li key={'mobile-heading-link'+index}>
                                            <LinkTemplate onClick={this.closeMenu} url={`${menuLink.heading.url}`}
                                                className={ classnames('menu__mobile-heading-item link',{
                                                    'menu__mobile-heading-item--active': this.props.activeIndex === index,
                                                })}>
                                                {menuLink.heading.text}
                                            </LinkTemplate>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                    {
                        this.props.menuLinks &&
                        this.props.menuLinks.map(( menuLink, index ) => {
                            return (
                                <section
                                    key={'mobile-panel'+index}
                                    id={`${menuLink.heading.text}-panel`}
                                    className="menu__mobile-panel"
                                    hidden={ this.props.activeIndex !== index }>
                                    {
                                        menuLink.links.map( ( link, index ) => {
                                            if (link.url) return <LinkTemplate onClick={this.closeMenu} key={'link'+index} className="menu__mobile-item link" url={link.url}>{link.text}</LinkTemplate>;
                                            else return (
                                                <div className="menu__mobile-submenu" key={index}>
                                                    <span className="menu__mobile-item-with-children">{link.text}</span>
                                                    <div className="menu__mobile-submenu-container">
                                                        {
                                                            link.subLinks.map( ( sublink, index ) => {
                                                                return <LinkTemplate onClick={this.closeMenu} key={'mobile-sublink'+index} className="menu__mobile-subitem link" url={sublink.url}>{sublink.text}</LinkTemplate>;
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }
                                </section>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}