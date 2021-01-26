import React from 'react';
import { Card, CardDivider, CardHeader, CardBody, CardFooter } from './index';

export default {
  component: Card,
  title: 'Business/Card',
  subComponents: { CardBody, CardHeader, CardFooter, CardDivider },
};

export const Default = ({}) => {
  return (
    <>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ width: '50%', paddingRight: '1rem', paddingBottom: '1rem' }}>
          <Card>
            <CardHeader>
              <h2>Header</h2>
            </CardHeader>
            <CardBody>Body</CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
        </div>
        <div style={{ width: '50%', paddingRight: '1rem', paddingBottom: '1rem' }}>
          <Card>
            <CardHeader>
              <h2>Header</h2>
            </CardHeader>
            <CardBody>
              Some content
              <CardDivider />
              Some more content after a divider
              <CardDivider padding={false} />
              Some more content after a divider with full width
            </CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
        </div>
      </div>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ width: '33%', paddingRight: '1rem', paddingBottom: '1rem' }}>
          <Card>
            <CardHeader>
              <h2>Header</h2>
            </CardHeader>
            <CardBody padding={false}>Body with no padding</CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
        </div>
        <div style={{ width: '33%', paddingRight: '1rem', paddingBottom: '1rem' }}>
          <Card>
            <CardHeader>
              <h2>Header</h2>
            </CardHeader>
            <CardBody>Body</CardBody>
            <CardFooter padding={false}>Footer with no padding</CardFooter>
          </Card>
        </div>

        <div style={{ width: '33%', paddingRight: '1rem', paddingBottom: '1rem' }}>
          <Card>
            <CardHeader padding={false}>
              <h2>Header with no padding</h2>
            </CardHeader>
            <CardBody>Body</CardBody>
            <CardFooter>Footer</CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};
