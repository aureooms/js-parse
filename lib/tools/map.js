'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.map = map;

var _from = require('./from');

var _to = require('./to');

var _jsItertools = require('@aureooms/js-itertools');

/**
 * Applies a callable to each token of a stream.
 * @param {Callable} callable the callable to apply
 * @param {Stream} stream the stream to process
 */
function map(callable, stream) {

  return (0, _from.fromiterable)((0, _jsItertools.map)(callable, (0, _to.toiterable)(stream)));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy9tYXAuanMiXSwibmFtZXMiOlsibWFwIiwiY2FsbGFibGUiLCJzdHJlYW0iXSwibWFwcGluZ3MiOiI7Ozs7O1FBVWdCQSxHLEdBQUFBLEc7O0FBVGhCOztBQUNBOztBQUNBOztBQUVBOzs7OztBQUtPLFNBQVNBLEdBQVQsQ0FBZUMsUUFBZixFQUEwQkMsTUFBMUIsRUFBbUM7O0FBRXpDLFNBQU8sd0JBQWMsc0JBQU1ELFFBQU4sRUFBaUIsb0JBQVlDLE1BQVosQ0FBakIsQ0FBZCxDQUFQO0FBRUEiLCJmaWxlIjoibWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBmcm9taXRlcmFibGUgfSBmcm9tICcuL2Zyb20nIDtcbmltcG9ydCB7IHRvaXRlcmFibGUgfSBmcm9tICcuL3RvJyA7XG5pbXBvcnQgeyBtYXAgYXMgX21hcCB9IGZyb20gJ0BhdXJlb29tcy9qcy1pdGVydG9vbHMnIDtcblxuLyoqXG4gKiBBcHBsaWVzIGEgY2FsbGFibGUgdG8gZWFjaCB0b2tlbiBvZiBhIHN0cmVhbS5cbiAqIEBwYXJhbSB7Q2FsbGFibGV9IGNhbGxhYmxlIHRoZSBjYWxsYWJsZSB0byBhcHBseVxuICogQHBhcmFtIHtTdHJlYW19IHN0cmVhbSB0aGUgc3RyZWFtIHRvIHByb2Nlc3NcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcCAoIGNhbGxhYmxlICwgc3RyZWFtICkge1xuXG5cdHJldHVybiBmcm9taXRlcmFibGUoIF9tYXAoIGNhbGxhYmxlICwgdG9pdGVyYWJsZSggc3RyZWFtICkgKSApIDtcblxufVxuIl19