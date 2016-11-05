'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ignore = ignore;

var _split = require('./split');

var _chain = require('./chain');

/**
 * Filters a stream by ignoring a given set of tokens.
 * @param {Stream} stream the stream to filter
 * @param {Iterable} toignore the tokens to ignore
 */
function ignore(stream, toignore) {

  return (0, _chain.chain)((0, _split.split)(stream, toignore));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy9pZ25vcmUuanMiXSwibmFtZXMiOlsiaWdub3JlIiwic3RyZWFtIiwidG9pZ25vcmUiXSwibWFwcGluZ3MiOiI7Ozs7O1FBU2dCQSxNLEdBQUFBLE07O0FBUmhCOztBQUNBOztBQUVBOzs7OztBQUtPLFNBQVNBLE1BQVQsQ0FBa0JDLE1BQWxCLEVBQTJCQyxRQUEzQixFQUFzQzs7QUFFNUMsU0FBTyxrQkFBTyxrQkFBT0QsTUFBUCxFQUFnQkMsUUFBaEIsQ0FBUCxDQUFQO0FBRUEiLCJmaWxlIjoiaWdub3JlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBzcGxpdCB9IGZyb20gJy4vc3BsaXQnIDtcbmltcG9ydCB7IGNoYWluIH0gZnJvbSAnLi9jaGFpbicgO1xuXG4vKipcbiAqIEZpbHRlcnMgYSBzdHJlYW0gYnkgaWdub3JpbmcgYSBnaXZlbiBzZXQgb2YgdG9rZW5zLlxuICogQHBhcmFtIHtTdHJlYW19IHN0cmVhbSB0aGUgc3RyZWFtIHRvIGZpbHRlclxuICogQHBhcmFtIHtJdGVyYWJsZX0gdG9pZ25vcmUgdGhlIHRva2VucyB0byBpZ25vcmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlnbm9yZSAoIHN0cmVhbSAsIHRvaWdub3JlICkge1xuXG5cdHJldHVybiBjaGFpbiggc3BsaXQoIHN0cmVhbSAsIHRvaWdub3JlICkgKSA7XG5cbn1cbiJdfQ==