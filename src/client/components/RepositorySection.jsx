import React from 'react';

import Heading from '../../components/atoms/Heading/Heading';

const RepositorySection = () =>
    <div>
        <Heading level={2} children="The repository" />
        <p>The repository can be found on TeliaSoneraNorge's GitHub account: <a href="https://github.com/TeliaSoneraNorge/styleguide">TeliaSoneraNorge/styleguide</a></p>
    </div>;

export default RepositorySection;