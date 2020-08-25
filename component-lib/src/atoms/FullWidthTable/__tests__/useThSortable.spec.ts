import {
  // @ts-expect-error ts-migrate(2459) FIXME: Module '"../useThSortable"' declares 'parseInitial... Remove this comment to see the full error message
  parseInitialSorting,
  // @ts-expect-error ts-migrate(2459) FIXME: Module '"../useThSortable"' declares 'updateSortin... Remove this comment to see the full error message
  updateSorting,
  // @ts-expect-error ts-migrate(2459) FIXME: Module '"../useThSortable"' declares 'comparator' ... Remove this comment to see the full error message
  comparator,
  // @ts-expect-error ts-migrate(2459) FIXME: Module '"../useThSortable"' declares 'sortObjects'... Remove this comment to see the full error message
  sortObjects,
  // @ts-expect-error ts-migrate(2459) FIXME: Module '"../useThSortable"' declares 'findFieldSor... Remove this comment to see the full error message
  findFieldSorting,
  // @ts-expect-error ts-migrate(2459) FIXME: Module '"../useThSortable"' declares 'thSortablePr... Remove this comment to see the full error message
  thSortableProps,
} from '../useThSortable';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('useThSortable', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('parseInitialSorting', () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should parse empty sorting', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(parseInitialSorting()).toEqual([]);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(parseInitialSorting(null)).toEqual([]);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(parseInitialSorting([])).toEqual([]);
    });
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should wrap single sorting into an array', () => {
      const sorting = { field: 'foo' };
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(parseInitialSorting(sorting)).toEqual([sorting]);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(parseInitialSorting([sorting])).toEqual([sorting]);
    });
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should discard invalid sorting elements', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(parseInitialSorting([{}])).toEqual([]);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(parseInitialSorting([{ bar: 'bar' }])).toEqual([]);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(parseInitialSorting([{ field: '' }])).toEqual([]);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(parseInitialSorting([{ field: null }])).toEqual([]);
    });
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should parse string into sorting', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(parseInitialSorting(['foo'])).toEqual([{ field: 'foo' }]);
    });
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('should parse negated string into descendent sorting', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(parseInitialSorting(['!foo'])).toEqual([{ field: 'foo', inverted: true }]);
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('findFieldSorting', () => {
    const sorted = [{ field: 'name' }, { field: 'date', inverted: true }, { field: 'num' }];
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('returns null with empty values or no match', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(findFieldSorting()).toBeNull();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(findFieldSorting(null, null)).toBeNull();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(findFieldSorting(null, [])).toBeNull();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(findFieldSorting('name', null)).toBeNull();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(findFieldSorting('name', [])).toBeNull();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(findFieldSorting(null, sorted)).toBeNull();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(findFieldSorting('other field', sorted)).toBeNull();
    });
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('finds the filed sorting priority and inverted value', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(findFieldSorting('name', sorted)).toEqual({ priority: 1, inverted: false });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(findFieldSorting('date', sorted)).toEqual({ priority: 2, inverted: true });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(findFieldSorting('num', sorted)).toEqual({ priority: 3, inverted: false });
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('thSortableProps', () => {
    const sorted = [{ field: 'name' }, { field: 'date', inverted: true }];
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    const setSorted = jest.fn();
    const props = thSortableProps(sorted, setSorted);
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('isSorted truthy if field included in sorted list', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(props().isSorted).toBeFalsy();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(props(null).isSorted).toBeFalsy();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(props('foo').isSorted).toBeFalsy();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(props('name').isSorted).toBeTruthy();
    });
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('sortPriority contains the field sorting priority', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(props().sortPriority).toBeUndefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(props(null).sortPriority).toBeUndefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(props('foo').sortPriority).toBeUndefined();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(props('name').sortPriority).toEqual(1);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(props('date').sortPriority).toEqual(2);
    });
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
    it('isSortedDesc truthy if field is inverted sorted', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(props().isSortedDesc).toBeFalsy();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(props(null).isSortedDesc).toBeFalsy();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(props('foo').isSortedDesc).toBeFalsy();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(props('name').isSortedDesc).toBeFalsy();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(props('date').isSortedDesc).toBeTruthy();
    });
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('onSort function', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('is always defines', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(props().onSort).toBeDefined();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(props(null).onSort).toBeDefined();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(props('name').onSort).toBeDefined();
      });
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('calls setSorted function with updated sorting', () => {
        props('name').onSort();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(setSorted).toHaveBeenCalledTimes(1);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(setSorted).toHaveBeenLastCalledWith([
          { field: 'name', inverted: true },
          { field: 'date', inverted: true },
        ]);
      });
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('updateSorting', () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('should ignore empty fields', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(updateSorting([])).toEqual([]);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(updateSorting([], null)).toEqual([]);
      const initial = [{ field: 'foo', inverted: false }];
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(updateSorting(initial)).toEqual(initial);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(updateSorting(initial, null)).toEqual(initial);
    });
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
    test('should add first sorting', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(updateSorting([], 'foo')).toEqual([{ field: 'foo', inverted: false }]);
    });
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('with one sorting', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
      test('should invert first sorting', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(updateSorting([{ field: 'foo', inverted: false }], 'foo')).toEqual([{ field: 'foo', inverted: true }]);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(updateSorting([{ field: 'foo', inverted: true }], 'foo')).toEqual([{ field: 'foo', inverted: false }]);
      });
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
      test('should add second sorting', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(updateSorting([{ field: 'foo', inverted: false }], 'bar')).toEqual([
          { field: 'bar', inverted: false },
          { field: 'foo', inverted: false },
        ]);
      });
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
      test('should discard current sorting when max sorting fields is 1', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(updateSorting([{ field: 'foo', inverted: false }], 'bar', 1)).toEqual([
          { field: 'bar', inverted: false },
        ]);
      });
    });
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('with two fields sorted', () => {
      const currentSorting = [{ field: 'foo', inverted: false }, { field: 'bar', inverted: false }];
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
      test('should invert first sorting', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(updateSorting(currentSorting, 'foo')).toEqual([
          { field: 'foo', inverted: true },
          { field: 'bar', inverted: false },
        ]);
      });
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
      test('should promote secondary field sorting to first', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(updateSorting(currentSorting, 'bar')).toEqual([
          { field: 'bar', inverted: false },
          { field: 'foo', inverted: false },
        ]);
      });
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
      test('should add third sorting', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(updateSorting(currentSorting, 'ola')).toEqual([
          { field: 'ola', inverted: false },
          { field: 'foo', inverted: false },
          { field: 'bar', inverted: false },
        ]);
      });
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
      test('should discard oldest sorting when max sorting fields is 2', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(updateSorting(currentSorting, 'ola', 2)).toEqual([
          { field: 'ola', inverted: false },
          { field: 'foo', inverted: false },
        ]);
      });
    });
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('with three fields sorted', () => {
      const currentSorting = [
        { field: 'foo', inverted: false },
        { field: 'bar', inverted: false },
        { field: 'ola', inverted: false },
      ];
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
      test('should invert first sorting', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(updateSorting(currentSorting, 'foo')).toEqual([
          { field: 'foo', inverted: true },
          { field: 'bar', inverted: false },
          { field: 'ola', inverted: false },
        ]);
      });
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
      test('should promote secondary field sorting to first', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(updateSorting(currentSorting, 'bar')).toEqual([
          { field: 'bar', inverted: false },
          { field: 'foo', inverted: false },
          { field: 'ola', inverted: false },
        ]);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(updateSorting(currentSorting, 'ola')).toEqual([
          { field: 'ola', inverted: false },
          { field: 'foo', inverted: false },
          { field: 'bar', inverted: false },
        ]);
      });
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'test'. Do you need to install ty... Remove this comment to see the full error message
      test('should add new sorting but remove last one when max sorting fields is 3)', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(updateSorting(currentSorting, 'wtf', 3)).toEqual([
          { field: 'wtf', inverted: false },
          { field: 'foo', inverted: false },
          { field: 'bar', inverted: false },
        ]);
      });
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('sorting', () => {
    const specialFieldComparators = {
      accessNumber: (a: any, b: any) => (a.length !== b.length ? a.length - b.length : a.localeCompare(b)),
    };

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('comparator', () => {
      function ensureIsDumbComparator(compare: any) {
        const stat = { foo: 0 };
        expectIndifferentOrder(compare());
        expectIndifferentOrder(compare(1, 2));
        expectIndifferentOrder(compare({}, {}));
        expectIndifferentOrder(compare(stat, { bar: 0 }));
        expectIndifferentOrder(compare(stat));
        expectIndifferentOrder(compare(stat, {}));
        expectIndifferentOrder(compare(null, stat));
        expectIndifferentOrder(compare({}, stat));
      }

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should return dumb comparator with no existing field', () => {
        ensureIsDumbComparator(comparator());
        ensureIsDumbComparator(comparator({ field: 'not existing' }));
      });

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      const expectCorrectOrder = (compareResult: any) => expect(compareResult).toBeLessThan(0);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      const expectIndifferentOrder = (compareResult: any) => expect(compareResult).toBe(0);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      const expectWrongOrder = (compareResult: any) => expect(compareResult).toBeGreaterThan(0);

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('precedence for empty values', () => {
        const stat = { foo: 0 };
        const compare = comparator({ field: 'foo' });
        expectCorrectOrder(compare(null, stat));
        expectCorrectOrder(compare({}, stat));
        expectWrongOrder(compare(stat, null));
        expectWrongOrder(compare(stat, {}));
        const invertCompare = comparator({ field: 'foo', inverted: true });
        expectWrongOrder(invertCompare(null, stat));
        expectWrongOrder(invertCompare({}, stat));
        expectCorrectOrder(invertCompare(stat, null));
        expectCorrectOrder(invertCompare(stat, {}));
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('indifference for equal values', () => {
        const compare = comparator({ field: 'foo' });
        expectIndifferentOrder(compare({}, {}));
        expectIndifferentOrder(compare({ foo: 1 }, { foo: 1 }));
        expectIndifferentOrder(compare({ foo: '1' }, { foo: '1' }));
        expectIndifferentOrder(compare({ foo: 'a' }, { foo: 'a' }));
        expectIndifferentOrder(compare({ foo: '2000-01-01' }, { foo: '2000-01-01' }));

        expectIndifferentOrder(
          comparator({ field: 'accessNumber' })({ accessNumber: '0123' }, { accessNumber: '0123' })
        );
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('precedence for lower values', () => {
        const compare = comparator({ field: 'foo' });
        expectCorrectOrder(compare({ foo: 1 }, { foo: 2 }));
        expectCorrectOrder(compare({ foo: '1' }, { foo: '2' }));
        expectCorrectOrder(compare({ foo: 'a' }, { foo: 'b' }));
        expectCorrectOrder(compare({ foo: '2000-01-01' }, { foo: '2000-01-02' }));

        const accessNumberCompare = comparator({ field: 'accessNumber' }, specialFieldComparators);
        expectCorrectOrder(accessNumberCompare({ accessNumber: '0123' }, { accessNumber: '1234' }));
        expectCorrectOrder(accessNumberCompare({ accessNumber: '123' }, { accessNumber: '0123' }));
      });

      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('inverted precedence for lower values', () => {
        const compare = comparator({ field: 'foo', inverted: true });
        expectWrongOrder(compare({ foo: 1 }, { foo: 2 }));
        expectWrongOrder(compare({ foo: '1' }, { foo: '2' }));
        expectWrongOrder(compare({ foo: 'a' }, { foo: 'b' }));
        expectWrongOrder(compare({ foo: '2000-01-01' }, { foo: '2000-01-02' }));

        const accessNumberCompare = comparator({ field: 'accessNumber', inverted: true }, specialFieldComparators);
        expectWrongOrder(accessNumberCompare({ accessNumber: '0123' }, { accessNumber: '1234' }));
        expectWrongOrder(accessNumberCompare({ accessNumber: '123' }, { accessNumber: '0123' }));
      });
    });

    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    describe('sort objects', () => {
      const foo1 = { date: '2000-01-01', name: 'Foo', accessNumber: '01', num: 0 };
      const bar1 = { date: '2000-01-01', name: 'Bar', accessNumber: '5', num: 5 };
      const foo2 = { date: '2000-01-02', name: 'Foo', accessNumber: '02', num: 2 };
      const bar2 = { date: '2000-01-02', name: 'Bar', accessNumber: '4', num: 4 };
      const bar22 = { date: '2000-01-02', name: 'Bar', accessNumber: '2', num: -4 };
      const statistics = [foo1, bar1, foo2, bar2, bar22];
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should return null', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(sortObjects()).toBeNull();
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(sortObjects(null)).toBeNull();
      });
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should return original statistics', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(sortObjects(statistics)).toBe(statistics);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(sortObjects(statistics, [])).toBe(statistics);
      });
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should return equal statistics', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(sortObjects(statistics, [{}])).toEqual(statistics);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(sortObjects(statistics, [{ field: 'not existing' }])).toEqual(statistics);
      });
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should sort with one sorting field', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(sortObjects(statistics, [{ field: 'date' }])).toEqual([...statistics]);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(sortObjects(statistics, [{ field: 'name' }])).toEqual([bar1, bar2, bar22, foo1, foo2]);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(sortObjects(statistics, [{ field: 'num' }])).toEqual([bar22, foo1, foo2, bar2, bar1]);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(sortObjects(statistics, [{ field: 'accessNumber' }], specialFieldComparators)).toEqual([
          bar22,
          bar2,
          bar1,
          foo1,
          foo2,
        ]);
        //  inverted
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(sortObjects(statistics, [{ field: 'date', inverted: true }])).toEqual([foo2, bar2, bar22, foo1, bar1]);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(sortObjects(statistics, [{ field: 'name', inverted: true }])).toEqual([foo1, foo2, bar1, bar2, bar22]);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(sortObjects(statistics, [{ field: 'num', inverted: true }])).toEqual([bar1, bar2, foo2, foo1, bar22]);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(sortObjects(statistics, [{ field: 'accessNumber', inverted: true }], specialFieldComparators)).toEqual([
          foo2,
          foo1,
          bar1,
          bar2,
          bar22,
        ]);
      });
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should sort with two sorting field', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(sortObjects(statistics, [{ field: 'date' }, { field: 'name' }])).toEqual([
          bar1,
          foo1,
          bar2,
          bar22,
          foo2,
        ]);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(sortObjects(statistics, [{ field: 'date' }, { field: 'num' }])).toEqual([foo1, bar1, bar22, foo2, bar2]);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(
          sortObjects(statistics, [{ field: 'name' }, { field: 'accessNumber' }], specialFieldComparators)
        ).toEqual([bar22, bar2, bar1, foo1, foo2]);
      });
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'it'. Do you need to install type... Remove this comment to see the full error message
      it('should sort with three sorting field', () => {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(
          sortObjects(
            statistics,
            [{ field: 'date' }, { field: 'name' }, { field: 'accessNumber' }],
            specialFieldComparators
          )
        ).toEqual([bar1, foo1, bar22, bar2, foo2]);
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect(
          sortObjects(statistics, [{ field: 'name' }, { field: 'date', inverted: true }, { field: 'num' }])
        ).toEqual([bar22, bar2, bar1, foo2, foo1]);
      });
    });
  });
});
