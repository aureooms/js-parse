'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chain = chain;

var _from = require('./from');

var _to = require('./to');

var _aureoomsJsItertools = require('@aureooms/js-itertools');

/**
 * Converts a stream of streams of tokens to a stream of tokens.
 * @param {Stream} stream the stream to read from
 */
function chain(stream) {

  return (0, _from.fromiterable)((0, _aureoomsJsItertools.chain)((0, _aureoomsJsItertools.map)(_to.toiterable, (0, _to.toiterable)(stream))));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy9jaGFpbi5qcyJdLCJuYW1lcyI6WyJjaGFpbiIsInN0cmVhbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFTZ0JBLEssR0FBQUEsSzs7QUFSaEI7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7QUFJTyxTQUFTQSxLQUFULENBQWlCQyxNQUFqQixFQUEwQjs7QUFFaEMsU0FBTyx3QkFBYyxnQ0FBUSw4Q0FBbUIsb0JBQVlBLE1BQVosQ0FBbkIsQ0FBUixDQUFkLENBQVA7QUFFQSIsImZpbGUiOiJjaGFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgZnJvbWl0ZXJhYmxlIH0gZnJvbSAnLi9mcm9tJyA7XG5pbXBvcnQgeyB0b2l0ZXJhYmxlIH0gZnJvbSAnLi90bycgO1xuaW1wb3J0IHsgbWFwIGFzIF9tYXAgLCBjaGFpbiBhcyBfY2hhaW4gfSBmcm9tICdhdXJlb29tcy1qcy1pdGVydG9vbHMnIDtcblxuLyoqXG4gKiBDb252ZXJ0cyBhIHN0cmVhbSBvZiBzdHJlYW1zIG9mIHRva2VucyB0byBhIHN0cmVhbSBvZiB0b2tlbnMuXG4gKiBAcGFyYW0ge1N0cmVhbX0gc3RyZWFtIHRoZSBzdHJlYW0gdG8gcmVhZCBmcm9tXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFpbiAoIHN0cmVhbSApIHtcblxuXHRyZXR1cm4gZnJvbWl0ZXJhYmxlKCBfY2hhaW4oIF9tYXAoIHRvaXRlcmFibGUgLCB0b2l0ZXJhYmxlKCBzdHJlYW0gKSApICkgKSA7XG5cbn1cbiJdfQ==