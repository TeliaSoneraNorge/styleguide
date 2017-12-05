import React from 'react';

import Button from '../../components/atoms/Button/Button';
import Heading from '../../components/atoms/Heading/Heading';
import Header from '../../components/molecules/Header/Header';

const FormsSamplePage = () =>
    <div>
        <Header pageTitle="Forms" withMask={false} withContentOverlap={false}>
            <p>
                On this page you can have a look at how forms should look.<br/>
                NOTE: there isn't mcuhmuch here yet because we haven't had many pages that contain forms.
                If you or your team have a lot of forms, maybe you could kick-start the development
                of some forms components?
            </p>
        </Header>

        <div className="container container--medium">
            <Heading text="Normal button" level={3} />
            <p className="paragraph">
                If you are not sure what button to use, use this one. It is the standard button we recommend
                to use most places.
            </p>
            <Button text="Foo Bar" />
        </div>

        <div className="container container--medium">
            <Heading text="Primary button" level={3} />
            <p className="paragraph">
                This should be used ideally no more than <em>once per page</em>. It would usually be the main
                action, such as "Kjøp" or "Bestill".
            </p>
            <Button text="Bestill" kind="primary" />
        </div>

        <div className="container container--medium">
            <Heading text="Regular button + cancel button" level={3} />
            <p className="paragraph">
                You may sometimes want a cancel button next to the main button.
            </p>
            <Button text="Foobar" />
            <Button text="Cancel" kind="cancel" />
        </div>

        <div className="container container--medium">
            <Heading text="Multiple (small) buttons" level={3} />
            <p className="paragraph">
                Here are multiple small buttons laid out next to each other, with a cancel.
            </p>
            <Button text="Foo" size="small" />
            <Button text="Bar" size="small" />
            <Button text="Baz" size="small" />
            <Button text="Cancel" kind="cancel" />
        </div>

    </div>;

export default FormsSamplePage;