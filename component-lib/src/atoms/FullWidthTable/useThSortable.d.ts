type Comparator<T> = (a: T, b: T) => number;

interface ComparatorDictionary {
  [key: string]: Comparator;
}

interface Sorting {
  field: string;
  inverted?: boolean;
}

type InitialSorting = string | Sorting;

interface ThSortableProps {
  onSort: () => void;
  isSorted?: boolean;
  isSortedDesc?: boolean;
  sortPriority?: number;
}

type ThSortablePropsGetter = (fieldName: string) => ThSortableProps;

/**
 * Returns a sorted version of the objects parameter,
 * and a function to get ThSortableProps.
 *
 * @param objects   The original array of objects to be sorted.
 * @param maxSortedFields   The maximum number of sorting criteria.
 * @param initialSorting    The initial sorting array, expressed as [[string]] or [[Sorting]].
 *                          When using [[string]] format, the value is the name of the object's property, prefix if '!' to invert the sorting.
 * @param specialFieldComparators   A dictionary object for special object's property comparators.
 */
export declare function useThSortable<object>(
  objects: object[],
  maxSortedFields?: number,
  initialSorting?: InitialSorting[],
  specialFieldComparators?: ComparatorDictionary
): [object[], ThSortablePropsGetter];
