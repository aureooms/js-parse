"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Converts an iterable to a stream.
 * @param {Iterable} _iterable the iterable to convert
 * @function
 */
var fromiterable = exports.fromiterable = function fromiterable(_iterable) {
	return fromiterator(_iterable[Symbol.iterator]());
};

/**
 * Converts an iterator to a stream.
 * @param {Iterator} _iterator the iterator to convert
 * @function
 */
var fromiterator = exports.fromiterator = function fromiterator(_iterator) {
	return fromcallable(_iterator.next.bind(_iterator));
};

/**
 * Converts a callable to a stream.
 * @param {Callable} _callable the callable to convert
 * @function
 */
var fromcallable = exports.fromcallable = function fromcallable(_callable) {
	return new StreamFromCallable(_callable);
};

/**
 * Class that wraps a callable with a stream.
 */

var StreamFromCallable = exports.StreamFromCallable = function () {

	/**
  * The constructor. Stores the callable that yields values to stream.
  *
  * @param {Callable} callable - The callable to use.
  * @returns {StreamFromCallable}
  *
  */
	function StreamFromCallable(callable) {
		_classCallCheck(this, StreamFromCallable);

		this.callable = callable;
		this.buffer = [];
	}

	/**
  * Returns the next token in the stream.
  *
  * @returns {Object}
  */


	_createClass(StreamFromCallable, [{
		key: "read",
		value: function read() {

			if (this.buffer.length > 0) return this.buffer.pop();

			var state = this.callable();

			if (state.done) return null;

			return state.value;
		}

		/**
   * Puts a token back in the stream. If {@link StreamFromCallable#read} is
   * used just after, this token will be returned.
   *
   * @param {Object} token - The token to put back in the stream.
   */

	}, {
		key: "unread",
		value: function unread(token) {

			this.buffer.push(token);
		}
	}]);

	return StreamFromCallable;
}();

/**
 * Converts a string to a stream.
 *
 * @example
 * fromstring( '1,3,2' ) ;
 *
 * @param {String} _string the string to convert
 * @function
 */


var fromstring = exports.fromstring = fromiterable;

/**
 * Converts an array to a stream.
 * @param {Array} _array the array to convert
 * @function
 */
var fromarray = exports.fromarray = fromiterable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90b29scy9mcm9tL2Zyb20uanMiXSwibmFtZXMiOlsiZnJvbWl0ZXJhYmxlIiwiZnJvbWl0ZXJhdG9yIiwiX2l0ZXJhYmxlIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJmcm9tY2FsbGFibGUiLCJfaXRlcmF0b3IiLCJuZXh0IiwiYmluZCIsIlN0cmVhbUZyb21DYWxsYWJsZSIsIl9jYWxsYWJsZSIsImNhbGxhYmxlIiwiYnVmZmVyIiwibGVuZ3RoIiwicG9wIiwic3RhdGUiLCJkb25lIiwidmFsdWUiLCJ0b2tlbiIsInB1c2giLCJmcm9tc3RyaW5nIiwiZnJvbWFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7Ozs7O0FBS08sSUFBTUEsc0NBQWUsU0FBZkEsWUFBZTtBQUFBLFFBQWFDLGFBQWNDLFVBQVVDLE9BQU9DLFFBQWpCLEdBQWQsQ0FBYjtBQUFBLENBQXJCOztBQUVQOzs7OztBQUtPLElBQU1ILHNDQUFlLFNBQWZBLFlBQWU7QUFBQSxRQUFhSSxhQUFjQyxVQUFVQyxJQUFWLENBQWVDLElBQWYsQ0FBcUJGLFNBQXJCLENBQWQsQ0FBYjtBQUFBLENBQXJCOztBQUVQOzs7OztBQUtPLElBQU1ELHNDQUFlLFNBQWZBLFlBQWU7QUFBQSxRQUFhLElBQUlJLGtCQUFKLENBQXdCQyxTQUF4QixDQUFiO0FBQUEsQ0FBckI7O0FBR1A7Ozs7SUFHYUQsa0IsV0FBQUEsa0I7O0FBRVo7Ozs7Ozs7QUFPQSw2QkFBY0UsUUFBZCxFQUF5QjtBQUFBOztBQUN4QixPQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLE9BQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozt5QkFLUzs7QUFFUixPQUFLLEtBQUtBLE1BQUwsQ0FBWUMsTUFBWixHQUFxQixDQUExQixFQUE4QixPQUFPLEtBQUtELE1BQUwsQ0FBWUUsR0FBWixFQUFQOztBQUU5QixPQUFNQyxRQUFRLEtBQUtKLFFBQUwsRUFBZDs7QUFFQSxPQUFLSSxNQUFNQyxJQUFYLEVBQWtCLE9BQU8sSUFBUDs7QUFFbEIsVUFBT0QsTUFBTUUsS0FBYjtBQUVBOztBQUVEOzs7Ozs7Ozs7eUJBTVNDLEssRUFBUTs7QUFFaEIsUUFBS04sTUFBTCxDQUFZTyxJQUFaLENBQWtCRCxLQUFsQjtBQUVBOzs7Ozs7QUFJRjs7Ozs7Ozs7Ozs7QUFTTyxJQUFNRSxrQ0FBYXBCLFlBQW5COztBQUVQOzs7OztBQUtPLElBQU1xQixnQ0FBWXJCLFlBQWxCIiwiZmlsZSI6ImZyb20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogQ29udmVydHMgYW4gaXRlcmFibGUgdG8gYSBzdHJlYW0uXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBfaXRlcmFibGUgdGhlIGl0ZXJhYmxlIHRvIGNvbnZlcnRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgZnJvbWl0ZXJhYmxlID0gX2l0ZXJhYmxlID0+IGZyb21pdGVyYXRvciggX2l0ZXJhYmxlW1N5bWJvbC5pdGVyYXRvcl0oICkgKSA7XG5cbi8qKlxuICogQ29udmVydHMgYW4gaXRlcmF0b3IgdG8gYSBzdHJlYW0uXG4gKiBAcGFyYW0ge0l0ZXJhdG9yfSBfaXRlcmF0b3IgdGhlIGl0ZXJhdG9yIHRvIGNvbnZlcnRcbiAqIEBmdW5jdGlvblxuICovXG5leHBvcnQgY29uc3QgZnJvbWl0ZXJhdG9yID0gX2l0ZXJhdG9yID0+IGZyb21jYWxsYWJsZSggX2l0ZXJhdG9yLm5leHQuYmluZCggX2l0ZXJhdG9yICkgKSA7XG5cbi8qKlxuICogQ29udmVydHMgYSBjYWxsYWJsZSB0byBhIHN0cmVhbS5cbiAqIEBwYXJhbSB7Q2FsbGFibGV9IF9jYWxsYWJsZSB0aGUgY2FsbGFibGUgdG8gY29udmVydFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tY2FsbGFibGUgPSBfY2FsbGFibGUgPT4gbmV3IFN0cmVhbUZyb21DYWxsYWJsZSggX2NhbGxhYmxlICkgO1xuXG5cbi8qKlxuICogQ2xhc3MgdGhhdCB3cmFwcyBhIGNhbGxhYmxlIHdpdGggYSBzdHJlYW0uXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJlYW1Gcm9tQ2FsbGFibGUge1xuXG5cdC8qKlxuXHQgKiBUaGUgY29uc3RydWN0b3IuIFN0b3JlcyB0aGUgY2FsbGFibGUgdGhhdCB5aWVsZHMgdmFsdWVzIHRvIHN0cmVhbS5cblx0ICpcblx0ICogQHBhcmFtIHtDYWxsYWJsZX0gY2FsbGFibGUgLSBUaGUgY2FsbGFibGUgdG8gdXNlLlxuXHQgKiBAcmV0dXJucyB7U3RyZWFtRnJvbUNhbGxhYmxlfVxuXHQgKlxuXHQgKi9cblx0Y29uc3RydWN0b3IgKCBjYWxsYWJsZSApIHtcblx0XHR0aGlzLmNhbGxhYmxlID0gY2FsbGFibGUgO1xuXHRcdHRoaXMuYnVmZmVyID0gWyBdIDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBuZXh0IHRva2VuIGluIHRoZSBzdHJlYW0uXG5cdCAqXG5cdCAqIEByZXR1cm5zIHtPYmplY3R9XG5cdCAqL1xuXHRyZWFkICggKSB7XG5cblx0XHRpZiAoIHRoaXMuYnVmZmVyLmxlbmd0aCA+IDAgKSByZXR1cm4gdGhpcy5idWZmZXIucG9wKCApIDtcblxuXHRcdGNvbnN0IHN0YXRlID0gdGhpcy5jYWxsYWJsZSggKSA7XG5cblx0XHRpZiAoIHN0YXRlLmRvbmUgKSByZXR1cm4gbnVsbCA7XG5cblx0XHRyZXR1cm4gc3RhdGUudmFsdWUgO1xuXG5cdH1cblxuXHQvKipcblx0ICogUHV0cyBhIHRva2VuIGJhY2sgaW4gdGhlIHN0cmVhbS4gSWYge0BsaW5rIFN0cmVhbUZyb21DYWxsYWJsZSNyZWFkfSBpc1xuXHQgKiB1c2VkIGp1c3QgYWZ0ZXIsIHRoaXMgdG9rZW4gd2lsbCBiZSByZXR1cm5lZC5cblx0ICpcblx0ICogQHBhcmFtIHtPYmplY3R9IHRva2VuIC0gVGhlIHRva2VuIHRvIHB1dCBiYWNrIGluIHRoZSBzdHJlYW0uXG5cdCAqL1xuXHR1bnJlYWQgKCB0b2tlbiApIHtcblxuXHRcdHRoaXMuYnVmZmVyLnB1c2goIHRva2VuICkgO1xuXG5cdH1cblxufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgc3RyaW5nIHRvIGEgc3RyZWFtLlxuICpcbiAqIEBleGFtcGxlXG4gKiBmcm9tc3RyaW5nKCAnMSwzLDInICkgO1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBfc3RyaW5nIHRoZSBzdHJpbmcgdG8gY29udmVydFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tc3RyaW5nID0gZnJvbWl0ZXJhYmxlIDtcblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBhcnJheSB0byBhIHN0cmVhbS5cbiAqIEBwYXJhbSB7QXJyYXl9IF9hcnJheSB0aGUgYXJyYXkgdG8gY29udmVydFxuICogQGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBmcm9tYXJyYXkgPSBmcm9taXRlcmFibGUgO1xuIl19