import React, { useState } from 'react';
import BigImageDialog from './BigImageDialog';
import ModalDialogProvider from '../ModalDialog/ModalDialogProvider';
import ColorPicker from '../../atoms/ColorPicker';
import Button from '../../atoms/Button';

export default {
  title: 'Component library/Molecules/BigImageDialog',
  component: BigImageDialog,
};

const variants = [
    {
        color: "black",
        name: "Svart",
        id: "9074855",
        src: "//images.ctfassets.net/iz15t1lxx44v/4OTDLSaQzMUudOJ2rkXxNv/b8d8d9e0d314f8535e5d53393888d79b/Apple-iPhone-11-Pro-Silver-Silicone-Case-Black-Pure-Back.png?w=230",
        price: 399
    },
    {
        color: "blue",
        name: "Blå",
        id: "9074870",
        src: "//images.ctfassets.net/iz15t1lxx44v/6KHFiq56mpk92Tri30Gty6/7c4d50491f42380ba96878bd9baaddfe/Apple-iPhone-11-Pro-Silver-Silicone-Case-Midnight-Blue-Pure-Back.png?w=230",
        price: 399
    },
    {
        color: "pink",
        name: "Rosa",
        id: "9074872",
        src: "//images.ctfassets.net/iz15t1lxx44v/6Bw1M0a1IWTondtoQ43Lsd/de4c6c59784cd75cbaeed64549739610/Apple-iPhone-11-Pro-Silver-Silicone-Case-Pink-Sand-Pure-Back.png?w=230",
        price: 200
    }
]

const formatPrice = (price: string | number) => {
  if (typeof price === 'number') {
    return price % 1 === 0 ? price + ',-' : price + ' kr';
  }
  return price;
};

const colorPickerStyle = {
  margin: '1rem'
};
const footerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  flex: '1'
};
const priceStyle = {
  fontFamily: 'Pebble',
  fontSize: '2rem',
  lineHeight: '2.5rem'
};

export const Default = () => {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'Color'.
  const [selected, setSelected] = useState<Color>(variants[0]);
  const selectedVariant = variants.find(variant => variant.id === selected.id) || variants[0];

  return (
    <ModalDialogProvider>
      <BigImageDialog
        name="big-image-dialog"
        heading="Apple iPhone 11 Pro Silicone Case"
        description="Disse Apple-designede silikondekslene sitter perfekt rundt volumknappene og Dvale/vekke-knappen, og følger formene til din iPhone uten å gjøre den mye større. Det myke foret på innsiden av etuiet beskytter din iPhone. Utsiden, som er i silkemyk silikon, gjør det ekstra behagelig å holde iPhone i hånden. Velg mellom rosa eller svart silikondeksel."
        // @ts-expect-error ts-migrate(2322) FIXME: Property 'src' does not exist on type 'IntrinsicAt... Remove this comment to see the full error message
        src={selected.src}
        standalone // <– 'standalone' are only used for example purposes.
      >
        <div style={colorPickerStyle}>
            <ColorPicker colors={variants} selected={selectedVariant} onSelect={setSelected} />
          </div>
          {/* @ts-expect-error ts-migrate(2322) FIXME: Type 'string' is not assignable to type '"column" ... Remove this comment to see the full error message */}
          <div style={footerStyle}>
            <span style={priceStyle}>{formatPrice(selectedVariant.price)}</span>
            <Button
              kind="primary"
              icon="shoppingcart"
              margin="top"
              onClick={() => alert(`Variant: ${JSON.stringify(selectedVariant, null, 2)}`)}
              text="Legg i handlekurv"
            />
          </div>
      </BigImageDialog>
    </ModalDialogProvider>
  )
};