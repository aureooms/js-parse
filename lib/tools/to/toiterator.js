'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toiterator = undefined;

var _toiterable = require('./toiterable');

/**
 * Converts a stream to an iterator.
 * @kind function
 * @param {Stream} stream the stream to read from
 */
var toiterator = exports.toiterator = function toiterator(stream) {
  return (0, _toiterable.toiterable)(stream)[Symbol.iterator]();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b29scy90by90b2l0ZXJhdG9yLmpzIl0sIm5hbWVzIjpbInRvaXRlcmF0b3IiLCJzdHJlYW0iLCJTeW1ib2wiLCJpdGVyYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7OztBQUtPLElBQU1BLGtDQUFhLFNBQWJBLFVBQWE7QUFBQSxTQUFVLDRCQUFZQyxNQUFaLEVBQXFCQyxPQUFPQyxRQUE1QixHQUFWO0FBQUEsQ0FBbkIiLCJmaWxlIjoidG9pdGVyYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvaXRlcmFibGUgfSBmcm9tICcuL3RvaXRlcmFibGUnIDtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIHN0cmVhbSB0byBhbiBpdGVyYXRvci5cbiAqIEBraW5kIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge1N0cmVhbX0gc3RyZWFtIHRoZSBzdHJlYW0gdG8gcmVhZCBmcm9tXG4gKi9cbmV4cG9ydCBjb25zdCB0b2l0ZXJhdG9yID0gc3RyZWFtID0+IHRvaXRlcmFibGUoIHN0cmVhbSApW1N5bWJvbC5pdGVyYXRvcl0oICkgO1xuIl19