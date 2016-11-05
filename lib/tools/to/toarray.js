'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toarray = undefined;

var _toiterable = require('./toiterable');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Converts a stream to an array.
 * @kind function
 * @param {Stream} stream the stream to read from
 */
var toarray = exports.toarray = function toarray(stream) {
  return [].concat(_toConsumableArray((0, _toiterable.toiterable)(stream)));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b29scy90by90b2FycmF5LmpzIl0sIm5hbWVzIjpbInRvYXJyYXkiLCJzdHJlYW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUVBOzs7OztBQUtPLElBQU1BLDRCQUFVLFNBQVZBLE9BQVU7QUFBQSxzQ0FBZSw0QkFBWUMsTUFBWixDQUFmO0FBQUEsQ0FBaEIiLCJmaWxlIjoidG9hcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgdG9pdGVyYWJsZSB9IGZyb20gJy4vdG9pdGVyYWJsZScgO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgc3RyZWFtIHRvIGFuIGFycmF5LlxuICogQGtpbmQgZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyZWFtfSBzdHJlYW0gdGhlIHN0cmVhbSB0byByZWFkIGZyb21cbiAqL1xuZXhwb3J0IGNvbnN0IHRvYXJyYXkgPSBzdHJlYW0gPT4gWyAuLi50b2l0ZXJhYmxlKCBzdHJlYW0gKSBdIDtcbiJdfQ==