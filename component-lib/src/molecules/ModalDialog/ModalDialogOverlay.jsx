import React from 'react';
import classNames from 'classnames';

class ModalDialogOverlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.scrollPos = 0;
        this.body = null;
    }
    componentDidMount() {
        this.body = document.getElementsByTagName('body')[ 0 ];
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if (this.body && nextProps.active !== this.state.active) {
            this.toggleScroll(nextProps.active);
        }
    }
    toggleScroll(active){
        if (active) {
            this.scrollPos = window.scrollY;
            this.body.style.marginTop = `-${this.scrollPos}px`;
            this.body.style.overflowY = 'hidden';
        } else {
            this.body.style.marginTop = null;
            this.body.style.overflowY = 'auto';
            window.scrollY = this.scrollPos;
        }
    }
    render() {
        const { active, children, ...rest } = this.props;
        return (
            <div className={classNames('modal-dialog', { 'modal-dialog--active': active })} {...rest}>
                {children}
            </div>
        );
    }
}

export default ModalDialogOverlay;