import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';
import MenuSearch from './MenuSearch';

/**
 * Status: *In progress*.
 **/
export default class Menu extends React.Component {
    static propTypes = {
        menuLinks: PropTypes.array,
        logoImageDesktopPath: PropTypes.string,
        logoTitle: PropTypes.string,
        activeIndex: PropTypes.number
    };

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            mobileMenuOpen: false,
        }
    }

    render() {
        return (
            <div className={ classnames('menu',{
                [this.props.className]: this.props.className,
            })}>
                <div className="menu__top">
                    <img className="menu__logo"
                        src={this.props.logoImageDesktopPath}
                        alt={this.props.logoTitle} />
                    <ul className="menu__heading">
                        {
                            this.props.menuLinks &&
                            this.props.menuLinks.map(( menuLink, index ) => {
                                return (
                                    <li key={menuLink.heading+index}>
                                        <a href={`${menuLink.heading}`}
                                                className={ classnames('menu__heading-item link',{
                                                'menu__heading-item--active': this.props.activeIndex === index,
                                            })}>
                                            {menuLink.heading}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <MenuSearch />
                    <button className="menu__login-button button button--small">
                        <SvgIcon className="menu__login-button-icon" iconName="ico_login" color="none" /> logg inn
                    </button>
                    <button className="menu__mobile-button" onClick={ () => { this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen }) }}>
                        <SvgIcon className="menu__mobile-button-icon" iconName="ico_menu_mobile" color="black" />
                        <span className="menu__mobile-button-text"> Meny </span>
                    </button>
                </div>
                <div ref={ ( menu_content ) => { this.menu_content = menu_content } } className="menu__content">
                    {
                        this.props.menuLinks &&
                        this.props.menuLinks.map(( menuLink, index ) => {
                            return (
                                <ul
                                    id={`${menuLink.heading}-panel`}
                                    className={ classnames('menu__content-panel',{
                                        'menu__content-panel--hidden': this.props.activeIndex !== index,
                                    })}>
                                    {
                                        menuLink.links.map( ( link, index ) => {
                                            return <li>
                                                {
                                                    link.url &&
                                                    <a key={'link'+index} className="menu__item link" href={link.url}>{link.text}</a>
                                                }
                                                {
                                                    !link.url &&
                                                    <div className="menu__item link menu__submenu">
                                                        <span className="" onClick={ () => { this.setState( { open : !this.state.open }) } }>{link.text}
                                                            <SvgIcon iconName="ico_dropArrow" color="purple"
                                                                className={ classnames('icon-link__icon menu__submenu-icon',{
                                                                    'menu__submenu-icon--open': this.state.open
                                                                })}/></span>
                                                        <div className={ classnames('menu__submenu-container',{
                                                            'menu__submenu-container--open': this.state.open
                                                        })}>
                                                            {
                                                                link.subLinks.map( ( sublink, index ) => {
                                                                    return <a key={'sublink'+index} className="menu__subitem link" href={sublink.url}>{sublink.text}</a>
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                }
                                            </li>
                                        })
                                    }
                                </ul>
                            )
                        })
                    }
                </div>

                <div className={ classnames('menu__mobile',{
                            'menu__mobile--open' : this.state.mobileMenuOpen })}>
                    <div className="menu__mobile-header">
                        <button className="menu__mobile-close-button" onClick={ () => { this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen }) } }><SvgIcon iconName="ico_delete" color="white"
                            className={ classnames('menu__mobile-close-button-icon',{
                            })}/></button>
                            <ul className="menu__mobile-heading-links">
                                {
                                    this.props.menuLinks &&
                                    this.props.menuLinks.map(( menuLink, index ) => {
                                        return (
                                            <li key={menuLink.heading+index}>
                                                <a href={`${menuLink.heading}`}
                                                    className={ classnames('menu__mobile-heading-item link',{
                                                        'menu__mobile-heading-item--active': this.props.activeIndex === index,
                                                    })}>
                                                    {menuLink.heading}
                                                </a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                    </div>
                    {
                        this.props.menuLinks &&
                        this.props.menuLinks.map(( menuLink, index ) => {
                            return (
                                <section
                                    id={`${menuLink.heading}-panel`}
                                    className="menu__mobile-panel"
                                    hidden={ this.props.activeIndex !== index }>
                                    {
                                        menuLink.links.map( ( link, index ) => {
                                            if(link.url != null) return <a key={'link'+index} className="menu__mobile-item link" href={link.url}>{link.text}</a>
                                            else return (
                                                <div className="menu__mobile-submenu">
                                                    <span className="menu__mobile-item-with-children">{link.text}</span>
                                                    <div className="menu__mobile-submenu-container">
                                                        {
                                                            link.subLinks.map( ( sublink, index ) => {
                                                                return <a key={'sublink'+index} className="menu__mobile-subitem link" href={sublink.url}>{sublink.text}</a>
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </section>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}