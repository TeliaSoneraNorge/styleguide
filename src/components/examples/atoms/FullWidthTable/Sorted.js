import React from 'react';
import { FullWidthTable } from '@telia/styleguide';

const { THead, TBody, ThSortable, Tr, Td } = FullWidthTable;

const people = [
  { firstName: 'Ola', lastName: 'Nordmann', birth: new Date('1990-09-09'), height: 185 },
  { firstName: 'Kari', lastName: 'Nordmann', birth: new Date('2000-02-28'), height: 170 },
  { firstName: 'Lille', lastName: 'Nordmann', birth: new Date('2019-12-31'), height: 50 },
  { firstName: 'Foo', lastName: 'Bar', birth: new Date('1970-01-01'), height: 50 },
];

const SortedFullWidthTable = () => {
  return (
    <React.Fragment>
      <FullWidthTable>
        <THead>
          <Tr>
            <ThSortable>Name</ThSortable>
            <ThSortable isSorted={true} isSortedDesc={true}>
              Last name
            </ThSortable>
            <ThSortable>Birth</ThSortable>
            <ThSortable>Height</ThSortable>
          </Tr>
        </THead>
        <TBody>
          {people.map(({ firstName, lastName, birth, height }, i) => (
            <Tr key={'' + i}>
              <Td>{firstName}</Td>
              <Td>{lastName}</Td>
              <Td>{birth.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</Td>
              <Td>{height}</Td>
            </Tr>
          ))}
        </TBody>
      </FullWidthTable>
      <FullWidthTable>
        <THead>
          <Tr>
            <ThSortable>Name</ThSortable>
            <ThSortable isSorted={true} isSortedDesc={true} sortPriority={1}>
              Last name
            </ThSortable>
            <ThSortable isSorted={true} sortPriority={2}>
              Birth
            </ThSortable>
            <ThSortable>Height</ThSortable>
          </Tr>
        </THead>
        <TBody>
          {people.map(({ firstName, lastName, birth, height }, i) => (
            <Tr key={'' + i}>
              <Td>{firstName}</Td>
              <Td>{lastName}</Td>
              <Td>{birth.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</Td>
              <Td>{height}</Td>
            </Tr>
          ))}
        </TBody>
      </FullWidthTable>
    </React.Fragment>
  );
};

export default SortedFullWidthTable;
