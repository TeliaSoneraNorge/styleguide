import React from 'react';
import { FullWidthTable } from '@telia/styleguide';

const { THead, TBody, ThSortable, Tr, Td, useThSortable } = FullWidthTable;

const people = [
  { firstName: 'Ola', lastName: 'Nordmann', birth: new Date('1990-09-09'), height: 185 },
  { firstName: 'Kari', lastName: 'Nordmann', birth: new Date('2000-02-28'), height: 170 },
  { firstName: 'Lille', lastName: 'Nordmann', birth: new Date('2019-12-31'), height: 50 },
  { firstName: 'Foo', lastName: 'Bar', birth: new Date('1970-01-01'), height: 50 },
];

const SortedFullWidthTable = () => {
  const [sortedPeopleA, getPropsA] = useThSortable(people, 1, [{ field: 'birth' }]);
  const [sortedPeopleB, getPropsB] = useThSortable(people, 2, ['birth', '!lastName']);
  return (
    <React.Fragment>
      <h4>One property sorting</h4>
      <FullWidthTable>
        <THead>
          <Tr>
            <ThSortable {...getPropsA('firstName')}>Name</ThSortable>
            <ThSortable {...getPropsA('lastName')}>Last name</ThSortable>
            <ThSortable {...getPropsA('birth')}>Birth</ThSortable>
            <ThSortable {...getPropsA('height')}>Height</ThSortable>
          </Tr>
        </THead>
        <TBody>
          {sortedPeopleA.map(({ firstName, lastName, birth, height }, i) => (
            <Tr key={'' + i}>
              <Td>{firstName}</Td>
              <Td>{lastName}</Td>
              <Td>{birth.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</Td>
              <Td>{height}</Td>
            </Tr>
          ))}
        </TBody>
      </FullWidthTable>

      <h4>Two properties sorting</h4>
      <FullWidthTable>
        <THead>
          <Tr>
            <ThSortable {...getPropsB('firstName')}>Name</ThSortable>
            <ThSortable {...getPropsB('lastName')}>Last name</ThSortable>
            <ThSortable {...getPropsB('birth')}>Birth</ThSortable>
            <ThSortable {...getPropsB('height')}>Height</ThSortable>
          </Tr>
        </THead>
        <TBody>
          {sortedPeopleB.map(({ firstName, lastName, birth, height }, i) => (
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
