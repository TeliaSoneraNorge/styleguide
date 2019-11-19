import React, { useState } from 'react';
import { Alert, Button, Container } from '@telia/styleguide';

const WithScrollTo = () => {
    const [shouldScroll, setShouldScroll] = useState(false);

    return (
        <div>
            <Container size="medium">
                <Button onClick={() => setShouldScroll(true)} text="Click me" />
            </Container>
            <Alert kind="positive" scrollTo={shouldScroll}>
                <p>
                    With scroll to. Click button. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </p>
            </Alert>
        </div>
    );
};

export default WithScrollTo;