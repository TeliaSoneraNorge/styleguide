import React, { Component, createElement, isValidElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as Babel from 'babel-standalone';
import _ from 'lodash';


import Editor from "./Editor";
import { beautifyHtml } from '../utils/componentUtil';

const babelConfig = {
    presets: ["es2015", "react", "stage-2"],
};

class ComponentExample extends Component {
    state = {
        exampleName: null,
        sourceCode: null,
        staticMarkup: null,
        exampleElement: null,
        error: null,
        showJSX: false,
        showHTML: false
    };

    componentWillMount() {
        const exampleName = _.startCase(
            /\/([^/]*)\..*$/.exec(this.props.examplePath)[1]
                .replace(/[-\.]/g, ' ')
                .replace(/\(/g, ' (')
                .replace(/^\[.*]/g, ''));
        const sourceCode = this.getOriginalSourceCode();
        const { error, exampleElement } = this.getReactElementFromSourceCode(sourceCode);
        if (error) {
            this.setState({
                sourceCode,
                error,
                exampleName
            });
        } else {
            this.setState({
                sourceCode,
                exampleElement,
                staticMarkup: beautifyHtml(renderToStaticMarkup(exampleElement)),
                exampleName
            });
        }
    }

    getOriginalSourceCode = () => {
        const { examplePath } = this.props;
        return require(`!!raw-loader!../examples/${examplePath}`);
    };

    getReactElementFromSourceCode = (sourceCode) => {
        // Heads Up!
        //
        // These are used in the code editor scope when rewriting imports to const statements
        // We use require() to preserve variable names
        // Webpack rewrites import names
        const REACT = require('react');
        const TELIA_STYLEGUIDE = require('../../../component-lib/src/index');

        // Should use an AST transform here... oh well :/
        // Rewrite the example file into an IIFE that returns a component
        // which can be rendered in this ComponentExample's render() method

        // rewrite imports to const statements against the UPPERCASE module names
        const imports = _.get(/(import[\s\S]*from[\s\S]*['"])/.exec(sourceCode), '[1]', '')
            .replace(/[\s\n]+/g, ' ')         // normalize spaces and make one line
            .replace(/ import/g, '\nimport')  // one import per line
            .split('\n')                      // split lines
            .filter(l => l.trim() !== '')     // remove empty lines
            .map(l => {
                const defaultImport = _.get(/import\s+(\w+)/.exec(l), '[1]');
                const destructuredImports = _.get(/import.*({[\s\w,}]+)\s+from/.exec(l), '[1]');
                const module = _.snakeCase(_.get(/import.*from\s+['"]([\w\-_@\/]+)/.exec(l), '[1]', '')).toUpperCase();

                return _.compact([
                    defaultImport && `const ${defaultImport} = ${module}`,
                    destructuredImports && `const ${destructuredImports} = ${module}`,
                ]).join('\n');
            })
            .join('\n');
        // capture the default export so we can return it from the IIFE
        const defaultExport = _.get(/export\s+default\s+(?:class|function)?(?:\s+)?(\w+)/.exec(sourceCode), '[1]');
        // consider everything after the imports to be the body
        // remove `export` statements except `export default class|function`
        const body = _.get(/import[\s\S]*from.*([\s\S]*)/.exec(sourceCode), '[1]', '')
            .replace(/export\s+default\s+(?!class|function)\w+([\s\n]+)?/, '')  // remove `export default Foo` statements
            .replace(/export\s+default\s+/, ''); // remove `export default ...`
        const IIFE = `(function() {\n${imports}${body}return ${defaultExport}\n}())`;

        try {
            const { code } = Babel.transform(IIFE, babelConfig);
            const Example = eval(code); // eslint-disable-line no-eval
            const exampleElement = _.isFunction(Example) ? <Example/> : Example;

            if (!isValidElement(exampleElement)) {
                return {
                    error: 'Default export is not a valid element. Type:' + {}.toString.call(exampleElement)
                };
            } else {
                return {
                    exampleElement
                };
            }
        } catch (err) {
            return {
                error: err.message
            };
        }
    };

    toggleHTML = (e) => {
        e.preventDefault();
        this.setState({
            showHTML: !this.state.showHTML
        });
    };

    toggleJSX = (e) => {
        e.preventDefault();
        this.setState({
            showJSX: !this.state.showJSX
        });
    };

    onJsxCodeChange = (sourceCode) => {
        // Transpile sourceCode to ES5 and render it
        const { error, exampleElement } = this.getReactElementFromSourceCode(sourceCode);
        if (error) {
            this.setState({
                sourceCode,
                error
            });
        } else {
            this.setState({
                sourceCode,
                exampleElement,
                staticMarkup: beautifyHtml(renderToStaticMarkup(exampleElement)),
                error: null // remove last error
            });
        }
    };


    render() {
        const { exampleElement, sourceCode, staticMarkup, error, showJSX, showHTML, exampleName } = this.state;
        return (
            <div className='container container--medium container--no-margin'>
                <h3 className='heading heading--level-3'>{exampleName}</h3>
                {exampleElement}
                <div>
                    <a href='#' className='link' onClick={this.toggleJSX}>{showJSX ? 'Hide JSX' : 'Show JSX'}</a>
                </div>
                {showJSX && (
                    <Editor value={sourceCode} onChange={this.onJsxCodeChange} mode='jsx'/>
                )}
                {error && (
                    <pre>{error}</pre>
                )}
                <div>
                    <a href='#' className='link'
                        onClick={this.toggleHTML}>{showHTML ? 'Hide HTML' : 'Show HTML'}</a>
                </div>
                {showHTML && (
                    <Editor value={staticMarkup} readOnly={true} mode='html'/>
                )}
            </div>
        );
    }
}

export default ComponentExample;
