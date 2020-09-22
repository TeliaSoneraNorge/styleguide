import {
  parseInitialSorting,
  updateSorting,
  createComparator,
  sortObjects,
  findFieldSorting,
  thSortableProps,
} from '../useThSortable';

describe('useThSortable', () => {
  describe('parseInitialSorting', () => {
    it('should parse empty sorting', () => {
      expect(parseInitialSorting()).toEqual([]);
      expect(parseInitialSorting(null)).toEqual([]);
      expect(parseInitialSorting([])).toEqual([]);
    });
    it('should wrap single sorting into an array', () => {
      const sorting = { field: 'foo' };
      expect(parseInitialSorting(sorting)).toEqual([sorting]);
      expect(parseInitialSorting([sorting])).toEqual([sorting]);
    });
    it('should discard invalid sorting elements', () => {
      expect(parseInitialSorting([{}])).toEqual([]);
      expect(parseInitialSorting([{ bar: 'bar' }])).toEqual([]);
      expect(parseInitialSorting([{ field: '' }])).toEqual([]);
      expect(parseInitialSorting([{ field: null }])).toEqual([]);
    });
    it('should parse string into sorting', () => {
      expect(parseInitialSorting(['foo'])).toEqual([{ field: 'foo' }]);
    });
    it('should parse negated string into descendent sorting', () => {
      expect(parseInitialSorting(['!foo'])).toEqual([{ field: 'foo', inverted: true }]);
    });
  });

  describe('findFieldSorting', () => {
    const sorted = [{ field: 'name' }, { field: 'date', inverted: true }, { field: 'num' }];
    it('returns undefined with empty values or no match', () => {
      expect(findFieldSorting()).toBeUndefined();
      expect(findFieldSorting(null, null)).toBeUndefined();
      expect(findFieldSorting(null, [])).toBeUndefined();
      expect(findFieldSorting('name', null)).toBeUndefined();
      expect(findFieldSorting('name', [])).toBeUndefined();
      expect(findFieldSorting(null, sorted)).toBeUndefined();
      expect(findFieldSorting('other field', sorted)).toBeUndefined();
    });
    it('finds the filed sorting priority and inverted value', () => {
      expect(findFieldSorting('name', sorted)).toEqual({ priority: 1, inverted: false });
      expect(findFieldSorting('date', sorted)).toEqual({ priority: 2, inverted: true });
      expect(findFieldSorting('num', sorted)).toEqual({ priority: 3, inverted: false });
    });
  });

  describe('thSortableProps', () => {
    const sorted = [{ field: 'name' }, { field: 'date', inverted: true }];
    const setSorted = jest.fn();
    const props = thSortableProps(sorted, setSorted);
    it('isSorted truthy if field included in sorted list', () => {
      expect(props().isSorted).toBeFalsy();
      expect(props(null).isSorted).toBeFalsy();
      expect(props('foo').isSorted).toBeFalsy();

      expect(props('name').isSorted).toBeTruthy();
    });
    it('sortPriority contains the field sorting priority', () => {
      expect(props().sortPriority).toBeUndefined();
      expect(props(null).sortPriority).toBeUndefined();
      expect(props('foo').sortPriority).toBeUndefined();

      expect(props('name').sortPriority).toEqual(1);
      expect(props('date').sortPriority).toEqual(2);
    });
    it('isSortedDesc truthy if field is inverted sorted', () => {
      expect(props().isSortedDesc).toBeFalsy();
      expect(props(null).isSortedDesc).toBeFalsy();
      expect(props('foo').isSortedDesc).toBeFalsy();
      expect(props('name').isSortedDesc).toBeFalsy();

      expect(props('date').isSortedDesc).toBeTruthy();
    });
    describe('onSort function', () => {
      it('is always defines', () => {
        expect(props().onSort).toBeDefined();
        expect(props(null).onSort).toBeDefined();
        expect(props('name').onSort).toBeDefined();
      });
      it('calls setSorted function with updated sorting', () => {
        props('name').onSort();
        expect(setSorted).toHaveBeenCalledTimes(1);
        expect(setSorted).toHaveBeenLastCalledWith([
          { field: 'name', inverted: true },
          { field: 'date', inverted: true },
        ]);
      });
    });
  });

  describe('updateSorting', () => {
    test('should ignore empty fields', () => {
      expect(updateSorting([])).toEqual([]);
      expect(updateSorting([], null)).toEqual([]);
      const initial = [{ field: 'foo', inverted: false }];
      expect(updateSorting(initial)).toEqual(initial);
      expect(updateSorting(initial, null)).toEqual(initial);
    });
    test('should add first sorting', () => {
      expect(updateSorting([], 'foo')).toEqual([{ field: 'foo', inverted: false }]);
    });
    describe('with one sorting', () => {
      test('should invert first sorting', () => {
        expect(updateSorting([{ field: 'foo', inverted: false }], 'foo')).toEqual([{ field: 'foo', inverted: true }]);
        expect(updateSorting([{ field: 'foo', inverted: true }], 'foo')).toEqual([{ field: 'foo', inverted: false }]);
      });
      test('should add second sorting', () => {
        expect(updateSorting([{ field: 'foo', inverted: false }], 'bar')).toEqual([
          { field: 'bar', inverted: false },
          { field: 'foo', inverted: false },
        ]);
      });
      test('should discard current sorting when max sorting fields is 1', () => {
        expect(updateSorting([{ field: 'foo', inverted: false }], 'bar', 1)).toEqual([
          { field: 'bar', inverted: false },
        ]);
      });
    });
    describe('with two fields sorted', () => {
      const currentSorting = [{ field: 'foo', inverted: false }, { field: 'bar', inverted: false }];
      test('should invert first sorting', () => {
        expect(updateSorting(currentSorting, 'foo')).toEqual([
          { field: 'foo', inverted: true },
          { field: 'bar', inverted: false },
        ]);
      });
      test('should promote secondary field sorting to first', () => {
        expect(updateSorting(currentSorting, 'bar')).toEqual([
          { field: 'bar', inverted: false },
          { field: 'foo', inverted: false },
        ]);
      });
      test('should add third sorting', () => {
        expect(updateSorting(currentSorting, 'ola')).toEqual([
          { field: 'ola', inverted: false },
          { field: 'foo', inverted: false },
          { field: 'bar', inverted: false },
        ]);
      });
      test('should discard oldest sorting when max sorting fields is 2', () => {
        expect(updateSorting(currentSorting, 'ola', 2)).toEqual([
          { field: 'ola', inverted: false },
          { field: 'foo', inverted: false },
        ]);
      });
    });
    describe('with three fields sorted', () => {
      const currentSorting = [
        { field: 'foo', inverted: false },
        { field: 'bar', inverted: false },
        { field: 'ola', inverted: false },
      ];
      test('should invert first sorting', () => {
        expect(updateSorting(currentSorting, 'foo')).toEqual([
          { field: 'foo', inverted: true },
          { field: 'bar', inverted: false },
          { field: 'ola', inverted: false },
        ]);
      });
      test('should promote secondary field sorting to first', () => {
        expect(updateSorting(currentSorting, 'bar')).toEqual([
          { field: 'bar', inverted: false },
          { field: 'foo', inverted: false },
          { field: 'ola', inverted: false },
        ]);
        expect(updateSorting(currentSorting, 'ola')).toEqual([
          { field: 'ola', inverted: false },
          { field: 'foo', inverted: false },
          { field: 'bar', inverted: false },
        ]);
      });
      test('should add new sorting but remove last one when max sorting fields is 3)', () => {
        expect(updateSorting(currentSorting, 'wtf', 3)).toEqual([
          { field: 'wtf', inverted: false },
          { field: 'foo', inverted: false },
          { field: 'bar', inverted: false },
        ]);
      });
    });
  });

  describe('sorting', () => {
    const specialFieldComparators = {
      accessNumber: (a, b) => (a.length !== b.length ? a.length - b.length : a.localeCompare(b)),
    };

    describe('comparator', () => {
      function ensureIsDumbComparator(compare) {
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

      it('should return dumb comparator with no existing field', () => {
        ensureIsDumbComparator(createComparator({}));
        ensureIsDumbComparator(createComparator({ field: 'not existing' }));
      });

      const expectCorrectOrder = compareResult => expect(compareResult).toBeLessThan(0);
      const expectIndifferentOrder = compareResult => expect(compareResult).toBe(0);
      const expectWrongOrder = compareResult => expect(compareResult).toBeGreaterThan(0);

      it('precedence for empty values', () => {
        const stat = { foo: 0 };
        const compare = createComparator({ field: 'foo' });
        expectCorrectOrder(compare(null, stat));
        expectCorrectOrder(compare({}, stat));
        expectWrongOrder(compare(stat, null));
        expectWrongOrder(compare(stat, {}));
        const invertCompare = createComparator({ field: 'foo', inverted: true });
        expectWrongOrder(invertCompare(null, stat));
        expectWrongOrder(invertCompare({}, stat));
        expectCorrectOrder(invertCompare(stat, null));
        expectCorrectOrder(invertCompare(stat, {}));
      });

      it('indifference for equal values', () => {
        const compare = createComparator({ field: 'foo' });
        expectIndifferentOrder(compare({}, {}));
        expectIndifferentOrder(compare({ foo: 1 }, { foo: 1 }));
        expectIndifferentOrder(compare({ foo: '1' }, { foo: '1' }));
        expectIndifferentOrder(compare({ foo: 'a' }, { foo: 'a' }));
        expectIndifferentOrder(compare({ foo: '2000-01-01' }, { foo: '2000-01-01' }));

        expectIndifferentOrder(
          createComparator({ field: 'accessNumber' })({ accessNumber: '0123' }, { accessNumber: '0123' })
        );
      });

      it('precedence for lower values', () => {
        const compare = createComparator({ field: 'foo' });
        expectCorrectOrder(compare({ foo: 1 }, { foo: 2 }));
        expectCorrectOrder(compare({ foo: '1' }, { foo: '2' }));
        expectCorrectOrder(compare({ foo: 'a' }, { foo: 'b' }));
        expectCorrectOrder(compare({ foo: '2000-01-01' }, { foo: '2000-01-02' }));

        const accessNumberCompare = createComparator({ field: 'accessNumber' }, specialFieldComparators);
        expectCorrectOrder(accessNumberCompare({ accessNumber: '0123' }, { accessNumber: '1234' }));
        expectCorrectOrder(accessNumberCompare({ accessNumber: '123' }, { accessNumber: '0123' }));
      });

      it('inverted precedence for lower values', () => {
        const compare = createComparator({ field: 'foo', inverted: true });
        expectWrongOrder(compare({ foo: 1 }, { foo: 2 }));
        expectWrongOrder(compare({ foo: '1' }, { foo: '2' }));
        expectWrongOrder(compare({ foo: 'a' }, { foo: 'b' }));
        expectWrongOrder(compare({ foo: '2000-01-01' }, { foo: '2000-01-02' }));

        const accessNumberCompare = createComparator(
          { field: 'accessNumber', inverted: true },
          specialFieldComparators
        );
        expectWrongOrder(accessNumberCompare({ accessNumber: '0123' }, { accessNumber: '1234' }));
        expectWrongOrder(accessNumberCompare({ accessNumber: '123' }, { accessNumber: '0123' }));
      });
    });

    describe('sort objects', () => {
      const foo1 = { date: '2000-01-01', name: 'Foo', accessNumber: '01', num: 0 };
      const bar1 = { date: '2000-01-01', name: 'Bar', accessNumber: '5', num: 5 };
      const foo2 = { date: '2000-01-02', name: 'Foo', accessNumber: '02', num: 2 };
      const bar2 = { date: '2000-01-02', name: 'Bar', accessNumber: '4', num: 4 };
      const bar22 = { date: '2000-01-02', name: 'Bar', accessNumber: '2', num: -4 };
      const statistics = [foo1, bar1, foo2, bar2, bar22];
      it('should return no objects', () => {
        expect(sortObjects()).toBeUndefined();
        expect(sortObjects(null)).toBeNull();
      });
      it('should return original statistics', () => {
        expect(sortObjects(statistics)).toBe(statistics);
        expect(sortObjects(statistics, [])).toBe(statistics);
      });
      it('should return equal statistics', () => {
        expect(sortObjects(statistics, [{}])).toEqual(statistics);
        expect(sortObjects(statistics, [{ field: 'not existing' }])).toEqual(statistics);
      });
      it('should sort with one sorting field', () => {
        expect(sortObjects(statistics, [{ field: 'date' }])).toEqual([...statistics]);
        expect(sortObjects(statistics, [{ field: 'name' }])).toEqual([bar1, bar2, bar22, foo1, foo2]);
        expect(sortObjects(statistics, [{ field: 'num' }])).toEqual([bar22, foo1, foo2, bar2, bar1]);
        expect(sortObjects(statistics, [{ field: 'accessNumber' }], specialFieldComparators)).toEqual([
          bar22,
          bar2,
          bar1,
          foo1,
          foo2,
        ]);
        //  inverted
        expect(sortObjects(statistics, [{ field: 'date', inverted: true }])).toEqual([foo2, bar2, bar22, foo1, bar1]);
        expect(sortObjects(statistics, [{ field: 'name', inverted: true }])).toEqual([foo1, foo2, bar1, bar2, bar22]);
        expect(sortObjects(statistics, [{ field: 'num', inverted: true }])).toEqual([bar1, bar2, foo2, foo1, bar22]);
        expect(sortObjects(statistics, [{ field: 'accessNumber', inverted: true }], specialFieldComparators)).toEqual([
          foo2,
          foo1,
          bar1,
          bar2,
          bar22,
        ]);
      });
      it('should sort with two sorting field', () => {
        expect(sortObjects(statistics, [{ field: 'date' }, { field: 'name' }])).toEqual([
          bar1,
          foo1,
          bar2,
          bar22,
          foo2,
        ]);
        expect(sortObjects(statistics, [{ field: 'date' }, { field: 'num' }])).toEqual([foo1, bar1, bar22, foo2, bar2]);
        expect(
          sortObjects(statistics, [{ field: 'name' }, { field: 'accessNumber' }], specialFieldComparators)
        ).toEqual([bar22, bar2, bar1, foo1, foo2]);
      });
      it('should sort with three sorting field', () => {
        expect(
          sortObjects(
            statistics,
            [{ field: 'date' }, { field: 'name' }, { field: 'accessNumber' }],
            specialFieldComparators
          )
        ).toEqual([bar1, foo1, bar22, bar2, foo2]);
        expect(
          sortObjects(statistics, [{ field: 'name' }, { field: 'date', inverted: true }, { field: 'num' }])
        ).toEqual([bar22, bar2, bar1, foo2, foo1]);
      });
    });
  });
});
