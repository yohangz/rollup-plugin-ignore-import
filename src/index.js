/**
 * Constructs a Rollup plugin to ignore imports.
 *
 * @param {Object} options
 * @param {array} options.extensions Import extension collection to ignore.
 *
 * @return {Object} The rollup plugin object, as documented on the wiki:
 *   https://github.com/rollup/rollup/wiki/Plugins#creating-plugins
 */
export default function noopImport(options = {}) {
  return {
    transform(code, id) {
      if (!options.extensions.some(ext => id.endsWith(ext))) {
        return;
      }

      const body = 'export default undefined;';

      return {
        code: body,
        map: null
      };
    }
  };
}