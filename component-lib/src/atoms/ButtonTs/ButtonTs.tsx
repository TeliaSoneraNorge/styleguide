import React from 'react';

interface Props {
  text: string;
  href?: string;
  target?: '_self';
}

interface ButtonLink {
  text: string;
  href: string;
  target: '_self';
}

interface Button {
  text: string;
}



const ButtonTs = (props: Props) => {
  const {
    text,
    href,
    target,
  } = props

  const ButtonLink = ({text, href, target}: ButtonLink) => (
    <a href={href} target={target} >
      {text}
    </a>
  )

  const Button = ({text}: Button) => (
    <button>{text}</button>
  )

  return (
      <>
        {href && target && <ButtonLink text={text} href={href} target={target} />}
        {!href && <Button text={text} />}
      </>
  )
}

export default ButtonTs;
