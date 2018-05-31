import React from 'react';
import Editor from './Editor';

export default class CodeSnippet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.toggleHtmlClick = this.toggleHtmlClick.bind(this);
    }

    toggleHtmlClick(e) {
        e.preventDefault();

        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        if (this.props.disableToggle) {
            return (
                <div className="sg-code-snippet">
                    <Editor mode={this.props.language} value={this.props.code} readOnly />
                </div>
            );
        }

        return (
            <div className="sg-code-snippet">
                <a href="#" className="link"
                    onClick={this.toggleHtmlClick}>{this.state.isOpen ? 'Hide HTML' : 'Show HTML'}</a>
                {this.state.isOpen && (
                    <Editor mode={this.props.language} value={this.props.code} readOnly />
                )}
            </div>
        );
    }
}
