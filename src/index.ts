import * as seedrandom from 'seedrandom';

type Options = {
	length?: number;
	chars?: string | string[];
	seed?: string;
};

const defaultOptions: Options = {
	length: 64,
	chars: 'abcdefghijklmnopqrstuvwxyz0123456789',
	seed: null
};

const _ = (options?: Options) => {
	const opts = options || {};

	const length = opts.length || defaultOptions.length;
	const chars = opts.chars
		? Array.isArray(opts.chars)
			? opts.chars
			: (<string>opts.chars).split('')
		: (<string>defaultOptions.chars).split('');
	const seed = opts.seed || defaultOptions.seed;

	const random = seed ? seedrandom(seed) : Math.random;

	let str = '';

	for (let i = 0; i < length; i++) {
		str += chars[Math.floor(random() * chars.length)];
	}

	return str;
};

Object.defineProperty(_, "default", { value: _ });

module.exports = _;

export default _;
