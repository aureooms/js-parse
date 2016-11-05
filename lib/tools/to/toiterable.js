"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.toiterable = toiterable;

var _marked = [toiterable].map(regeneratorRuntime.mark);

/**
 * Converts a stream to an iterable.
 * @param {Stream} stream the stream to read from
 */
function toiterable(stream) {
	var token;
	return regeneratorRuntime.wrap(function toiterable$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					if (!true) {
						_context.next = 8;
						break;
					}

					token = stream.read();

					if (!(token === null)) {
						_context.next = 4;
						break;
					}

					return _context.abrupt("break", 8);

				case 4:
					_context.next = 6;
					return token;

				case 6:
					_context.next = 0;
					break;

				case 8:
				case "end":
					return _context.stop();
			}
		}
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b29scy90by90b2l0ZXJhYmxlLmpzIl0sIm5hbWVzIjpbInRvaXRlcmFibGUiLCJzdHJlYW0iLCJ0b2tlbiIsInJlYWQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBSWlCQSxVLEdBQUFBLFU7O2VBQUFBLFU7O0FBSmpCOzs7O0FBSU8sU0FBVUEsVUFBVixDQUF1QkMsTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFFRSxJQUZGO0FBQUE7QUFBQTtBQUFBOztBQUlDQyxVQUpELEdBSVNELE9BQU9FLElBQVAsRUFKVDs7QUFBQSxXQU1BRCxVQUFVLElBTlY7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBLFlBUUNBLEtBUkQ7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InRvaXRlcmFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvbnZlcnRzIGEgc3RyZWFtIHRvIGFuIGl0ZXJhYmxlLlxuICogQHBhcmFtIHtTdHJlYW19IHN0cmVhbSB0aGUgc3RyZWFtIHRvIHJlYWQgZnJvbVxuICovXG5leHBvcnQgZnVuY3Rpb24qIHRvaXRlcmFibGUgKCBzdHJlYW0gKSB7XG5cblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0Y29uc3QgdG9rZW4gPSBzdHJlYW0ucmVhZCggKSA7XG5cblx0XHRpZiAoIHRva2VuID09PSBudWxsICkgYnJlYWsgO1xuXG5cdFx0eWllbGQgdG9rZW4gO1xuXG5cdH1cblxufVxuIl19