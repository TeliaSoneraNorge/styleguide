import React from 'react';

import Heading from '../../components/atoms/Heading/Heading';

const RepositorySection = () =>
    <div>
        <Heading level={2} text="The repository" />
        <p>The repository can be found on TeliaSoneraNorge's GitHub account: <a className="link" href="https://github.com/TeliaSoneraNorge/styleguide">TeliaSoneraNorge/styleguide</a></p>
    </div>;

export default RepositorySection;