import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());

export default {
	input: 'src/index.js',
	output: [
		{ dir: 'dist', 'format': 'es', entryFileNames: pkg.module.replace('dist/', '') },
		{ dir: 'dist', 'format': 'amd', name, entryFileNames: pkg.main.replace('dist/', '') }
	],
	plugins: [
		svelte(),
		resolve()
	]
};
