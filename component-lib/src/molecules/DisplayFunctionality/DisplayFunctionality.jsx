import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

/**
 * Status: *finished*
 * Category: Misc
 */
class DisplayFunctionality extends React.Component {
    constructor() {
        super();

        this.state = {
            index: 0
        };

        this.onClick = this.onClick.bind(this);
    }
    onClick(i) {
        this.setState({ index: i });
    }
    render() {
        return (
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
                        <img className="display-functionality__device" src={this.props.deviceImageUrl} />
                        {
                            this.props.imgs.map((image, i) => {
                                return <img key={image.img}
                                    src={image.img}
                                    alt={image.imgAlt}
                                    className={classnames(`display-functionality__image display-functionality__image--${this.props.device ? this.props.device : 'laptop'}`, {
                                    'display-functionality__image--hidden': this.state.index !== i })} />;
                            })
                        }
                        <div className="display-functionality__paging">
                            {
                                this.props.imgs.map((img, i) => {
                                    return <span key={img} onClick={() => { this.onClick(i); }}
                                        className={classnames('display-functionality__bullet', {
                                            'display-functionality__bullet--active': this.state.index === i })}></span>;
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
    imgs: PropTypes.arrayOf(PropTypes.shape({
        img: PropTypes.string,
        imgAlt: PropTypes.string
    })),
    reverse: PropTypes.bool,
    device: PropTypes.string,
    deviceImageUrl: PropTypes.string
};


export default DisplayFunctionality;

