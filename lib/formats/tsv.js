'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tsv = tsv;

var _split = require('./../tools/split');

var _ignore = require('./../tools/ignore');

/**
 * Converts a stream of tab separated values to a stream of values.
 * @param {Stream} stream the stream to read from
 */
function tsv(stream) {
  return (0, _split.split)((0, _ignore.ignore)(stream, ' \n'), '\t');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXRzL3Rzdi5qcyJdLCJuYW1lcyI6WyJ0c3YiLCJzdHJlYW0iXSwibWFwcGluZ3MiOiI7Ozs7O1FBUWdCQSxHLEdBQUFBLEc7O0FBUGhCOztBQUNBOztBQUVBOzs7O0FBSU8sU0FBU0EsR0FBVCxDQUFlQyxNQUFmLEVBQXdCO0FBQzlCLFNBQU8sa0JBQU8sb0JBQVFBLE1BQVIsRUFBaUIsS0FBakIsQ0FBUCxFQUFrQyxJQUFsQyxDQUFQO0FBQ0EiLCJmaWxlIjoidHN2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBzcGxpdCB9IGZyb20gJy4vLi4vdG9vbHMvc3BsaXQnIDtcbmltcG9ydCB7IGlnbm9yZSB9IGZyb20gJy4vLi4vdG9vbHMvaWdub3JlJyA7XG5cbi8qKlxuICogQ29udmVydHMgYSBzdHJlYW0gb2YgdGFiIHNlcGFyYXRlZCB2YWx1ZXMgdG8gYSBzdHJlYW0gb2YgdmFsdWVzLlxuICogQHBhcmFtIHtTdHJlYW19IHN0cmVhbSB0aGUgc3RyZWFtIHRvIHJlYWQgZnJvbVxuICovXG5leHBvcnQgZnVuY3Rpb24gdHN2ICggc3RyZWFtICkge1xuXHRyZXR1cm4gc3BsaXQoIGlnbm9yZSggc3RyZWFtICwgJyBcXG4nICkgLCAnXFx0JyApIDtcbn1cbiJdfQ==