import { Plugin } from 'rollup';

export interface noopImportOptions {
    body?: string;
    exclude?: Array<string | RegExp> | string | RegExp | null
    extensions?: Array<string>
    include?: Array<string | RegExp> | string | RegExp | null
}

export default function noopImport(options: noopImportOptions): Plugin;
