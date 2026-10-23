/**
 * Recursively merges the properties of source into target.
 * Nested objects are merged, while arrays and primitive values replace
 * the corresponding values in target.
 *
 * @param {Object} target Object to update.
 * @param {Object} source Object whose properties are merged into target.
 * @returns {Object} The updated target object.
 */
function deepMerge(target, source) {
  for (const key in source) {
    if (source[key] instanceof Object && !Array.isArray(source[key])) {
      if (!target[key]) target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

module.exports = deepMerge;