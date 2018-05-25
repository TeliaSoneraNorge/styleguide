import React, { Component } from 'react';
import marked from 'marked';
import _ from 'lodash';
import { Heading } from '../../../component-lib/src/index';
import ComponentExample from './ComponentExample';
import HtmlOnlyExample from './HtmlOnlyExample';

class ComponentDocs extends Component {
    state = {
        showProps: false
    };

    getPropsDocs = () => {
        const { docs } = this.props.component;
        if (!docs.props) {
            return null;
        }
        return (
            <table className="full-width-table">
                <thead className="full-width-table__header">
                    <tr className="full-width-table__row">
                        <th className="full-width-table__cell" align='left' style={{ minWidth: '13%' }}>Name</th>
                        <th className="full-width-table__cell" align='left' style={{ minWidth: '13%' }}>Default</th>
                        <th className="full-width-table__cell" align='left' style={{ minWidth: '20%' }}>Type</th>
                        <th className="full-width-table__cell" align='left' style={{ }}>Description</th>
                    </tr>
                </thead>
                <tbody className="full-width-table__body">
                    {_.keys(docs.props).sort((a, b) => a.localeCompare(b)).map(key => this.getPropsDocsRow(key, docs.props[key]))}
                </tbody>
            </table>
        );
    };

    getPropsDocsRow = (name, prop) => {
        const defaultValue = prop.defaultValue ? prop.defaultValue.value : '';
        const type = do {
            if (prop.type) {
                prop.type.name === 'union'
                    ? _.map(prop.type.value, (val) => val.name).join('|')
                    : prop.type.name;
            } else {
                console.warn(`PropType ${name} in ${this.props.component.name} has no specified type!`);
                'not specified';
            }

        };
        return (
            <tr className="full-width-table__row" key={name}>
                <td className="full-width-table__cell" align='left' style={{ minWidth: '12%' }}>{name}</td>
                <td className="full-width-table__cell" align='left' style={{ minWidth: '12%' }}>{defaultValue}</td>
                <td className="full-width-table__cell" align='left' style={{ minWidth: '20%' }}>{type}</td>
                <td className="full-width-table__cell" align='left' style={{ }}>{prop.description}</td>
            </tr>
        );
    };

    toggleProps = (e) => {
        e.preventDefault();
        this.setState({
            showProps: !this.state.showProps
        });
    };

    render() {
        const { component, ...rest } = this.props;
        const { showProps } = this.state;
        if (!component) {
            console.error(component);
        }

        const { reactExamples, htmlExamples, name, docs, htmlOnly } = component;

        const propsDocs = !htmlOnly && this.getPropsDocs(docs);
        return (
            <div className='sg-component' {...rest}>
                <div className='container container--medium container--no-margin'>
                    <Heading level={2} text={_.startCase(name)}/>
                    {htmlOnly && (
                        <div>No React component available yet.</div>
                    )}
                    <div dangerouslySetInnerHTML={{ __html: marked(docs.description) }}/>
                    {propsDocs && (
                        <a href='#' className='link'
                            onClick={this.toggleProps}>{showProps ? 'Hide Props' : 'Show Props'}</a>
                    )}
                    {showProps && (
                        propsDocs
                    )}
                    {!htmlOnly && reactExamples.length === 0 && (
                        <div>No React examples available yet.</div>
                    )}
                </div>
                {reactExamples.map(examplePath => (
                    <ComponentExample examplePath={examplePath} key={examplePath}/>
                ))}
                {htmlExamples.map(examplePath => (
                    <HtmlOnlyExample examplePath={examplePath} key={examplePath}/>
                ))}
            </div>
        );
    }
}

export default ComponentDocs;
