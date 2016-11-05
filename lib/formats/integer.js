'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.integer = integer;

/**
 * Converts as many tokens as possible into an integer.
 * @param {Stream} stream - The stream to read from.
 */
function integer(stream) {

	var i = 0;
	var s = 1;

	var token = stream.read();

	if (token === null) return null;

	if (token === '-') s = -1;else if (token !== '+') stream.unread(token);

	while (true) {

		var _token = stream.read();

		if (_token === null) return s * i;

		if (_token < '0' || _token > '9') {
			stream.unread(_token);
			return s * i;
		}

		i *= 10;
		i += +_token;
	}
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mb3JtYXRzL2ludGVnZXIuanMiXSwibmFtZXMiOlsiaW50ZWdlciIsInN0cmVhbSIsImkiLCJzIiwidG9rZW4iLCJyZWFkIiwidW5yZWFkIl0sIm1hcHBpbmdzIjoiOzs7OztRQUtnQkEsTyxHQUFBQSxPOztBQUpoQjs7OztBQUlPLFNBQVNBLE9BQVQsQ0FBbUJDLE1BQW5CLEVBQTRCOztBQUVsQyxLQUFJQyxJQUFJLENBQVI7QUFDQSxLQUFJQyxJQUFJLENBQVI7O0FBRUEsS0FBTUMsUUFBUUgsT0FBT0ksSUFBUCxFQUFkOztBQUVBLEtBQUtELFVBQVUsSUFBZixFQUFzQixPQUFPLElBQVA7O0FBRXRCLEtBQUtBLFVBQVUsR0FBZixFQUFxQkQsSUFBSSxDQUFDLENBQUwsQ0FBckIsS0FDSyxJQUFLQyxVQUFVLEdBQWYsRUFBcUJILE9BQU9LLE1BQVAsQ0FBZUYsS0FBZjs7QUFFMUIsUUFBUSxJQUFSLEVBQWU7O0FBRWQsTUFBTUEsU0FBUUgsT0FBT0ksSUFBUCxFQUFkOztBQUVBLE1BQUtELFdBQVUsSUFBZixFQUFzQixPQUFPRCxJQUFJRCxDQUFYOztBQUV0QixNQUFLRSxTQUFRLEdBQVIsSUFBZUEsU0FBUSxHQUE1QixFQUFrQztBQUNqQ0gsVUFBT0ssTUFBUCxDQUFlRixNQUFmO0FBQ0EsVUFBT0QsSUFBSUQsQ0FBWDtBQUNBOztBQUVEQSxPQUFLLEVBQUw7QUFDQUEsT0FBSyxDQUFDRSxNQUFOO0FBRUE7QUFFRCIsImZpbGUiOiJpbnRlZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIENvbnZlcnRzIGFzIG1hbnkgdG9rZW5zIGFzIHBvc3NpYmxlIGludG8gYW4gaW50ZWdlci5cbiAqIEBwYXJhbSB7U3RyZWFtfSBzdHJlYW0gLSBUaGUgc3RyZWFtIHRvIHJlYWQgZnJvbS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVnZXIgKCBzdHJlYW0gKSB7XG5cblx0bGV0IGkgPSAwIDtcblx0bGV0IHMgPSAxIDtcblxuXHRjb25zdCB0b2tlbiA9IHN0cmVhbS5yZWFkKCApIDtcblxuXHRpZiAoIHRva2VuID09PSBudWxsICkgcmV0dXJuIG51bGwgO1xuXG5cdGlmICggdG9rZW4gPT09ICctJyApIHMgPSAtMSA7XG5cdGVsc2UgaWYgKCB0b2tlbiAhPT0gJysnICkgc3RyZWFtLnVucmVhZCggdG9rZW4gKSA7XG5cblx0d2hpbGUgKCB0cnVlICkge1xuXG5cdFx0Y29uc3QgdG9rZW4gPSBzdHJlYW0ucmVhZCggKSA7XG5cblx0XHRpZiAoIHRva2VuID09PSBudWxsICkgcmV0dXJuIHMgKiBpIDtcblxuXHRcdGlmICggdG9rZW4gPCAnMCcgfHwgdG9rZW4gPiAnOScgKSB7XG5cdFx0XHRzdHJlYW0udW5yZWFkKCB0b2tlbiApIDtcblx0XHRcdHJldHVybiBzICogaSA7XG5cdFx0fVxuXG5cdFx0aSAqPSAxMCA7XG5cdFx0aSArPSArdG9rZW4gO1xuXG5cdH1cblxufVxuIl19