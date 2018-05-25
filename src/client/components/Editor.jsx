import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import ace from 'brace';
import 'brace/mode/jsx';
import 'brace/mode/css';
import 'brace/mode/html';
import 'brace/theme/clouds';
import 'brace/ext/language_tools';
import 'brace/snippets/html';
import 'brace/snippets/jsx';
import 'brace/snippets/css';

// TODO: Nice to have: Set up custom code completers by using an ace extension
// https://github.com/thlorenz/brace/issues/19
// const languageTools = ace.acequire('ace/ext/language_tools');

class Editor extends Component {
    static id = 0;
    static defaultProps = {
        mode: 'jsx',
        readOnly: false,
    };
    getId = () => `component-editor-${Editor.id++}`;

    render() {
        return (
            <AceEditor
                style={{
                    width: '100%'
                }}
                mode={this.props.mode}
                theme='clouds'
                name={this.getId()}
                onChange={this.props.onChange}
                fontSize={14}
                showPrintMargin={false}
                showGutter={true}
                highlightActiveLine={false}
                enableBasicAutocompletion
                enableLiveAutocompletion
                value={this.props.value}
                editorProps={{ $blockScrolling: true }}
                showLineNumbers={true}
                tabSize={2}
                maxLines={Infinity}
                readOnly={this.props.readOnly}
                setOptions={{
                    autoScrollEditorIntoView: true,
                    enableSnippets: true,
                    animatedScroll: true,
                    useWorker: false
                }}
            />
        );
    }
}
Editor.propTypes = {
    mode: PropTypes.string,
    readOnly: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default Editor;
