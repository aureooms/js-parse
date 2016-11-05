'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.split = split;
exports._split = _split;

var _from = require('../from');

var _exhaust = require('../exhaust');

var _marked = [_split].map(regeneratorRuntime.mark);

/**
 * Splits the input stream into a stream of streams according to some set of
 * separators. See {@link _split} for the actual implementation.
 *
 * @param {Stream} stream - The input stream.
 * @param {Iterable} sep - An iterable of separators.
 * @returns {Stream}
 */
function split(stream, sep) {

	return (0, _from.fromiterable)(_split(stream, sep));
}

/**
 * Same as {@link split}, but returns an iterator rather than a stream.
 *
 * @param {Stream} stream - The input stream.
 * @param {Iterable} sep - An iterable of separators.
 * @returns {Iterator}
 */
function _split(stream, sep) {
	var _this = this;

	var _sep, _loop, _ret;

	return regeneratorRuntime.wrap(function _split$(_context3) {
		while (1) {
			switch (_context3.prev = _context3.next) {
				case 0:
					_sep = new Set(sep);
					_loop = regeneratorRuntime.mark(function _loop() {
						var token, group;
						return regeneratorRuntime.wrap(function _loop$(_context2) {
							while (1) {
								switch (_context2.prev = _context2.next) {
									case 0:
										token = stream.read();

										if (!(token === null)) {
											_context2.next = 3;
											break;
										}

										return _context2.abrupt('return', 'break');

									case 3:
										if (!_sep.has(token)) {
											_context2.next = 5;
											break;
										}

										return _context2.abrupt('return', 'continue');

									case 5:
										group = (0, _from.fromiterable)(regeneratorRuntime.mark(function _callee() {
											var _token;

											return regeneratorRuntime.wrap(function _callee$(_context) {
												while (1) {
													switch (_context.prev = _context.next) {
														case 0:
															_context.next = 2;
															return token;

														case 2:
															if (!true) {
																_context.next = 10;
																break;
															}

															_token = stream.read();

															if (!_sep.has(_token)) {
																_context.next = 6;
																break;
															}

															return _context.abrupt('break', 10);

														case 6:
															_context.next = 8;
															return _token;

														case 8:
															_context.next = 2;
															break;

														case 10:
														case 'end':
															return _context.stop();
													}
												}
											}, _callee, this);
										})());
										_context2.next = 8;
										return group;

									case 8:

										(0, _exhaust.exhaust)(group);

									case 9:
									case 'end':
										return _context2.stop();
								}
							}
						}, _loop, _this);
					});

				case 2:
					if (!true) {
						_context3.next = 12;
						break;
					}

					return _context3.delegateYield(_loop(), 't0', 4);

				case 4:
					_ret = _context3.t0;
					_context3.t1 = _ret;
					_context3.next = _context3.t1 === 'break' ? 8 : _context3.t1 === 'continue' ? 9 : 10;
					break;

				case 8:
					return _context3.abrupt('break', 12);

				case 9:
					return _context3.abrupt('continue', 2);

				case 10:
					_context3.next = 2;
					break;

				case 12:
				case 'end':
					return _context3.stop();
			}
		}
	}, _marked[0], this);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b29scy9zcGxpdC9zcGxpdC5qcyJdLCJuYW1lcyI6WyJzcGxpdCIsIl9zcGxpdCIsInN0cmVhbSIsInNlcCIsIl9zZXAiLCJTZXQiLCJ0b2tlbiIsInJlYWQiLCJoYXMiLCJncm91cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFhZ0JBLEssR0FBQUEsSztRQWFDQyxNLEdBQUFBLE07O0FBekJqQjs7QUFFQTs7ZUF1QmlCQSxNOztBQXJCakI7Ozs7Ozs7O0FBUU8sU0FBU0QsS0FBVCxDQUFpQkUsTUFBakIsRUFBMEJDLEdBQTFCLEVBQWdDOztBQUV0QyxRQUFPLHdCQUFjRixPQUFRQyxNQUFSLEVBQWlCQyxHQUFqQixDQUFkLENBQVA7QUFFQTs7QUFFRDs7Ozs7OztBQU9PLFNBQVVGLE1BQVYsQ0FBbUJDLE1BQW5CLEVBQTRCQyxHQUE1QjtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUFDLFNBRkEsR0FFTyxJQUFJQyxHQUFKLENBQVNGLEdBQVQsQ0FGUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1DRyxlQU5ELEdBTVNKLE9BQU9LLElBQVAsRUFOVDs7QUFBQSxnQkFRQUQsVUFBVSxJQVJWO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUEsZUFVQUYsS0FBS0ksR0FBTCxDQUFVRixLQUFWLENBVkE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFZQ0csZUFaRCxHQVlTLHdCQUFjLHdCQUFFO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUV2QkgsS0FGdUI7O0FBQUE7QUFBQSxvQkFJckIsSUFKcUI7QUFBQTtBQUFBO0FBQUE7O0FBTXRCQSxxQkFOc0IsR0FNZEosT0FBT0ssSUFBUCxFQU5jOztBQUFBLG9CQVF2QkgsS0FBS0ksR0FBTCxDQUFVRixNQUFWLENBUnVCO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQSxzQkFVdEJBLE1BVnNCOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFGLEdBQWQsQ0FaVDtBQUFBO0FBQUEsaUJBNEJDRyxLQTVCRDs7QUFBQTs7QUE4QkwsZ0NBQVNBLEtBQVQ7O0FBOUJLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsVUFJRSxJQUpGO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzcGxpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgZnJvbWl0ZXJhYmxlIH0gZnJvbSAnLi4vZnJvbScgO1xuXG5pbXBvcnQgeyBleGhhdXN0IH0gZnJvbSAnLi4vZXhoYXVzdCcgO1xuXG4vKipcbiAqIFNwbGl0cyB0aGUgaW5wdXQgc3RyZWFtIGludG8gYSBzdHJlYW0gb2Ygc3RyZWFtcyBhY2NvcmRpbmcgdG8gc29tZSBzZXQgb2ZcbiAqIHNlcGFyYXRvcnMuIFNlZSB7QGxpbmsgX3NwbGl0fSBmb3IgdGhlIGFjdHVhbCBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1N0cmVhbX0gc3RyZWFtIC0gVGhlIGlucHV0IHN0cmVhbS5cbiAqIEBwYXJhbSB7SXRlcmFibGV9IHNlcCAtIEFuIGl0ZXJhYmxlIG9mIHNlcGFyYXRvcnMuXG4gKiBAcmV0dXJucyB7U3RyZWFtfVxuICovXG5leHBvcnQgZnVuY3Rpb24gc3BsaXQgKCBzdHJlYW0gLCBzZXAgKSB7XG5cblx0cmV0dXJuIGZyb21pdGVyYWJsZSggX3NwbGl0KCBzdHJlYW0gLCBzZXAgKSApIDtcblxufVxuXG4vKipcbiAqIFNhbWUgYXMge0BsaW5rIHNwbGl0fSwgYnV0IHJldHVybnMgYW4gaXRlcmF0b3IgcmF0aGVyIHRoYW4gYSBzdHJlYW0uXG4gKlxuICogQHBhcmFtIHtTdHJlYW19IHN0cmVhbSAtIFRoZSBpbnB1dCBzdHJlYW0uXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBzZXAgLSBBbiBpdGVyYWJsZSBvZiBzZXBhcmF0b3JzLlxuICogQHJldHVybnMge0l0ZXJhdG9yfVxuICovXG5leHBvcnQgZnVuY3Rpb24qIF9zcGxpdCAoIHN0cmVhbSAsIHNlcCApIHtcblxuXHRjb25zdCBfc2VwID0gbmV3IFNldCggc2VwICkgO1xuXG5cdHdoaWxlICggdHJ1ZSApIHtcblxuXHRcdGNvbnN0IHRva2VuID0gc3RyZWFtLnJlYWQoICkgO1xuXG5cdFx0aWYgKCB0b2tlbiA9PT0gbnVsbCApIGJyZWFrIDtcblxuXHRcdGlmICggX3NlcC5oYXMoIHRva2VuICkgKSBjb250aW51ZSA7XG5cblx0XHRjb25zdCBncm91cCA9IGZyb21pdGVyYWJsZSggKCBmdW5jdGlvbiogKCApIHtcblxuXHRcdFx0eWllbGQgdG9rZW4gO1xuXG5cdFx0XHR3aGlsZSAoIHRydWUgKSB7XG5cblx0XHRcdFx0Y29uc3QgdG9rZW4gPSBzdHJlYW0ucmVhZCggKSA7XG5cblx0XHRcdFx0aWYgKCBfc2VwLmhhcyggdG9rZW4gKSApIGJyZWFrIDtcblxuXHRcdFx0XHR5aWVsZCB0b2tlbiA7XG5cblx0XHRcdH1cblxuXHRcdH0gKSggKSApIDtcblxuXHRcdHlpZWxkIGdyb3VwIDtcblxuXHRcdGV4aGF1c3QoIGdyb3VwICkgO1xuXG5cdH1cblxufVxuIl19