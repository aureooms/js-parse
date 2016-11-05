'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tostring = undefined;

var _toarray = require('./toarray');

/**
 * Converts a stream to a string.
 * @kind function
 * @param {Stream} stream the stream to read from
 */
var tostring = exports.tostring = function tostring(stream) {
  return (0, _toarray.toarray)(stream).join('');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b29scy90by90b3N0cmluZy5qcyJdLCJuYW1lcyI6WyJ0b3N0cmluZyIsInN0cmVhbSIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7Ozs7QUFLTyxJQUFNQSw4QkFBVyxTQUFYQSxRQUFXO0FBQUEsU0FBVSxzQkFBU0MsTUFBVCxFQUFrQkMsSUFBbEIsQ0FBd0IsRUFBeEIsQ0FBVjtBQUFBLENBQWpCIiwiZmlsZSI6InRvc3RyaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9hcnJheSB9IGZyb20gJy4vdG9hcnJheScgO1xuXG4vKipcbiAqIENvbnZlcnRzIGEgc3RyZWFtIHRvIGEgc3RyaW5nLlxuICogQGtpbmQgZnVuY3Rpb25cbiAqIEBwYXJhbSB7U3RyZWFtfSBzdHJlYW0gdGhlIHN0cmVhbSB0byByZWFkIGZyb21cbiAqL1xuZXhwb3J0IGNvbnN0IHRvc3RyaW5nID0gc3RyZWFtID0+IHRvYXJyYXkoIHN0cmVhbSApLmpvaW4oICcnICkgO1xuIl19