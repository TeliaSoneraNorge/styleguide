export interface ButtonLinkProps {
  type: 'link';
  text: string;
  href: string;
  target: '_self' | '_blank'
}

export interface ButtonProps {
  type: 'button';
  text: string;
}

export type Props = ButtonLinkProps | ButtonProps;