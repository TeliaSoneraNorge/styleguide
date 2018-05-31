import React, { Component } from 'react';
import _ from 'lodash';
import { renderToStaticMarkup } from 'react-dom/server';

import Editor from './Editor';
import { isFullWidthComponent } from '../utils/componentUtil';

class HtmlOnlyExample extends Component {
    state = {
        staticMarkup: null,
        showHTML: false,
        exampleName: null,
        componentName: null,
    };

    componentWillMount() {
        const { examplePath } = this.props;
        const pathGroups = /\/([^/]*)\/([^/]*)\..*$/.exec(examplePath);
        const exampleName = _.startCase(pathGroups[2].replace(/[-\.]/g, ' ').replace(/\(/g, ' ('));
        const componentName = pathGroups[1];
        const staticMarkup = this.getOriginalStaticMarkup();
        this.setState({
            staticMarkup,
            exampleName,
            componentName,
        });
    }

    getOriginalStaticMarkup = () => {
        const { examplePath } = this.props;
        return require(`!!raw-loader!../examples/${examplePath}`);
    };

    toggleHTML = (e) => {
        e.preventDefault();
        this.setState({
            showHTML: !this.state.showHTML
        });
    };

    render() {
        const { staticMarkup, showHTML, exampleName, componentName } = this.state;
        return (
            isFullWidthComponent(componentName)
                ? <div>
                    <div className="container container--medium container--no-margin">
                        <h3 className="heading heading--level-3">{exampleName}</h3>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: staticMarkup }} />
                    {showHTML && (
                        <div className="container container--medium container--no-margin">
                            <Editor value={staticMarkup} readOnly={true} mode="html" />
                        </div>
                    )}
                </div>
                : <div className="container container--medium container--no-margin">
                    <h3 className="heading heading--level-3">{exampleName}</h3>
                    <div dangerouslySetInnerHTML={{ __html: staticMarkup }} />
                    <div>
                        <a href="#" className="link" onClick={this.toggleHTML}>
                            {showHTML ? 'Hide HTML' : 'Show HTML'}
                        </a>
                    </div>
                    {showHTML && (
                        <Editor value={staticMarkup} readOnly={true} mode="html" />
                    )}
                </div>
        );
    }
}

export default HtmlOnlyExample;
