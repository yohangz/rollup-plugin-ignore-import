import { createFilter } from 'rollup-pluginutils';

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
  const include = options.include || options.extensions.map((ext) => `**/*${ext}`);
  const filter = createFilter(include, options.exclude || 'node_modules/**');

  return {
    transform(code, id) {
      if (!filter(id)) return;

      const body = (options.body || options.body === '') ? options.body : 'export default undefined;';

      return {
        code: body,
        map: null
      };
    }
  };
}
