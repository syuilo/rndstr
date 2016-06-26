type Options = {
	length?: number;
	chars?: string | string[];
};

const defaultOptions = {
	length: 64,
	chars: 'abcdefghijklmnopqrstuvwxyz0123456789'
};

const _ = (options?: Options) => {
	const opts = options || {};

	const length = opts.length || defaultOptions.length;
	const chars = opts.chars
		? Array.isArray(opts.chars)
			? opts.chars
			: (<string>opts.chars).split('')
		: defaultOptions.chars.split('');

	let str = '';

	for (let i = 0; i < length; i++) {
		str += chars[Math.floor(Math.random() * chars.length)];
	}

	return str;
};

Object.defineProperty(_, "default", { value: _ });

module.exports = _;

export default _;
