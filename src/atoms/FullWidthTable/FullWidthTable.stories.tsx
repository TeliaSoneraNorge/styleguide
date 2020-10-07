import React from 'react';
import FullWidthTable from './FullWidthTable';
import { boolean, number, optionsKnob } from '@storybook/addon-knobs';
import './FullWidthTable.stories.css';
export default {
  title: 'Component library/Atoms/FullWidth Table',
  component: FullWidthTable,
};

export const Default = () => {
  const { THead, TBody, Th, Tr, Td } = FullWidthTable;
  const column2classNames = optionsKnob(
    'Column 2 classNames',
    { Purple: 'purple', Italic: 'italic', LineThrough: 'lineThrough' },
    '',
    {
      display: 'check',
    }
  )
    .toString()
    .replace(/,/g, ' ');

  return (
    <FullWidthTable id="defaultFullWidthTable" className="no-ts-error">
      <THead>
        <Tr>
          <Th>Column 1</Th>
          <Th className={column2classNames}>Column 2</Th>
          <Th>Column 3</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>Nulla quis lorem ut libero malesuada feugiat</Td>
          <Td className={column2classNames}>Lorem</Td>
          <Td>Ipsum</Td>
        </Tr>
        <Tr>
          <Td>Lorem ipsum dolor sit amet</Td>
          <Td className={column2classNames}>Consectetur</Td>
          <Td>Elit</Td>
        </Tr>
        <Tr>
          <Td>Donec ruTrum congue leo</Td>
          <Td className={column2classNames}>Eget</Td>
          <Td>Malesuada</Td>
        </Tr>
        <Tr>
          <Td>Nulla quis lorem ut libero malesuada feugiat</Td>
          <Td className={column2classNames}>Lorem</Td>
          <Td>Ipsum</Td>
        </Tr>
        <Tr>
          <Td>
            <a href="" className="link" target="_self">
              Lorem ipsum dolor sit amet
            </a>
          </Td>
          <Td className={column2classNames}>Consectetur</Td>
          <Td>Elit</Td>
        </Tr>
        <Tr>
          <Td>
            <a href="" className="link" target="_self">
              Donec ruTrum congue leo
            </a>
          </Td>
          <Td className={column2classNames}>Eget</Td>
          <Td>Malesuada</Td>
        </Tr>
      </TBody>
    </FullWidthTable>
  );
};

export const SortedFullWidthTable = () => {
  // maxSortedFields controlled by Storybook's Knob
  const maxSortedFields = number('Max sorted fields', 2, {
    range: false,
    min: 1,
    max: 4,
    step: 1,
  });

  const { THead, TBody, ThSortable, Th, Tr, Td, useThSortable } = FullWidthTable;

  const people = [
    { firstName: 'Ola', lastName: 'Nordmann', birth: new Date('1990-09-09'), height: 185, comment: 'Not sortable' },
    { firstName: 'Kari', lastName: 'Nordmann', birth: new Date('2000-02-28'), height: 170 },
    { firstName: 'Lille', lastName: 'Nordmann', birth: new Date('2019-12-31'), height: 50, comment: '' },
    { firstName: 'Foo', lastName: 'Bar', birth: new Date('1970-01-01'), height: 50, comment: 'No comment' },
  ];
  const [sortedPeople, getThSortableProps] = useThSortable(people, maxSortedFields, ['lastName', '!birth']);

  return (
    <React.Fragment>
      <FullWidthTable>
        <THead>
          <Tr>
            <ThSortable {...getThSortableProps('firstName')}>Name</ThSortable>
            <ThSortable {...getThSortableProps('lastName')}>Last name</ThSortable>
            <ThSortable {...getThSortableProps('birth')}>Birth</ThSortable>
            <ThSortable {...getThSortableProps('height')}>Height</ThSortable>
            <Th>Comment</Th>
          </Tr>
        </THead>
        <TBody>
          {sortedPeople.map(({ firstName, lastName, birth, height, comment }, i) => (
            <Tr key={'' + i}>
              <Td>{firstName}</Td>
              <Td>{lastName}</Td>
              <Td>{birth.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</Td>
              <Td>{height}</Td>
              <Td>{comment}</Td>
            </Tr>
          ))}
        </TBody>
      </FullWidthTable>
    </React.Fragment>
  );
};

export const WithFooter = () => {
  const { THead, TBody, Th, Tr, Td, TFoot } = FullWidthTable;
  const whiteFooter = boolean('White footer', false);

  return (
    <FullWidthTable>
      <THead>
        <Tr>
          <Th>Kostnader</Th>
          <Th>Other</Th>
          <Th>Pris</Th>
        </Tr>
      </THead>
      <TFoot white={whiteFooter}>
        <Tr>
          <Td>Sum</Td>
          <Td>Foo</Td>
          <Td>553,-</Td>
        </Tr>
      </TFoot>
      <TBody>
        <Tr>
          <Td>Fast avgifter</Td>
          <Td>Bar</Td>
          <Td>399,-</Td>
        </Tr>
        <Tr>
          <Td>Rabatter</Td>
          <Td>Baz</Td>
          <Td>-100,-</Td>
        </Tr>
        <Tr>
          <Td>Bruk</Td>
          <Td>Foobar</Td>
          <Td>254,-</Td>
        </Tr>
      </TBody>
    </FullWidthTable>
  );
};

export const FullWidthTableWithLink = () => {
  const { THead, TBody, Th, Tr, Td } = FullWidthTable;

  return (
    <FullWidthTable clickable>
      <THead>
        <Tr>
          <Th>Column 1</Th>
          <Th>Column 2</Th>
          <Th>Column 3</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr
          onClick={() => {
            window.location.href = '#';
          }}
        >
          <Td>Nulla quis lorem ut libero malesuada feugiat</Td>
          <Td>Lorem</Td>
          <Td>
            <a href="#" className="link" target="_self">
              Lorem ipsum dolor sit amet
            </a>
          </Td>
        </Tr>
        <Tr
          onClick={() => {
            window.location.href = 'https://telia.no';
          }}
        >
          <Td>Lorem ipsum dolor sit amet</Td>
          <Td>Consectetur</Td>
          <Td>
            <a href="https://telia.no" className="link" target="_self">
              Lorem ipsum dolor sit amet
            </a>
          </Td>
        </Tr>
        <Tr
          onClick={() => {
            window.location.href = 'https://telia.no';
          }}
        >
          <Td>Donec ruTrum congue leo</Td>
          <Td>Eget</Td>
          <Td>
            <a href="https://telia.no" className="link" target="_self">
              Lorem ipsum dolor sit amet
            </a>
          </Td>
        </Tr>
      </TBody>
    </FullWidthTable>
  );
};
