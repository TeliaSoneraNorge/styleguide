import React, { useState } from 'react';
import { Modal, InfoModal, ModalHeader, InfoModalHeader, ModalBody, InfoModalBody, ModalFooter } from './index';
import Button from '../../atoms/Button';
import TextBox from '../../atoms/TextBox';
import { Toggle } from '../../atoms/Toggle';
import { ModalDivider } from './ModalDivider';
import Paragraph from '../../atoms/Paragraph';

export default {
  component: Modal,
  title: 'Component library/Molecules/Modal',
};

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ height: '100px' }}>
      <Button onClick={() => setOpen(!open)} text="Open modal" />
      <Modal open={open} setOpen={setOpen} ariaLabelledBy="modal1-label">
        <ModalHeader>
          <h2 id="modal1-label">En modal</h2>
        </ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, porro? Ipsa ab inventore vel praesentium ea,
          cupiditate sed eius dolorum veritatis, optio possimus debitis deleniti tempore quas exercitationem unde.
          Repudiandae.
        </ModalBody>
        <ModalFooter>
          <Button text="Close" size="small" onClick={() => setOpen(false)} />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export const WithBorderedHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ height: '100px' }}>
      <Button onClick={() => setOpen(!open)} text="Open modal" />
      <Modal open={open} setOpen={setOpen} ariaLabelledBy="modal2-label">
        <ModalHeader border={true}>
          <h2 id="modal2-label">With Bordered Header</h2>
        </ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, porro? Ipsa ab inventore vel praesentium ea,
          cupiditate sed eius dolorum veritatis, optio possimus debitis deleniti tempore quas exercitationem unde.
          Repudiandae.
        </ModalBody>
        <ModalFooter>
          <Button text="Close" size="small" onClick={() => setOpen(false)} />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export const WithDividers = () => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ height: '100px' }}>
      <Button onClick={() => setOpen(!open)} text="Open modal" />
      <Modal open={open} setOpen={() => setOpen(!open)} ariaLabelledBy="modal3-label">
        <ModalHeader>
          <h2 id="modal3-label">With Dividers</h2>
        </ModalHeader>
        <ModalBody>
          Below me is a modal divider with padding
          <ModalDivider />
          Below me is a modal divider in full width
          <ModalDivider fullWidth={true} />
        </ModalBody>
        <ModalFooter>
          <Button text="Close" size="small" onClick={() => setOpen(false)} />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export const WithFocusElements = () => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const fakeSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <div style={{ height: '100px' }}>
      <Button onClick={() => setOpen(!open)} text="Open modal" />
      <Modal open={open} setOpen={() => setOpen(!open)} ariaLabelledBy="modal4-label">
        <ModalHeader>
          <h2 id="modal4-label">A modal with lots of focus elements</h2>
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
          <Button text="Close" size="small" onClick={() => setOpen(false)} isDisabled={loading} />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export const Small = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ height: '100px' }}>
      <Button onClick={() => setOpen(!open)} text="Open modal" />
      <Modal open={open} setOpen={() => setOpen(!open)} size="small" ariaLabelledBy="modal5-label">
        <ModalHeader>
          <h2 id="modal5-label">A small modal</h2>
        </ModalHeader>
        <ModalBody>Modal body</ModalBody>
        <ModalFooter>
          <Button text="Close" size="small" onClick={() => setOpen(false)} />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export const Large = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ height: '100px' }}>
      <Button onClick={() => setOpen(!open)} text="Open modal" />
      <Modal open={open} setOpen={() => setOpen(!open)} size="large" ariaLabelledBy="modal6-label">
        <ModalHeader>
          <h2 id="modal6-label">A large modal</h2>
        </ModalHeader>
        <ModalBody>Modal body</ModalBody>
        <ModalFooter>
          <Button text="Close" size="small" onClick={() => setOpen(false)} />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export const Fullscreen = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ height: '100px' }}>
      <Button onClick={() => setOpen(!open)} text="Open modal" />
      <Modal open={open} setOpen={() => setOpen(!open)} size="fullscreen" ariaLabelledBy="modal7-label">
        <ModalHeader border={true}>
          <h2 id="modal7-label">A Fullscreen modal</h2>
          <div>description</div>
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
          <Button text="Close" size="small" onClick={() => setOpen(false)} />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export const OverflownWithScroll = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ height: '100px' }}>
      <Button onClick={() => setOpen(!open)} text="Open modal" />
      <Modal open={open} setOpen={() => setOpen(!open)} size="large" ariaLabelledBy="modal8-label">
        <ModalHeader>
          <h2 id="modal8-label">Overflown modal with scrolling</h2>
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
          <Button text="Close" size="small" onClick={() => setOpen(false)} />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export const NoBodyPadding = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ height: '100px' }}>
      <Button onClick={() => setOpen(!open)} text="Open modal" />
      <Modal open={open} setOpen={() => setOpen(!open)} size="large" ariaLabelledBy="modal9-label">
        <ModalHeader>
          <h2 id="modal9-label">En modal</h2>
        </ModalHeader>
        <ModalBody noPadding={true}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, porro? Ipsa ab inventore vel praesentium ea,
          cupiditate sed eius dolorum veritatis, optio possimus debitis deleniti tempore quas exercitationem unde.
          Repudiandae.
        </ModalBody>
        <ModalFooter>
          <Button text="Close" size="small" onClick={() => setOpen(!open)} />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export const defaultInfoModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ height: '100px' }}>
      <Button onClick={() => setOpen(!open)} text="Open modal" />
      <InfoModal open={open} setOpen={() => setOpen(!open)} size="large" ariaLabelledBy="modal10-label">
        <InfoModalHeader headerText="Lorem ipsum dolor sit amet" ingress="Lorem ipsum dolor sit amet" />
        <InfoModalBody>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Senectus et netus et malesuada fames ac turpis egestas. Bibendum neque egestas congue
            quisque. Mi eget mauris pharetra et ultrices neque ornare aenean. Neque gravida in fermentum et. Aliquet
            nibh praesent tristique magna sit amet. Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Eget arcu
            dictum varius duis at consectetur lorem donec. Ornare suspendisse sed nisi lacus sed viverra tellus in.
            Fermentum posuere urna nec tincidunt praesent semper feugiat. Maecenas accumsan lacus vel facilisis.
            Lobortis feugiat vivamus at augue eget arcu dictum varius.
          </Paragraph>
        </InfoModalBody>
      </InfoModal>
    </div>
  );
};

export const FullscreenInfoModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ height: '100px' }}>
      <Button onClick={() => setOpen(!open)} text="Open modal" />
      <InfoModal open={open} setOpen={() => setOpen(!open)} size="fullscreen" ariaLabelledBy="modal11-label">
        <InfoModalHeader headerText="Lorem ipsum dolor sit amet" ingress="Lorem ipsum dolor sit amet" />
        <InfoModalBody>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Senectus et netus et malesuada fames ac turpis egestas. Bibendum neque egestas congue
            quisque. Mi eget mauris pharetra et ultrices neque ornare aenean. Neque gravida in fermentum et. Aliquet
            nibh praesent tristique magna sit amet. Vel turpis nunc eget lorem dolor sed viverra ipsum nunc. Eget arcu
            dictum varius duis at consectetur lorem donec. Ornare suspendisse sed nisi lacus sed viverra tellus in.
            Fermentum posuere urna nec tincidunt praesent semper feugiat. Maecenas accumsan lacus vel facilisis.
            Lobortis feugiat vivamus at augue eget arcu dictum varius.
          </Paragraph>
        </InfoModalBody>
      </InfoModal>
    </div>
  );
};
