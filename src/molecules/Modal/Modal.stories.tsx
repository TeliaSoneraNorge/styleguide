import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from './index';
import Button from '../../atoms/Button';
import TextBox from '../../atoms/TextBox';
import { Toggle } from '../../atoms/Toggle';
import { ModalDivider } from './ModalDivider';

export default {
  component: Modal,
  title: 'Component library/Molecules/Modal',
};

export const Default = () => {
  const [open1, setOpen1] = useState(false);

  return (
    <div style={{ height: '100px' }}>
      <Button onClick={() => setOpen1(!open1)} text="Open modal" />
      <Modal open={open1} setOpen={setOpen1}>
        <ModalHeader>
          <h2>En modal</h2>
        </ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, porro? Ipsa ab inventore vel praesentium ea,
          cupiditate sed eius dolorum veritatis, optio possimus debitis deleniti tempore quas exercitationem unde.
          Repudiandae.
        </ModalBody>
        <ModalFooter>
          <Button text="Close" size="small" onClick={() => setOpen1(false)} />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export const WithBorderedHeader = () => {
  const [open2, setOpen2] = useState(false);

  return (
    <div style={{ height: '100px' }}>
      <Button onClick={() => setOpen2(!open2)} text="Open modal" />
      <Modal open={open2} setOpen={setOpen2}>
        <ModalHeader border={true}>
          <h2>With Bordered Header</h2>
        </ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, porro? Ipsa ab inventore vel praesentium ea,
          cupiditate sed eius dolorum veritatis, optio possimus debitis deleniti tempore quas exercitationem unde.
          Repudiandae.
        </ModalBody>
        <ModalFooter>
          <Button text="Close" size="small" onClick={() => setOpen2(false)} />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export const WithDividers = () => {
  const [open3, setOpen3] = useState(false);

  return (
    <div style={{ height: '100px' }}>
      <Button onClick={() => setOpen3(!open3)} text="Open modal" />
      <Modal open={open3} setOpen={() => setOpen3(!open3)}>
        <ModalHeader>
          <h2>With Dividers</h2>
        </ModalHeader>
        <ModalBody>
          Below me is a modal divider with padding
          <ModalDivider />
          Below me is a modal divider in full width
          <ModalDivider fullWidth={true} />
        </ModalBody>
        <ModalFooter>
          <Button text="Close" size="small" onClick={() => setOpen3(false)} />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export const WithFocusElements = () => {
  const [open4, setOpen4] = useState(false);
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
      <Button onClick={() => setOpen4(!open4)} text="Open modal" />
      <Modal open={open4} setOpen={() => setOpen4(!open4)}>
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
          <Button text="Close" size="small" onClick={() => setOpen4(false)} isDisabled={loading} />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export const Small = () => {
  const [open5, setOpen5] = useState(false);
  return (
    <div style={{ height: '100px' }}>
      <Button onClick={() => setOpen5(!open5)} text="Open modal" />
      <Modal open={open5} setOpen={() => setOpen5(!open5)} size="small">
        <ModalHeader>
          <h2>A small modal</h2>
        </ModalHeader>
        <ModalBody>Modal body</ModalBody>
        <ModalFooter>
          <Button text="Close" size="small" onClick={() => setOpen5(false)} />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export const Large = () => {
  const [open6, setOpen6] = useState(false);
  return (
    <div style={{ height: '100px' }}>
      <Button onClick={() => setOpen6(!open6)} text="Open modal" />
      <Modal open={open6} setOpen={() => setOpen6(!open6)} size="large">
        <ModalHeader>
          <h2>A large modal</h2>
        </ModalHeader>
        <ModalBody>Modal body</ModalBody>
        <ModalFooter>
          <Button text="Close" size="small" onClick={() => setOpen6(false)} />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export const Fullscreen = () => {
  const [open7, setOpen7] = useState(false);
  return (
    <div style={{ height: '100px' }}>
      <Button onClick={() => setOpen7(!open7)} text="Open modal" />
      <Modal open={open7} setOpen={() => setOpen7(!open7)} size="fullscreen">
        <ModalHeader border={true}>
          <h2>A Fullscreen modal</h2>
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
          <Button text="Close" size="small" onClick={() => setOpen7(false)} />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export const OverflownWithScroll = () => {
  const [open8, setOpen8] = useState(false);
  return (
    <div style={{ height: '100px' }}>
      <Button onClick={() => setOpen8(!open8)} text="Open modal" />
      <Modal open={open8} setOpen={() => setOpen8(!open8)} size="large">
        <ModalHeader>
          <h2>Overflown modal with scrolling</h2>
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
          <Button text="Close" size="small" onClick={() => setOpen8(false)} />
        </ModalFooter>
      </Modal>
    </div>
  );
};

export const NoBodyPadding = () => {
  const [open9, setOpen9] = useState(false);
  return (
    <div style={{ height: '100px' }}>
      <Button onClick={() => setOpen9(!open9)} text="Open modal" />
      <Modal open={open9} setOpen={() => setOpen9(!open9)} size="large">
        <ModalHeader>
          <h2>En modal</h2>
        </ModalHeader>
        <ModalBody noPadding={true}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, porro? Ipsa ab inventore vel praesentium ea,
          cupiditate sed eius dolorum veritatis, optio possimus debitis deleniti tempore quas exercitationem unde.
          Repudiandae.
        </ModalBody>
        <ModalFooter>
          <Button text="Close" size="small" onClick={() => setOpen9(!open)} />
        </ModalFooter>
      </Modal>
    </div>
  );
};
