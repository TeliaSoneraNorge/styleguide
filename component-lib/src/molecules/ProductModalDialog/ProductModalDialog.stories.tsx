import React, { useState } from 'react';
import ProductModalDialog from './ProductModalDialog';
import ModalDialogProvider from '../ModalDialog/ModalDialogProvider';

export default {
  title: 'Component library|Molecules/ProductModalDialog',
  component: ProductModalDialog,
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

export const Default = () => {
  const [selected, setSelected] = useState(variants[0]);

  return (
    <ModalDialogProvider>
      <ProductModalDialog 
        name="product-modal-dialog" 
        heading="Apple iPhone 11 Pro Silicone Case" 
        description="Disse Apple-designede silikondekslene sitter perfekt rundt volumknappene og Dvale/vekke-knappen, og følger formene til din iPhone uten å gjøre den mye større. Det myke foret på innsiden av etuiet beskytter din iPhone. Utsiden, som er i silkemyk silikon, gjør det ekstra behagelig å holde iPhone i hånden. Velg mellom rosa eller svart silikondeksel."
        variants={variants}
        submitText="Legg i handlekurv" 
        onSubmit={(variant) => alert(`Variant: ${JSON.stringify(variant, null, 2)}`)}
        selected={selected}
        onSelect={(variant) => {
            console.log("On Select", variant)
            setSelected(variant)
        }}
        standalone // <– 'standalone' are only used for example purposes.
      />
    </ModalDialogProvider>
  )
};
