import { useState, useMemo } from 'react';

const DEFAULT_MAX_SORTED_FIELDS = 2;

const updateSorting = ([...sortingArray], field: any, maxSortingFields: any) => {
  return !field
    ? [...sortingArray]
    : [
        { field, inverted: !sortingArray[0] || sortingArray[0].field !== field ? false : !sortingArray[0].inverted },
        ...sortingArray.filter(s => s.field !== field),
      ].slice(0, maxSortingFields);
};

const findFieldSorting = (field: any, sortingArray: any) =>
  !sortingArray
    ? null
    : sortingArray.reduce(
        (found: any, sorting: any, index: any, array: any) =>
          found
            ? found
            : field !== sorting.field
            ? null
            : { inverted: !!sorting.inverted, priority: array.length > 1 ? index + 1 : null },
        null
      );

const thSortableProps = (sortingArray: any, setSortingArray: any, maxSortingFields: any) => (field: any) => {
  // @ts-expect-error ts-migrate(2554) FIXME: Expected 2 arguments, but got 3.
  const fieldSorting = findFieldSorting(field, sortingArray, setSortingArray);
  return {
    onSort: () => {
      setSortingArray(updateSorting(sortingArray, field, maxSortingFields));
    },
    ...(fieldSorting
      ? { isSorted: true, isSortedDesc: !!fieldSorting.inverted, sortPriority: fieldSorting.priority }
      : undefined),
  };
};

const ORDER_CORRECT = -1;
const ORDER_INDIFFERENT = 0;
const ORDER_WRONG = 1;
const hasValue = (value: any) => value !== null && typeof value !== 'undefined';
const comparator = ({
  field,
  inverted
}: any = {}, specialFieldComparators = {}) => (a = {}, b = {}) => {
  // @ts-expect-error ts-migrate(7053) FIXME: No index signature with a parameter of type 'strin... Remove this comment to see the full error message
  const valueA = a ? a[`${field}`] : null,
    // @ts-expect-error ts-migrate(7053) FIXME: No index signature with a parameter of type 'strin... Remove this comment to see the full error message
    valueB = b ? b[`${field}`] : null;
  const result =
    !field || (!hasValue(valueA) && !hasValue(valueB))
      ? ORDER_INDIFFERENT
      : !hasValue(valueA)
      ? ORDER_CORRECT
      : !hasValue(valueB)
      ? ORDER_WRONG
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      : specialFieldComparators[field]
      // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      ? specialFieldComparators[field](valueA, valueB)
      : valueA.localeCompare //  String.localCompare
      ? valueA.localeCompare(valueB)
      : valueA - valueB;
  return (inverted ? -1 : 1) * result;
};

const sortObjects = (objects = null, sortingArray: any, specialFieldComparators: any) => {
  // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
  if (!objects || objects.length === 0 || !sortingArray || sortingArray.length === 0) {
    return objects;
  }
  let sortComparator = (a: any, b: any) =>
    sortingArray.reduce(
      (res: any, sorting: any) => (res !== ORDER_INDIFFERENT ? res : comparator(sorting, specialFieldComparators)(a, b)),
      ORDER_INDIFFERENT
    );
  // @ts-expect-error ts-migrate(2461) FIXME: Type 'null' is not an array type.
  return [...objects].sort(sortComparator);
};

const parseInitialSorting = (initialSorting: any) => {
  if (initialSorting === null || typeof initialSorting === 'undefined') {
    return [];
  }
  return (Array.isArray(initialSorting) ? initialSorting : [initialSorting])
    .map(any => (typeof any === 'string' ? { field: any } : any))
    .filter(sorting => sorting.field)
    .map(sorting => (sorting.field.startsWith('!') ? { field: sorting.field.substring(1), inverted: true } : sorting));
};

export const useThSortable = (
  objects = [],
  maxSortedFields = DEFAULT_MAX_SORTED_FIELDS,
  initialSorting = [],
  specialFieldComparators: any
) => {
  const [sortingArray, setSortingArray] = useState(parseInitialSorting(initialSorting));
  // @ts-expect-error ts-migrate(2345) FIXME: Type 'never[]' is not assignable to type 'null'.
  const sortedObjects = useMemo(() => sortObjects(objects, sortingArray, specialFieldComparators), [
    objects,
    sortingArray,
    specialFieldComparators,
  ]);
  return [sortedObjects, thSortableProps(sortingArray, setSortingArray, maxSortedFields)];
};

if (process.env.NODE_ENV === 'test') {
  module.exports.parseInitialSorting = parseInitialSorting;
  module.exports.updateSorting = updateSorting;
  module.exports.comparator = comparator;
  module.exports.sortObjects = sortObjects;
  module.exports.findFieldSorting = findFieldSorting;
  module.exports.thSortableProps = thSortableProps;
}
