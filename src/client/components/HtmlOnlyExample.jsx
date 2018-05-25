import React, { Component } from 'react';
import _ from 'lodash';
import { renderToStaticMarkup } from 'react-dom/server';

import Editor from './Editor';

class HtmlOnlyExample extends Component {
    state = {
        staticMarkup: null,
        showHTML: false,
        exampleName: null
    };

    componentWillMount() {
        const { examplePath } = this.props;
        const exampleName = _.startCase(/\/([^/]*)\..*$/.exec(examplePath)[1].replace(/[-\.]/g, ' ').replace(/\(/g, ' ('));
        const staticMarkup = this.getOriginalStaticMarkup();
        this.setState({
            staticMarkup,
            exampleName
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
        const { staticMarkup, showHTML, exampleName } = this.state;
        return (
            <div className='container container--medium container--no-margin'>
                <h3 className='heading heading--level-3'>{exampleName}</h3>
                <div dangerouslySetInnerHTML={{ __html: staticMarkup }}/>
                <div>
                    <a href='#' className='link' onClick={this.toggleHTML}>{showHTML ? 'Hide HTML' : 'Show HTML'}</a>
                </div>
                {showHTML && (
                    <Editor value={staticMarkup} readOnly={true} mode='html'/>
                )}
            </div>
        );
    }
}

export default HtmlOnlyExample;
