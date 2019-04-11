import React from 'react';
import { FocusBoxWithLabels } from 'component-lib';

const content = {
    upperLeft: {
        title: 'Ordrenummer:',
        description: '24320656'
    },
    upperRight: {
        title: 'Bestillingsdato:',
        description: '17.01.2018'
    },
    bottomLeft: {
        title: 'Ditt mobilnummer',
        description: '915 43 325'
    },
    bottomRight: {
        title: 'Levering:',
        description: 'Posten'
    }
};

const Default = () => (
    <FocusBoxWithLabels content={content} />
);

export default Default;