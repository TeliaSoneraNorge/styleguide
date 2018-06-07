import React from 'react';
import { Link } from '@telia/styleguide';

const Links = () => (
    <div>
        <Link href="#" text="Standard text link" /><br />
        <Link href="#" text="Link with icon after" icon="forward-icon" iconPosition="after" /><br />
        <Link href="#" text="Link with icon before" icon="back-icon" iconPosition="before" />
    </div>
);

export default Links;