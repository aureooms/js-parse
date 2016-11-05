'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.csv = csv;

var _split = require('./../tools/split');

var _ignore = require('./../tools/ignore');

/**
 * Converts a stream of comma separated values to a stream of values.
 * @param {Stream} stream the stream to read from
 */
function csv(stream) {
  return (0, _split.split)((0, _ignore.ignore)(stream, ' \t\n'), ',');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXRzL2Nzdi5qcyJdLCJuYW1lcyI6WyJjc3YiLCJzdHJlYW0iXSwibWFwcGluZ3MiOiI7Ozs7O1FBUWdCQSxHLEdBQUFBLEc7O0FBUGhCOztBQUNBOztBQUVBOzs7O0FBSU8sU0FBU0EsR0FBVCxDQUFlQyxNQUFmLEVBQXdCO0FBQzlCLFNBQU8sa0JBQU8sb0JBQVFBLE1BQVIsRUFBaUIsT0FBakIsQ0FBUCxFQUFvQyxHQUFwQyxDQUFQO0FBQ0EiLCJmaWxlIjoiY3N2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBzcGxpdCB9IGZyb20gJy4vLi4vdG9vbHMvc3BsaXQnIDtcbmltcG9ydCB7IGlnbm9yZSB9IGZyb20gJy4vLi4vdG9vbHMvaWdub3JlJyA7XG5cbi8qKlxuICogQ29udmVydHMgYSBzdHJlYW0gb2YgY29tbWEgc2VwYXJhdGVkIHZhbHVlcyB0byBhIHN0cmVhbSBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge1N0cmVhbX0gc3RyZWFtIHRoZSBzdHJlYW0gdG8gcmVhZCBmcm9tXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjc3YgKCBzdHJlYW0gKSB7XG5cdHJldHVybiBzcGxpdCggaWdub3JlKCBzdHJlYW0gLCAnIFxcdFxcbicgKSAsICcsJyApIDtcbn1cbiJdfQ==