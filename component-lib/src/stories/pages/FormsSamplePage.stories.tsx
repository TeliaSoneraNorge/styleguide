import React from 'react';

import {
  Button,
  Heading,
  Header,
  TextBoxWithLabel,
  Form,
  CheckBoxWithLabel,
  DropDownListWithLabel,
} from '../../index';

export default {
  title: 'Examples/Pages',
};

export const FormsSamplePage = () => (
  <div>
    <Header pageTitle="Forms" withMask={false} withContentOverlap={false}>
      <p>
        On this page you can have a look at how forms should look.
        <br />
        NOTE: there isn&#39;t much here yet because we haven&#39;t had many pages that contain forms. If you or your
        team have a lot of forms, maybe you could kick-start the development of some forms components?
      </p>
    </Header>

    <div className="container container--medium">
      <Heading text="Normal button" level={3} />
      <p className="paragraph">
        If you are not sure what button to use, use this one. It is the standard button we recommend to use most places.
      </p>
      <Button text="Foo Bar" />
    </div>

    <div className="container container--medium">
      <Heading text="Primary button" level={3} />
      <p className="paragraph">
        This should be used ideally no more than <em>once per page</em>. It would usually be the main action, such as
        &#34;Kjøp&#34; or &#34;Bestill&#34;.
      </p>
      <Button text="Bestill" kind="primary" />
    </div>

    <div className="container container--medium">
      <Heading text="Regular button + cancel button" level={3} />
      <p className="paragraph">You may sometimes want a cancel button next to the main button.</p>
      <Button text="Foobar" />
      <Button text="Cancel" kind="cancel" />
    </div>

    <div className="container container--medium">
      <Heading text="Multiple (small) buttons" level={3} />
      <p className="paragraph">Here are multiple small buttons laid out next to each other, with a cancel.</p>
      <Button text="Foo" size="small" />
      <Button text="Bar" size="small" />
      <Button text="Baz" size="small" />
      <Button text="Cancel" kind="cancel" />
    </div>

    <div className="container container--medium">
      <h3 className="heading heading--level-3">Example login form with GET</h3>
      <br />
      <Form action="/get.html" method="GET">
        <Form.FormRow>
          <Form.FormColumn>
            {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'labelText' does not exist on type 'Intri... Remove this comment to see the full error message */}
            <TextBoxWithLabel labelText="Phone Number" type="text" placeholder="number" />
          </Form.FormColumn>
        </Form.FormRow>
        <Form.FormRow>
          <Form.FormColumn>
            {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'labelText' does not exist on type 'Intri... Remove this comment to see the full error message */}
            <TextBoxWithLabel labelText="Password" type="password" placeholder="password" />
          </Form.FormColumn>
        </Form.FormRow>
        <Form.FormRow>
          <Button text="Login" type="submit" />
        </Form.FormRow>
      </Form>
    </div>

    <div className="container container--medium">
      <h3 className="heading heading--level-3">Example login form with js</h3>
      <br />
      <Form
        onSubmit={function(e: any) {
          e.preventDefault();
        }}
      >
        <Form.FormRow>
          <Form.FormColumn>
            {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'labelText' does not exist on type 'Intri... Remove this comment to see the full error message */}
            <TextBoxWithLabel labelText="Phone Number" type="text" placeholder="number" />
          </Form.FormColumn>
        </Form.FormRow>
        <Form.FormRow>
          <Form.FormColumn>
            {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'labelText' does not exist on type 'Intri... Remove this comment to see the full error message */}
            <TextBoxWithLabel labelText="Password" type="password" placeholder="password" />
          </Form.FormColumn>
        </Form.FormRow>
        <Form.FormRow>
          <Button text="Login" type="submit" />
        </Form.FormRow>
      </Form>
    </div>

    <div className="container container--medium">
      <h3 className="heading heading--level-3">Example multi column form</h3>
      <br />
      <Form>
        <Form.FormRow>
          <Form.FormColumn>
            {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'labelText' does not exist on type 'Intri... Remove this comment to see the full error message */}
            <TextBoxWithLabel labelText="Name" type="text" placeholder="name" />
          </Form.FormColumn>
        </Form.FormRow>
        <Form.FormRow>
          <Form.FormColumn size="half">
            {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'labelText' does not exist on type 'Intri... Remove this comment to see the full error message */}
            <TextBoxWithLabel labelText="D.O.B" type="text" placeholder="01/01/2018" />
          </Form.FormColumn>
        </Form.FormRow>
        <Form.FormRow>
          <Form.FormColumn size="half">
            {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'labelText' does not exist on type 'Intri... Remove this comment to see the full error message */}
            <TextBoxWithLabel labelText="Telephone" type="text" placeholder="telephone" />
          </Form.FormColumn>
        </Form.FormRow>
        <Form.FormRow>
          <Form.FormColumn>
            {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'labelText' does not exist on type 'Intri... Remove this comment to see the full error message */}
            <TextBoxWithLabel labelText="Email" type="text" placeholder="email" />
          </Form.FormColumn>
        </Form.FormRow>
        <Form.FormRow>
          <Form.FormColumn>
            {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'labelText' does not exist on type 'Intri... Remove this comment to see the full error message */}
            <TextBoxWithLabel labelText="Address" type="text" placeholder="address" />
          </Form.FormColumn>
          <Form.FormColumn>
            {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'labelText' does not exist on type 'Intri... Remove this comment to see the full error message */}
            <TextBoxWithLabel labelText="Entrance" type="text" placeholder="entrance" />
            {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'labelText' does not exist on type 'Intri... Remove this comment to see the full error message */}
            <TextBoxWithLabel labelText="Apt.No." type="text" placeholder="apt. no" />
          </Form.FormColumn>
        </Form.FormRow>
        <Form.FormRow>
          <Form.FormColumn size="half">
            {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'labelText' does not exist on type 'Intri... Remove this comment to see the full error message */}
            <TextBoxWithLabel labelText="Post Code" type="text" placeholder="Post Code" />
          </Form.FormColumn>
        </Form.FormRow>
        <Form.FormRow>
          <Form.FormColumn>
            <CheckBoxWithLabel label="I have a C/O" defaultChecked={false} />
          </Form.FormColumn>
        </Form.FormRow>
        <Form.FormRow>
          <Form.FormColumn>
            {/* @ts-expect-error ts-migrate(2322) FIXME: Property 'labelText' does not exist on type 'Intri... Remove this comment to see the full error message */}
            <TextBoxWithLabel labelText="C/O Address" type="text" placeholder="c/o address" />
          </Form.FormColumn>
        </Form.FormRow>
        <Form.FormRow>
          <Form.FormColumn>
            <DropDownListWithLabel
              label="Dropdown Label"
              options={['1', '2']}
              selectedOption={'1'}
              changeSelectedOption={() => {}}
            />
          </Form.FormColumn>
        </Form.FormRow>
        <Form.FormRow>
          <Form.FormColumn>
            <DropDownListWithLabel options={['1', '2']} selectedOption={'1'} changeSelectedOption={() => {}} />
          </Form.FormColumn>
        </Form.FormRow>
      </Form>
    </div>
  </div>
);
