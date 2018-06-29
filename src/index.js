/**
 *
 * @param options
 * @return {*}
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