import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Modal, ModalHeader, ModalBody, ModalFooter } from './index';
import Button from '../../atoms/Button';
import TextBox from '../../atoms/TextBox';
import { Toggle } from '../../atoms/Toggle';
import { ModalDivider } from './ModalDivider';

storiesOf('Component library/Molecules/Modal', module)
  .add('Default', () => {
    return (
      <div style={{ height: '300px' }}>
        <Modal open={true} setOpen={() => {}}>
          <ModalHeader>
            <h2>En modal</h2>
          </ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, porro? Ipsa ab inventore vel praesentium ea,
            cupiditate sed eius dolorum veritatis, optio possimus debitis deleniti tempore quas exercitationem unde.
            Repudiandae.
          </ModalBody>
          <ModalFooter>
            <Button text="Close" size="small" />
          </ModalFooter>
        </Modal>
      </div>
    );
  })
  .add('With bordered header', () => {
    return (
      <div style={{ height: '300px' }}>
        <Modal open={true} setOpen={() => {}}>
          <ModalHeader border={true}>
            <h2>En modal</h2>
          </ModalHeader>
          <ModalBody>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nesciunt, nobis ut repellat non minus
            facilis assumenda quae tempora, magni dignissimos eveniet cum et? Eveniet accusamus alias est harum saepe.
          </ModalBody>
          <ModalFooter>
            <Button text="Close" size="small" />
          </ModalFooter>
        </Modal>
      </div>
    );
  })
  .add('With dividers', () => {
    return (
      <div style={{ height: '300px' }}>
        <Modal open={true} setOpen={() => {}}>
          <ModalHeader>
            <h2>En modal</h2>
          </ModalHeader>
          <ModalBody>
            Below me is a model divider with padding
            <ModalDivider />
            Below me is a model divider in full width
            <ModalDivider fullWidth={true} />
          </ModalBody>
          <ModalFooter>
            <Button text="Close" size="small" />
          </ModalFooter>
        </Modal>
      </div>
    );
  })
  .add('With focus elements', () => {
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);

    const fakeSubmit = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    };

    return (
      <div style={{ height: '400px' }}>
        <Modal open={true} setOpen={() => {}}>
          <ModalHeader>
            <h2>A modal with lots of focus elements</h2>
          </ModalHeader>
          <ModalBody>
            Tab throught me to test accessibility
            <Button size="small" isDisabled={true} text="I should be skipped" />
            <input disabled={true} />
            <input disabled={false} />
            <TextBox small={true} disabled={true} placeholder="First name" />
            <TextBox small={true} placeholder="Last name" />
            <Toggle checked={checked} onChange={(e) => setChecked(e.target.checked)} />
            <Button size="small" text="Click" />
            <Button size="small" isDisabled={true} text="I should be skipped" />
            <Button size="small" isProcessing={true} text="I should also be skipped" />
          </ModalBody>
          <ModalFooter>
            <Button text="Lagre" size="small" kind="primary" onClick={fakeSubmit} isProcessing={loading} />
            <Button text="Close" size="small" onClick={() => {}} isDisabled={loading} />
          </ModalFooter>
        </Modal>
      </div>
    );
  })
  .add('Small', () => (
    <div style={{ height: '300px' }}>
      <div>Stuff in the backgound</div>
      <Button text="hei" />
      <Modal open={true} setOpen={() => {}} size="small">
        <ModalHeader>
          <h2>A small modal</h2>
        </ModalHeader>
        <ModalBody>Modal body</ModalBody>
        <ModalFooter>
          <Button text="Close" size="small" />
        </ModalFooter>
      </Modal>
    </div>
  ))
  .add('Large', () => (
    <div style={{ height: '300px' }}>
      <Modal open={true} setOpen={() => {}} size="large">
        <ModalHeader>
          <h2>A large modal</h2>
        </ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias illum officiis facilis. Provident veniam
          voluptas suscipit odit, debitis vero neque voluptatibus consequuntur voluptate commodi ducimus, deleniti
          cumque, vitae maiores.
          <ModalDivider fullWidth={true} />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus velit corrupti sint, praesentium
          sapiente atque ipsum odit, quae ex expedita, assumenda beatae culpa blanditiis eum perferendis nobis
          perspiciatis eius! Ratione.
        </ModalBody>
        <ModalFooter>
          <Button text="Close" size="small" />
        </ModalFooter>
      </Modal>
    </div>
  ))
  .add('Fullscreen', () => (
    <div style={{ height: '300px' }}>
      <Modal open={true} setOpen={() => {}} size="fullscreen">
        <ModalHeader border={true}>
          <h2>Hello</h2>
          <div>desvription</div>
        </ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias illum officiis facilis. Provident veniam
          voluptas suscipit odit, debitis vero neque voluptatibus consequuntur voluptate commodi ducimus, deleniti
          cumque, vitae maiores.
          <ModalDivider fullWidth={true} />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus velit corrupti sint, praesentium
          sapiente atque ipsum odit, quae ex expedita, assumenda beatae culpa blanditiis eum perferendis nobis
          perspiciatis eius! Ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias illum officiis
          facilis. Provident veniam voluptas suscipit odit, debitis vero neque voluptatibus consequuntur voluptate
          commodi ducimus, deleniti cumque, vitae maiores.
          <ModalDivider fullWidth={true} />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus velit corrupti sint, praesentium
          sapiente atque ipsum odit, quae ex expedita, assumenda beatae culpa blanditiis eum perferendis nobis
          perspiciatis eius! Ratione.
        </ModalBody>
        <ModalFooter>
          <Button text="Close" size="small" />
        </ModalFooter>
      </Modal>
    </div>
  ))
  .add('Overflown Modal with scroll', () => (
    <div style={{ height: '300px' }}>
      <Modal open={true} setOpen={() => {}} size="large">
        <ModalHeader>
          <h2>A large modal</h2>
        </ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias illum officiis facilis. Provident veniam
          voluptas suscipit odit, debitis vero neque voluptatibus consequuntur voluptate commodi ducimus, deleniti
          cumque, vitae maiores.
          <ModalDivider fullWidth={true} />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus velit corrupti sint, praesentium
          sapiente atque ipsum odit, quae ex expedita, assumenda beatae culpa blanditiis eum perferendis nobis
          perspiciatis eius! Ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias illum officiis
          facilis. Provident veniam voluptas suscipit odit, debitis vero neque voluptatibus consequuntur voluptate
          commodi ducimus, deleniti cumque, vitae maiores.
          <ModalDivider fullWidth={true} />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus velit corrupti sint, praesentium
          sapiente atque ipsum odit, quae ex expedita, assumenda beatae culpa blanditiis eum perferendis nobis
          perspiciatis eius! Ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias illum officiis
          facilis. Provident veniam voluptas suscipit odit, debitis vero neque voluptatibus consequuntur voluptate
          commodi ducimus, deleniti cumque, vitae maiores.
          <ModalDivider fullWidth={true} />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus velit corrupti sint, praesentium
          sapiente atque ipsum odit, quae ex expedita, assumenda beatae culpa blanditiis eum perferendis nobis
          perspiciatis eius! Ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias illum officiis
          facilis. Provident veniam voluptas suscipit odit, debitis vero neque voluptatibus consequuntur voluptate
          commodi ducimus, deleniti cumque, vitae maiores.
          <ModalDivider fullWidth={true} />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus velit corrupti sint, praesentium
          sapiente atque ipsum odit, quae ex expedita, assumenda beatae culpa blanditiis eum perferendis nobis
          perspiciatis eius! Ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias illum officiis
          facilis. Provident veniam voluptas suscipit odit, debitis vero neque voluptatibus consequuntur voluptate
          commodi ducimus, deleniti cumque, vitae maiores.
          <ModalDivider fullWidth={true} />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus velit corrupti sint, praesentium
          sapiente atque ipsum odit, quae ex expedita, assumenda beatae culpa blanditiis eum perferendis nobis
          perspiciatis eius! Ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias illum officiis
          facilis. Provident veniam voluptas suscipit odit, debitis vero neque voluptatibus consequuntur voluptate
          commodi ducimus, deleniti cumque, vitae maiores.
          <ModalDivider fullWidth={true} />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus velit corrupti sint, praesentium
          sapiente atque ipsum odit, quae ex expedita, assumenda beatae culpa blanditiis eum perferendis nobis
          perspiciatis eius! Ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias illum officiis
          facilis. Provident veniam voluptas suscipit odit, debitis vero neque voluptatibus consequuntur voluptate
          commodi ducimus, deleniti cumque, vitae maiores.
          <ModalDivider fullWidth={true} />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus velit corrupti sint, praesentium
          sapiente atque ipsum odit, quae ex expedita, assumenda beatae culpa blanditiis eum perferendis nobis
          perspiciatis eius! Ratione.
        </ModalBody>
        <ModalFooter>
          <Button text="Close" size="small" />
        </ModalFooter>
      </Modal>
    </div>
  ))
  .add('Trigger modal', () => {
    const [open, setOpen] = useState(false);
    return (
      <div style={{ height: '300px' }}>
        <Button text="Open Modal" onClick={() => setOpen(true)} />
        <Modal open={open} setOpen={() => setOpen(false)}>
          <ModalHeader>
            <h2>You launched a modal!</h2>
          </ModalHeader>
          <ModalBody>
            click the button og press <code>escape</code> to close the modal
          </ModalBody>
          <ModalFooter>
            <Button text="Close" size="small" onClick={() => setOpen(false)} />
          </ModalFooter>
        </Modal>
      </div>
    );
  })
  .add('Two open modal', () => {
    return (
      <div style={{ height: '300px' }}>
        <Modal open={true} setOpen={action('back modal toggle')}>
          <ModalHeader>
            <h2>You launched a modal!</h2>
          </ModalHeader>
          <ModalBody>
            click the button og press <code>escape</code> to close the modal
          </ModalBody>
          <ModalFooter>
            <Button text="Close" size="small" onClick={action('back modal click close')} />
          </ModalFooter>
        </Modal>

        <Modal open={true} size="small" setOpen={action('front modal toggle')}>
          <ModalHeader>
            <h2>You launched a modal!</h2>
          </ModalHeader>
          <ModalBody>
            click the button og press <code>escape</code> to close the modal
          </ModalBody>
          <ModalFooter>
            <Button text="Close" size="small" onClick={action('front modal click close')} />{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  })
  .add('No body padding', () => {
    return (
      <div style={{ height: '300px' }}>
        <Modal open={true} setOpen={() => {}}>
          <ModalHeader>
            <h2>En modal</h2>
          </ModalHeader>
          <ModalBody noPadding={true}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, porro? Ipsa ab inventore vel praesentium ea,
            cupiditate sed eius dolorum veritatis, optio possimus debitis deleniti tempore quas exercitationem unde.
            Repudiandae.
          </ModalBody>
          <ModalFooter>
            <Button text="Close" size="small" />
          </ModalFooter>
        </Modal>
      </div>
    );
  });
