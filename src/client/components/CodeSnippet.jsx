import React from 'react';

const Prism = window.Prism; // A global, added with a <script> tag in the HTML template

function toHighlightedHtml(code, language) {
    return Prism.highlight(code, Prism.languages[language]);
}

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
                    <pre className={`language-${this.props.language}`}>
                        <code className={`language-${this.props.language}`} dangerouslySetInnerHTML={{ __html: toHighlightedHtml(this.props.code, this.props.language) }}></code>
                    </pre>
                </div>
            );
        }
        
        return (
            <div className="sg-code-snippet">
                <a href="#" className="link" onClick={this.toggleHtmlClick}>{this.state.isOpen ? "Hide HTML" : "Show HTML"}</a>
                {this.state.isOpen ?
                    <pre className={`language-${this.props.language}`}>
                        <code className={`language-${this.props.language}`} dangerouslySetInnerHTML={{ __html: toHighlightedHtml(this.props.code, this.props.language) }}></code>
                    </pre> : null}
            </div>
        );
    }
}
