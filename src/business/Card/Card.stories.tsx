import React from 'react';
import { Card, CardDivider, CardHeader, CardBody, CardFooter, CardOption, CardOptions } from './index';

export default {
  component: Card,
  title: 'Business/Card',
  subComponents: { CardBody, CardHeader, CardFooter, CardDivider, CardOption, CardOptions },
};

export const Default = () => {
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
      <div style={{ width: '50%', paddingRight: '1rem', paddingBottom: '1rem' }}>
        <Card>
          <CardBody>Body</CardBody>
          <CardFooter>Footer</CardFooter>
        </Card>
      </div>
    </>
  );
};

export const CardWithOptions = () => {
  return (
    <>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ width: '50%', paddingRight: '1rem', paddingBottom: '1rem' }}>
          <Card>
            <CardHeader>
              <h2>Header</h2>
            </CardHeader>
            <CardBody>Body</CardBody>
            <CardFooter padding={false}>
              <CardOptions>
                <CardOption icon="info" label="Only one option" onClick={() => {}} />
              </CardOptions>
            </CardFooter>
          </Card>
        </div>
        <div style={{ width: '50%', paddingRight: '1rem', paddingBottom: '1rem' }}>
          <Card>
            <CardHeader>
              <h2>Header</h2>
            </CardHeader>
            <CardBody>Body</CardBody>
            <CardFooter padding={false}>
              <CardOptions>
                <CardOption icon="info" label="Option 1" onClick={() => {}} />
                <CardOption icon="info" label="Option 2" onClick={() => {}} />
              </CardOptions>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div style={{ width: '50%', paddingRight: '1rem', paddingBottom: '1rem' }}>
        <Card>
          <CardHeader>
            <h2>Header</h2>
          </CardHeader>
          <CardBody>Body</CardBody>
          <CardFooter padding={false}>
            <CardOptions>
              <CardOption icon="info" label="Option 1" onClick={() => {}} />
              <CardOption icon="info" label="Option 2" onClick={() => {}} />
              <CardOption icon="info" label="Option 3" onClick={() => {}} />
            </CardOptions>
          </CardFooter>
        </Card>
      </div>
      <div style={{ width: '50%', paddingRight: '1rem', paddingBottom: '1rem' }}>
        <Card>
          <CardHeader>
            <h2>Header</h2>
          </CardHeader>
          <CardBody>Body</CardBody>
          <CardFooter padding={false}>
            <CardOptions>
              <CardOption icon="info" label="Option 1" onClick={() => {}} disabled />
              <CardOption icon="info" label="Option 2" onClick={() => {}} disabled />
              <CardOption icon="info" label="Option 3" onClick={() => {}} disabled />
            </CardOptions>
          </CardFooter>
        </Card>
      </div>
      <div style={{ width: '50%', paddingRight: '1rem', paddingBottom: '1rem' }}>
        <Card>
          <CardHeader>
            <h2>Header</h2>
          </CardHeader>
          <CardBody>Body</CardBody>
          <CardFooter padding={false}>
            <CardOptions columns={1}>
              <CardOption icon="info" label="Option 1" onClick={() => {}} />
              <CardOption icon="info" label="Option 2" onClick={() => {}} />
            </CardOptions>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};
