import React from 'react';
import Tabs from 'react-simpletabs';

import CodeSnippet from './CodeSnippet';
import Color from './Color';
import Heading from '../../components/atoms/Heading/Heading';
import * as colorUtil from '../utils/colorUtil';

const ColorGrid = ({ colors }) =>
    <div>
        {_.map(colors, (color, name) =>
            <Color key={name} name={name} {...color} />
        )}
    </div>;

const ColorsSection = ({ colors }) =>
    <div>
        <Heading level={2} children="Colors" />

        <Tabs>
            <Tabs.Panel title="Color Palette">
                <div className="inner-content">
                    <ColorGrid colors={colors} />
                </div>
            </Tabs.Panel>
            <Tabs.Panel title="CSS Variables">
                <CodeSnippet code={colorUtil.fromColorsToCssVariables(colors)} language="css" />
            </Tabs.Panel>
            <Tabs.Panel title="SASS Variables">
                <CodeSnippet code={colorUtil.fromColorsToSassVariables(colors)} language="sass" />
            </Tabs.Panel>
            <Tabs.Panel title="LESS Variables">
                <CodeSnippet code={colorUtil.fromColorsToLessVariables(colors)} language="less" />
            </Tabs.Panel>
        </Tabs>

    </div>;

export default ColorsSection;