import { Dispatch, SetStateAction, useMemo, useState } from 'react';

const DEFAULT_MAX_SORTED_FIELDS = 2;

type Comparator<T> = (a: T, b: T) => number;

interface ComparatorDictionary<T> {
  [key: string]: Comparator<T>;
}

interface FieldSorting {
  inverted?: boolean;
  priority?: number;
}

interface Sorting<T> {
  field: keyof T;
  inverted?: boolean;
}

type InitialSorting<T> = string | Sorting<T>;

interface ThSortableProps {
  onSort: () => void;
  isSorted: boolean;
  isSortedDesc?: boolean;
  sortPriority?: number;
}

type ThSortablePropsGetter<T> = (fieldName: keyof T) => ThSortableProps;

const ORDER_CORRECT = -1;
const ORDER_INDIFFERENT = 0;
const ORDER_WRONG = 1;

const updateSorting = <T>([...sortingArray]: Sorting<T>[], field: keyof T, maxSortingFields: number) => {
  return !field
    ? [...sortingArray]
    : [
        { field, inverted: !sortingArray[0] || sortingArray[0].field !== field ? false : !sortingArray[0].inverted },
        ...sortingArray.filter(s => s.field !== field),
      ].slice(0, maxSortingFields);
};

const findFieldSorting: <T>(field: keyof T, sortingArray: Sorting<T>[]) => FieldSorting | undefined = (
  field,
  sortingArray
) =>
  !sortingArray
    ? undefined
    : sortingArray.reduce(
        (found: FieldSorting | undefined, sorting, index, array) =>
          found
            ? found
            : field === sorting.field
            ? { inverted: !!sorting.inverted, priority: array.length > 1 ? index + 1 : undefined }
            : undefined,
        undefined
      );

const createThSortablePropsGetter: <T>(
  sortingArray: Sorting<T>[],
  setSortingArray: Dispatch<SetStateAction<Sorting<T>[]>>,
  maxSortingFields: number
) => ThSortablePropsGetter<T> = (sortingArray, setSortingArray, maxSortingFields) => field => {
  const fieldSorting = findFieldSorting(field, sortingArray);
  return {
    onSort: () => {
      setSortingArray(updateSorting(sortingArray, field, maxSortingFields));
    },
    ...(fieldSorting
      ? { isSorted: true, isSortedDesc: !!fieldSorting.inverted, sortPriority: fieldSorting.priority }
      : { isSorted: false }),
  };
};

const hasValue = (value: any) => value !== null && typeof value !== 'undefined';
const createComparator: <X>(sorting: Sorting<X>, specialFieldComparator: ComparatorDictionary<X>) => Comparator<X> = (
  { field, inverted },
  specialFieldComparators = {}
) => (a, b) => {
  const valueA: any = a ? a[field] : null,
    valueB: any = b ? b[field] : null;
  const result =
    !field || (!hasValue(valueA) && !hasValue(valueB))
      ? ORDER_INDIFFERENT
      : !hasValue(valueA)
      ? ORDER_CORRECT
      : !hasValue(valueB)
      ? ORDER_WRONG
      : specialFieldComparators[field as string]
      ? specialFieldComparators[field as string](valueA, valueB)
      : valueA.localeCompare //  String.localCompare
      ? valueA.localeCompare(valueB)
      : valueA - valueB;
  return (inverted ? -1 : 1) * result;
};

type SortObjectsFn = <T>(
  objects: T[],
  sortingArray: Sorting<T>[],
  specialFieldComparators: ComparatorDictionary<T>
) => T[];
const sortObjects: SortObjectsFn = (objects, sortingArray, specialFieldComparators) => {
  if (!objects || objects.length === 0 || !sortingArray || sortingArray.length === 0) {
    return objects;
  }
  const sortComparator: Comparator<any> = (a, b) =>
    sortingArray.reduce(
      (res, sorting) => (res !== ORDER_INDIFFERENT ? res : createComparator(sorting, specialFieldComparators)(a, b)),
      ORDER_INDIFFERENT
    );
  return [...objects].sort(sortComparator);
};

const parseInitialSorting = <T>(initialSorting: InitialSorting<T>[]) => {
  if (initialSorting === null || typeof initialSorting === 'undefined') {
    return [];
  }
  return (Array.isArray(initialSorting) ? initialSorting : [initialSorting])
    .map(
      initialSorting =>
        (typeof initialSorting === 'string'
          ? initialSorting.startsWith('!')
            ? { field: initialSorting.substring(1), inverted: true }
            : { field: initialSorting }
          : initialSorting) as Sorting<T>
    )
    .filter(sorting => sorting.field);
};

export type UseThSortable = <T>(
  objects: T[],
  maxSortedFields?: number,
  initialSorting?: InitialSorting<T>[],
  specialFieldComparators?: ComparatorDictionary<T>
) => [T[], ThSortablePropsGetter<T>];

/**
 * Returns a sorted version of the objects parameter,
 * and a function to get ThSortableProps.
 *
 * @param objects   The original array of objects to be sorted.
 * @param maxSortedFields   The maximum number of sorting criteria.
 * @param initialSorting    The initial sorting array, expressed as [[string]] or [[Sorting]].
 *                          When using [[string]] format, the value is the name of the object's property,
 *                          prefix with '!' to invert the sorting.
 * @param specialFieldComparators   A dictionary object for special object's property comparators.
 */
export const useThSortable: UseThSortable = (
  objects = [],
  maxSortedFields = DEFAULT_MAX_SORTED_FIELDS,
  initialSorting = [],
  specialFieldComparators = {}
) => {
  const [sortingArray, setSortingArray] = useState(parseInitialSorting(initialSorting));
  const sortedObjects = useMemo(() => sortObjects(objects, sortingArray, specialFieldComparators), [
    objects,
    maxSortedFields,
    sortingArray,
    specialFieldComparators,
  ]);
  const thSortablePropsGetter = createThSortablePropsGetter(sortingArray, setSortingArray, maxSortedFields);
  return [sortedObjects, thSortablePropsGetter];
};

if (process.env.NODE_ENV === 'test') {
  module.exports.parseInitialSorting = parseInitialSorting;
  module.exports.updateSorting = updateSorting;
  module.exports.createComparator = createComparator;
  module.exports.sortObjects = sortObjects;
  module.exports.findFieldSorting = findFieldSorting;
  module.exports.thSortableProps = createThSortablePropsGetter;
}
