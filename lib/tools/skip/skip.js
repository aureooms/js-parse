'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.skip = skip;

/**
 * Outputs the next token of a stream that is not contained in a given toskip
 * set.
 * @param {Stream} stream
 * @param {Iterable} toskip
 */
function skip(stream, toskip) {

  var _toskip = new Set(toskip);

  while (true) {

    var token = stream.read();

    if (token === null) return null;

    if (_toskip.has(token)) continue;

    return token;
  }
}

/**
 * @kind function
 */
var skipblanks = exports.skipblanks = function skipblanks(stream) {
  return skip(stream, ' \t\n');
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b29scy9za2lwL3NraXAuanMiXSwibmFtZXMiOlsic2tpcCIsInN0cmVhbSIsInRvc2tpcCIsIl90b3NraXAiLCJTZXQiLCJ0b2tlbiIsInJlYWQiLCJoYXMiLCJza2lwYmxhbmtzIl0sIm1hcHBpbmdzIjoiOzs7OztRQU9nQkEsSSxHQUFBQSxJOztBQU5oQjs7Ozs7O0FBTU8sU0FBU0EsSUFBVCxDQUFnQkMsTUFBaEIsRUFBeUJDLE1BQXpCLEVBQWtDOztBQUV4QyxNQUFNQyxVQUFVLElBQUlDLEdBQUosQ0FBU0YsTUFBVCxDQUFoQjs7QUFFQSxTQUFRLElBQVIsRUFBZTs7QUFFZCxRQUFNRyxRQUFRSixPQUFPSyxJQUFQLEVBQWQ7O0FBRUEsUUFBS0QsVUFBVSxJQUFmLEVBQXNCLE9BQU8sSUFBUDs7QUFFdEIsUUFBS0YsUUFBUUksR0FBUixDQUFhRixLQUFiLENBQUwsRUFBNEI7O0FBRTVCLFdBQU9BLEtBQVA7QUFFQTtBQUVEOztBQUVEOzs7QUFHTyxJQUFNRyxrQ0FBYSxTQUFiQSxVQUFhO0FBQUEsU0FBVVIsS0FBTUMsTUFBTixFQUFlLE9BQWYsQ0FBVjtBQUFBLENBQW5CIiwiZmlsZSI6InNraXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogT3V0cHV0cyB0aGUgbmV4dCB0b2tlbiBvZiBhIHN0cmVhbSB0aGF0IGlzIG5vdCBjb250YWluZWQgaW4gYSBnaXZlbiB0b3NraXBcbiAqIHNldC5cbiAqIEBwYXJhbSB7U3RyZWFtfSBzdHJlYW1cbiAqIEBwYXJhbSB7SXRlcmFibGV9IHRvc2tpcFxuICovXG5leHBvcnQgZnVuY3Rpb24gc2tpcCAoIHN0cmVhbSAsIHRvc2tpcCApIHtcblxuXHRjb25zdCBfdG9za2lwID0gbmV3IFNldCggdG9za2lwICkgO1xuXG5cdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdGNvbnN0IHRva2VuID0gc3RyZWFtLnJlYWQoICkgO1xuXG5cdFx0aWYgKCB0b2tlbiA9PT0gbnVsbCApIHJldHVybiBudWxsIDtcblxuXHRcdGlmICggX3Rvc2tpcC5oYXMoIHRva2VuICkgKSBjb250aW51ZSA7XG5cblx0XHRyZXR1cm4gdG9rZW4gO1xuXG5cdH1cblxufVxuXG4vKipcbiAqIEBraW5kIGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBza2lwYmxhbmtzID0gc3RyZWFtID0+IHNraXAoIHN0cmVhbSAsICcgXFx0XFxuJyApIDtcbiJdfQ==