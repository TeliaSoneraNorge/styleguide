import React, { Component } from 'react';
import { Form, Button } from '@telia/styleguide';

class SimpleLogin extends Component {
    state = {
        showSuccessMessage: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            showSuccessMessage: true
        });
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.FormRow>
                        <Form.FormColumn>
                            <label className='label label--gray-text textbox-with-label'>
                                <span className='textbox-with-label__label-text'>Phone Number</span>
                                <input type='text' className='textbox-with-label__input' placeholder='number'/>
                            </label>
                        </Form.FormColumn>
                    </Form.FormRow>
                    <Form.FormRow>
                        <Form.FormColumn>
                            <label className='label label--gray-text textbox-with-label'>
                                <span className='textbox-with-label__label-text'>Password</span>
                                <input type='password' className='textbox-with-label__input' placeholder='password'/>
                            </label>
                        </Form.FormColumn>
                    </Form.FormRow>
                    <Form.FormRow>
                        <Button text='Login' type='submit'/>
                    </Form.FormRow>
                </Form>
                {this.state.showSuccessMessage && (
                    <Form.FormSuccessMessage>All done!</Form.FormSuccessMessage>
                )}
            </div>
        );
    }
}

export default SimpleLogin;
