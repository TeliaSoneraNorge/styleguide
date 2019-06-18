import _ from 'lodash';
import React from 'react';

import { Header, Heading } from '@telia/styleguide';

import Color from '../common/Color';
import ComponentDocs from '../common/ComponentDocs';
import { getStaticData } from '../../utils/staticDataUtil';
import { getComponentsByCategory } from '../../utils/componentUtil';

const colors = getStaticData('colors');

const styleComponents = getComponentsByCategory()['style'].components;

const getComponentByName = (name) =>
    styleComponents.filter(component => component.name === name)[0];

/**
 * Improvement: Redisign layout so that it is clearer what the sections
 */
const StylePage = () =>
    <div>
        <Header iconName="ico_code-2" pageTitle="Page style" />
        <div className=" sg-component">
            <div className="container container--medium container--extra-padding-top">
                <Heading level={2} text="Colors" />
                <p className="paragraph">
                    The color palette below was taken from the
                    <a href="https://brandhub.teliacompany.com/document/14#/colour-palette/our-colour-palette">
                        Telia Company design document
                    </a>
                    and shows the recommended font color to give the correct contrast.
                </p>
                <div>
                    <div className="sg-colors-wrapper">
                        {_.map(colors[0], (color, name) => <Color key={name} name={name} {...color} />)}
                    </div>
                    <div className="sg-colors-wrapper">
                        {_.map(colors[1], (color, name) => <Color key={name} name={name} {...color} />)}
                    </div>
                    <div className="sg-colors-wrapper">
                        {_.map(colors[2], (color, name) => <Color key={name} name={name} {...color} />)}
                    </div>
                </div>
            </div>
        </div>

        <div className="container container--medium container--extra-padding-top">
            <Heading level={2} text="Icons" />
        </div>
        <ComponentDocs component={getComponentByName('SvgIcon')} />
        <ComponentDocs component={getComponentByName('IconAnimated')} />

        <div className="container container--medium">
            <Heading level={2} text="Typography" />
        </div>
        <ComponentDocs component={getComponentByName('RichText')} />
        <div className="container container--medium">
            <Heading level={2} text="Heading" />
            <ul>
                <li><strong>Heading level one</strong> should be used once per page. And is the main heading of the page. Due to accessibility and readability this is the only heading that use the pebble font.</li>
                <li>The content of a page is usually divided into sections, and <strong>heading level two</strong> should be used as the heading of these.</li>
                <li><strong>Heading level three</strong> and <strong>heading level four</strong> is used when you need to divide content in even smaller sections.</li>
            </ul>

            <p className="paragraph">These are the heading levels defined in this styleguide: </p>
            {_.map([1, 2, 3, 4], (level) =>
                <Heading key={level} level={level} text={`h${level}. Heading level ${level}`} />
            )}
        </div>
        <ComponentDocs component={getComponentByName('Paragraph')} />
        <ComponentDocs component={getComponentByName('Quote')} />
        <ComponentDocs component={getComponentByName('SpecialMessage')} />
        <ComponentDocs component={getComponentByName('DescriptionList')} />
    </div>;

export default StylePage;