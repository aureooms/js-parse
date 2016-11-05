"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exhaust = exhaust;

/**
 * Exhausts a stream.
 * @param {Stream} stream the stream to read from
 */
function exhaust(stream) {

  while (stream.read() !== null) {}
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90b29scy9leGhhdXN0LmpzIl0sIm5hbWVzIjpbImV4aGF1c3QiLCJzdHJlYW0iLCJyZWFkIl0sIm1hcHBpbmdzIjoiOzs7OztRQUtnQkEsTyxHQUFBQSxPOztBQUpoQjs7OztBQUlPLFNBQVNBLE9BQVQsQ0FBbUJDLE1BQW5CLEVBQTRCOztBQUVsQyxTQUFRQSxPQUFPQyxJQUFQLE9BQW1CLElBQTNCO0FBRUEiLCJmaWxlIjoiZXhoYXVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBFeGhhdXN0cyBhIHN0cmVhbS5cbiAqIEBwYXJhbSB7U3RyZWFtfSBzdHJlYW0gdGhlIHN0cmVhbSB0byByZWFkIGZyb21cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4aGF1c3QgKCBzdHJlYW0gKSB7XG5cblx0d2hpbGUgKCBzdHJlYW0ucmVhZCggKSAhPT0gbnVsbCApIDtcblxufVxuIl19