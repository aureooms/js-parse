'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;

var _from = require('./from');

var _to = require('./to');

var _aureoomsJsItertools = require('@aureooms/js-itertools');

/**
 * Applies a callable to each token of a stream.
 * @param {Callable} callable the callable to apply
 * @param {Stream} stream the stream to process
 */
function map(callable, stream) {

  return (0, _from.fromiterable)((0, _aureoomsJsItertools.map)(callable, (0, _to.toiterable)(stream)));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy9tYXAuanMiXSwibmFtZXMiOlsibWFwIiwiY2FsbGFibGUiLCJzdHJlYW0iXSwibWFwcGluZ3MiOiI7Ozs7O1FBVWdCQSxHLEdBQUFBLEc7O0FBVGhCOztBQUNBOztBQUNBOztBQUVBOzs7OztBQUtPLFNBQVNBLEdBQVQsQ0FBZUMsUUFBZixFQUEwQkMsTUFBMUIsRUFBbUM7O0FBRXpDLFNBQU8sd0JBQWMsOEJBQU1ELFFBQU4sRUFBaUIsb0JBQVlDLE1BQVosQ0FBakIsQ0FBZCxDQUFQO0FBRUEiLCJmaWxlIjoibWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBmcm9taXRlcmFibGUgfSBmcm9tICcuL2Zyb20nIDtcbmltcG9ydCB7IHRvaXRlcmFibGUgfSBmcm9tICcuL3RvJyA7XG5pbXBvcnQgeyBtYXAgYXMgX21hcCB9IGZyb20gJ2F1cmVvb21zLWpzLWl0ZXJ0b29scycgO1xuXG4vKipcbiAqIEFwcGxpZXMgYSBjYWxsYWJsZSB0byBlYWNoIHRva2VuIG9mIGEgc3RyZWFtLlxuICogQHBhcmFtIHtDYWxsYWJsZX0gY2FsbGFibGUgdGhlIGNhbGxhYmxlIHRvIGFwcGx5XG4gKiBAcGFyYW0ge1N0cmVhbX0gc3RyZWFtIHRoZSBzdHJlYW0gdG8gcHJvY2Vzc1xuICovXG5leHBvcnQgZnVuY3Rpb24gbWFwICggY2FsbGFibGUgLCBzdHJlYW0gKSB7XG5cblx0cmV0dXJuIGZyb21pdGVyYWJsZSggX21hcCggY2FsbGFibGUgLCB0b2l0ZXJhYmxlKCBzdHJlYW0gKSApICkgO1xuXG59XG4iXX0=