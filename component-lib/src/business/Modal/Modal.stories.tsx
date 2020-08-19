import { storiesOf } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from './index';
import Button from '../../atoms/Button';
import TextBox from '../../atoms/TextBox';
import { Toggle } from '../Toggle';
storiesOf('Business|Modal', module).add('Default', () => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const [loading, setLoading] = useState(false);

  const fakeSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 2000);
  };

  return (
    <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
      <Button text="Åpne en model" onClick={() => setOpen(true)} />

      <Modal open={open} setOpen={setOpen}>
        <ModalHeader>
          <h2>En modal</h2>
        </ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, ad? Aut numquam inventore adipisci quae
          <TextBox small={true} />
          <TextBox small={true} />
          <Toggle checked={checked} onChange={e => setChecked(e.target.checked)} />
          <Button size="small" text="Click" />
          <Button size="small" isDisabled={true} text="I should be skipped" />
          <Button size="small" isProcessing={true} text="I should also be skipped" />
        </ModalBody>
        <ModalFooter>
          <Button text="Lagre" size="small" kind="primary" onClick={fakeSubmit} isProcessing={loading} />
          <Button text="Lukk" size="small" onClick={() => setOpen(false)} isDisabled={loading} />
        </ModalFooter>
      </Modal>
    </div>
  );
});
//   .add('Small', () => {
//     const [open, setOpen] = useState(false);
//     return (
//       <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
//         <Button text="Åpne en model" onClick={() => setOpen(true)} />

//         <Modal open={open} setOpen={setOpen} size="sm">
//           <ModalHeader>
//             <h2>En modal</h2>
//           </ModalHeader>
//         </Modal>
//       </div>
//     );
//   })
//   .add('Large', () => {
//     const [open, setOpen] = useState(false);
//     return (
//       <div style={{ margin: '2rem', display: 'flex', flexDirection: 'column' }}>
//         <Button text="Åpne en model" onClick={() => setOpen(true)} />

//         <Modal open={open} setOpen={setOpen} size="lg">
//           hei
//         </Modal>
//       </div>
//     );
//   });
