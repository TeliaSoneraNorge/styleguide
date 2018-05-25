import React from 'react';
import { Link } from '@telia/styleguide';

const Links = () => (
    <div>
        <Link href='#' text='Standard text link'/><br/>
        <Link href='#' text='Link with icon after' className='link link--with-icon link--forward-icon link--icon-after'/><br/>
        <Link href='#' text='Link with icon before' className='link link--with-icon link--back-icon link--icon-before'/>
    </div>
);

export default Links;