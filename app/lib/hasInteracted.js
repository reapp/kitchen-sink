var state;

module.exports = function(val) {
  if (val)
    state = val;

  return state;
}