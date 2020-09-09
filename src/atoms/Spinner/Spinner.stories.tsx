import React from 'react';
import Spinner from './Spinner';

export default {
  title: 'Component library/Atoms/Spinner',
  component: Spinner,
};

export const Default = () => <Spinner />;

export const Small = () => <Spinner type="sm" />;

export const Medium = () => <Spinner type="md" />;

export const large = () => <Spinner type="lg" />;