import { useState, useMemo } from 'react';

const DEFAULT_MAX_SORTED_FIELDS = 2;

const updateSorting = ([...sortingArray], field, maxSortingFields) => {
  return !field
    ? [...sortingArray]
    : [
        { field, inverted: !sortingArray[0] || sortingArray[0].field !== field ? false : !sortingArray[0].inverted },
        ...sortingArray.filter(s => s.field !== field),
      ].slice(0, maxSortingFields);
};

const findFieldSorting = (field, sortingArray) =>
  !sortingArray
    ? null
    : sortingArray.reduce(
        (found, sorting, index, array) =>
          found
            ? found
            : field !== sorting.field
            ? null
            : { inverted: !!sorting.inverted, priority: array.length > 1 ? index + 1 : null },
        null
      );

const thSortableProps = (sortingArray, setSortingArray, maxSortingFields) => field => {
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
const hasValue = value => value !== null && typeof value !== 'undefined';
const comparator = ({ field, inverted } = {}, specialFieldComparators = {}) => (a = {}, b = {}) => {
  const valueA = a ? a[`${field}`] : null,
    valueB = b ? b[`${field}`] : null;
  const result =
    !field || (!hasValue(valueA) && !hasValue(valueB))
      ? ORDER_INDIFFERENT
      : !hasValue(valueA)
      ? ORDER_CORRECT
      : !hasValue(valueB)
      ? ORDER_WRONG
      : specialFieldComparators[field]
      ? specialFieldComparators[field](valueA, valueB)
      : valueA.localeCompare //  String.localCompare
      ? valueA.localeCompare(valueB)
      : valueA - valueB;
  return (inverted ? -1 : 1) * result;
};

const sortObjects = (objects = null, sortingArray, specialFieldComparators) => {
  if (!objects || objects.length === 0 || !sortingArray || sortingArray.length === 0) {
    return objects;
  }
  let sortComparator = (a, b) =>
    sortingArray.reduce(
      (res, sorting) => (res !== ORDER_INDIFFERENT ? res : comparator(sorting, specialFieldComparators)(a, b)),
      ORDER_INDIFFERENT
    );
  return [...objects].sort(sortComparator);
};

const parseInitialSorting = initialSorting => {
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
  specialFieldComparators
) => {
  const [sortingArray, setSortingArray] = useState(parseInitialSorting(initialSorting));
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
