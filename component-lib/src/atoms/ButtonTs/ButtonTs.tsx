import React from 'react';
import { ButtonAsLink } from './components/ButtonAsLink';
import { ButtonAsButton } from './components/ButtonAsButton';
import { Props } from './types';

const ButtonTs = (props: Props) => {

  if (props.type === 'link') {
    return (
      <ButtonAsLink 
        type={props.type} 
        text={props.text} 
        href={props.href}
        target={props.target}
      />
    )
  }

  if (props.type === 'button') {
    return (
      <ButtonAsButton
        type={props.type} 
        text={props.text} 
      />
    )
  }

  return null;
}

export default ButtonTs;
