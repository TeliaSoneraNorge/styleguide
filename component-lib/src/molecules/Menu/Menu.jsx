import React from 'react';
import classnames from 'classnames';
import Tabs from '../../molecules/Tabs/Tabs';
import Container from '../../atoms/Container/Container';
import SVG from '../../atoms/SvgIcon/SvgIcon';
import PropTypes from 'prop-types';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

/**
 * Status: *finished*.
 **/
export default class Menu extends React.Component {
    static propTypes = {
        menuLinks: PropTypes.array,
        logoImageDesktopPath: PropTypes.string,
        logoTitle: PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
            selectedIndex : 0,
            searchFocus: false,
            open: false,
            mobileMenuOpen: false
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
                                            className="menu__heading-item link">
                                            {menuLink.heading}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="menu__search">
                        <input className="menu__search-input" 
                            type="text" 
                            placeholder="Søk"
                            onFocus={ () => {this.setState({ searchFocus: true })} }
                            onBlur={ () => {this.setState({ searchFocus: false })} } />
                        <SvgIcon className="menu__search-icon" iconName="ico_search" color="black" />
                        <span className="menu__search-label"> Søk </span>
                    </div>
                    <button className="menu__login-button button button--small">
                        <SvgIcon className="menu__login-button-icon" iconName="ico_mobile" color="black" /> logg inn
                    </button>
                    <button className="menu__mobile-button" onClick={ () => { this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen }) }}>
                        <span className="menu__mobile-button-line"></span>
                        <span className="menu__mobile-button-line"></span>
                        <span className="menu__mobile-button-text"> Meny </span>
                    </button>
                </div>
                <div ref={ ( menu_content ) => { this.menu_content = menu_content } } className="menu__content">
                    {
                        this.props.menuLinks &&
                        this.props.menuLinks.map(( menuLink, index ) => {
                            return (
                                <section 
                                    id={`${menuLink.heading}-panel`} 
                                    className="menu__content-panel"
                                    hidden={ this.state.selectedIndex !== index }>
                                    {
                                        menuLink.links.map( ( link, index ) => {
                                            if(link.url != null) return <a key={'link'+index} className="menu__item link" href={link.url}>{link.text}</a>
                                            else return ( 
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
                                            )
                                        })
                                    }
                                </section>
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
                                                    className="menu__mobile-heading-item link">
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
                                    hidden={ this.state.selectedIndex !== index }>
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