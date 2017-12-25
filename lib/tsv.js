'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tsv;

var _jsStream = require('@aureooms/js-stream');

/**
 * Converts a stream of tab separated values to a stream of values.
 * @param {Stream} stream the stream to read from
 */
function tsv(stream) {
  return (0, _jsStream.split)((0, _jsStream.ignore)(stream, ' \n'), '\t');
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90c3YuanMiXSwibmFtZXMiOlsidHN2Iiwic3RyZWFtIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFNd0JBLEc7O0FBTnhCOztBQUVBOzs7O0FBSWUsU0FBU0EsR0FBVCxDQUFlQyxNQUFmLEVBQXdCO0FBQ3RDLFNBQU8scUJBQU8sc0JBQVFBLE1BQVIsRUFBaUIsS0FBakIsQ0FBUCxFQUFrQyxJQUFsQyxDQUFQO0FBQ0EiLCJmaWxlIjoidHN2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3BsaXQgLCBpZ25vcmUgfSBmcm9tICdAYXVyZW9vbXMvanMtc3RyZWFtJyA7XG5cbi8qKlxuICogQ29udmVydHMgYSBzdHJlYW0gb2YgdGFiIHNlcGFyYXRlZCB2YWx1ZXMgdG8gYSBzdHJlYW0gb2YgdmFsdWVzLlxuICogQHBhcmFtIHtTdHJlYW19IHN0cmVhbSB0aGUgc3RyZWFtIHRvIHJlYWQgZnJvbVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0c3YgKCBzdHJlYW0gKSB7XG5cdHJldHVybiBzcGxpdCggaWdub3JlKCBzdHJlYW0gLCAnIFxcbicgKSAsICdcXHQnICkgO1xufVxuIl19