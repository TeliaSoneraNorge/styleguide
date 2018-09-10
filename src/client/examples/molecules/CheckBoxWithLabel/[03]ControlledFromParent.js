import React from 'react';
import { CheckBoxWithLabel } from '@telia/styleguide';

class ControlledByParent extends React.Component {

    state = {
        checkboxValue: false
    }

    render() {
        return (
            <React.Fragment>
                <p>Getting checked value: {'' + this.state.checkboxValue}</p>
                <CheckBoxWithLabel
                    checked={this.state.checkboxValue}
                    onChange={(e) => this.setState({ checkboxValue: e.target.checked })}
                    label="Getting value from onClick" />
            </React.Fragment>
        );
    }
}

export default ControlledByParent;