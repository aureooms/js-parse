'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = csv;

var _jsStream = require('@aureooms/js-stream');

/**
 * Converts a stream of comma separated values to a stream of values.
 * @param {Stream} stream the stream to read from
 */
function csv(stream) {
  return (0, _jsStream.split)((0, _jsStream.ignore)(stream, ' \t\n'), ',');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jc3YuanMiXSwibmFtZXMiOlsiY3N2Iiwic3RyZWFtIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFNd0JBLEc7O0FBTnhCOztBQUVBOzs7O0FBSWUsU0FBU0EsR0FBVCxDQUFlQyxNQUFmLEVBQXdCO0FBQ3RDLFNBQU8scUJBQU8sc0JBQVFBLE1BQVIsRUFBaUIsT0FBakIsQ0FBUCxFQUFvQyxHQUFwQyxDQUFQO0FBQ0EiLCJmaWxlIjoiY3N2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3BsaXQgLCBpZ25vcmUgfSBmcm9tICdAYXVyZW9vbXMvanMtc3RyZWFtJyA7XG5cbi8qKlxuICogQ29udmVydHMgYSBzdHJlYW0gb2YgY29tbWEgc2VwYXJhdGVkIHZhbHVlcyB0byBhIHN0cmVhbSBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge1N0cmVhbX0gc3RyZWFtIHRoZSBzdHJlYW0gdG8gcmVhZCBmcm9tXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNzdiAoIHN0cmVhbSApIHtcblx0cmV0dXJuIHNwbGl0KCBpZ25vcmUoIHN0cmVhbSAsICcgXFx0XFxuJyApICwgJywnICkgO1xufVxuIl19