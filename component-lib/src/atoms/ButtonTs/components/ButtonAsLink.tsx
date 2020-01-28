import React from 'react';
import { ButtonLinkProps } from '../types';

export const ButtonAsLink = ({href, target, text}: ButtonLinkProps) => (
  <a href={href} target={target}>
    {text}
  </a>
)