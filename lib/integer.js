'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = integer;
/**
 * Converts as many tokens as possible into an integer.
 * @param {Stream} stream - The stream to read from.
 */
function integer(stream) {

	var i = 0;
	var s = 1;

	var token = stream.read();

	if (token === stream.eof) return stream.eof;

	if (token === '-') s = -1;else if (token !== '+') stream.unread(token);

	while (true) {

		var _token = stream.read();

		if (_token === stream.eof) return s * i;

		if (_token < '0' || _token > '9') {
			stream.unread(_token);
			return s * i;
		}

		i *= 10;
		i += +_token;
	}
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbnRlZ2VyLmpzIl0sIm5hbWVzIjpbImludGVnZXIiLCJzdHJlYW0iLCJpIiwicyIsInRva2VuIiwicmVhZCIsImVvZiIsInVucmVhZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBSXdCQSxPO0FBSnhCOzs7O0FBSWUsU0FBU0EsT0FBVCxDQUFtQkMsTUFBbkIsRUFBNEI7O0FBRTFDLEtBQUlDLElBQUksQ0FBUjtBQUNBLEtBQUlDLElBQUksQ0FBUjs7QUFFQSxLQUFNQyxRQUFRSCxPQUFPSSxJQUFQLEVBQWQ7O0FBRUEsS0FBS0QsVUFBVUgsT0FBT0ssR0FBdEIsRUFBNEIsT0FBT0wsT0FBT0ssR0FBZDs7QUFFNUIsS0FBS0YsVUFBVSxHQUFmLEVBQXFCRCxJQUFJLENBQUMsQ0FBTCxDQUFyQixLQUNLLElBQUtDLFVBQVUsR0FBZixFQUFxQkgsT0FBT00sTUFBUCxDQUFlSCxLQUFmOztBQUUxQixRQUFRLElBQVIsRUFBZTs7QUFFZCxNQUFNQSxTQUFRSCxPQUFPSSxJQUFQLEVBQWQ7O0FBRUEsTUFBS0QsV0FBVUgsT0FBT0ssR0FBdEIsRUFBNEIsT0FBT0gsSUFBSUQsQ0FBWDs7QUFFNUIsTUFBS0UsU0FBUSxHQUFSLElBQWVBLFNBQVEsR0FBNUIsRUFBa0M7QUFDakNILFVBQU9NLE1BQVAsQ0FBZUgsTUFBZjtBQUNBLFVBQU9ELElBQUlELENBQVg7QUFDQTs7QUFFREEsT0FBSyxFQUFMO0FBQ0FBLE9BQUssQ0FBQ0UsTUFBTjtBQUVBO0FBRUQiLCJmaWxlIjoiaW50ZWdlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29udmVydHMgYXMgbWFueSB0b2tlbnMgYXMgcG9zc2libGUgaW50byBhbiBpbnRlZ2VyLlxuICogQHBhcmFtIHtTdHJlYW19IHN0cmVhbSAtIFRoZSBzdHJlYW0gdG8gcmVhZCBmcm9tLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnRlZ2VyICggc3RyZWFtICkge1xuXG5cdGxldCBpID0gMCA7XG5cdGxldCBzID0gMSA7XG5cblx0Y29uc3QgdG9rZW4gPSBzdHJlYW0ucmVhZCggKSA7XG5cblx0aWYgKCB0b2tlbiA9PT0gc3RyZWFtLmVvZiApIHJldHVybiBzdHJlYW0uZW9mIDtcblxuXHRpZiAoIHRva2VuID09PSAnLScgKSBzID0gLTEgO1xuXHRlbHNlIGlmICggdG9rZW4gIT09ICcrJyApIHN0cmVhbS51bnJlYWQoIHRva2VuICkgO1xuXG5cdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdGNvbnN0IHRva2VuID0gc3RyZWFtLnJlYWQoICkgO1xuXG5cdFx0aWYgKCB0b2tlbiA9PT0gc3RyZWFtLmVvZiApIHJldHVybiBzICogaSA7XG5cblx0XHRpZiAoIHRva2VuIDwgJzAnIHx8IHRva2VuID4gJzknICkge1xuXHRcdFx0c3RyZWFtLnVucmVhZCggdG9rZW4gKSA7XG5cdFx0XHRyZXR1cm4gcyAqIGkgO1xuXHRcdH1cblxuXHRcdGkgKj0gMTAgO1xuXHRcdGkgKz0gK3Rva2VuIDtcblxuXHR9XG5cbn1cbiJdfQ==