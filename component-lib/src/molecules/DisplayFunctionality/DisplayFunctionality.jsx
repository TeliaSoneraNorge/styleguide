import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Status: *finished*
 */
class DisplayFunctionality extends React.Component {

    constructor(){
        super();

        this.state = {
            index: 0
        }

        this.onClick = this.onClick.bind(this);
    }

    onClick(i){
        this.setState({index: i});
    }

    render(){
        return(
            <div className={classnames('display-functionality', {
                [this.props.className]: this.props.className,
            })}>
                <div className={classnames('display-functionality__container container container--large container--no-margin', {
                    'display-functionality__container--reverse ': this.props.reverse,
                })}>
                    <div className="display-functionality__col">
                        {this.props.children}
                    </div>
                    <div className="display-functionality__col">
                        <img className="display-functionality__laptop" src="/public/website-images/laptop.png" />
                        {
                            this.props.imgs.map((img, i) => {
                                return <img key={i} src={img} className={classnames('display-functionality__image', {
                                    'display-functionality__image--hidden': this.state.index != i})} />
                            })
                        }
                        <div className="display-functionality__paging">
                            {
                                this.props.imgs.map((img, i) => {
                                    return <span key={i} onClick={() => {this.onClick(i)}} className={classnames('display-functionality__bullet', {
                                        'display-functionality__bullet--active': this.state.index == i,})}></span>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

DisplayFunctionality.propTypes = {
    imgs: PropTypes.arrayOf(PropTypes.string),
    reverse: PropTypes.bool
};


export default DisplayFunctionality;

