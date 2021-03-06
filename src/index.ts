import * as seedrandom from 'seedrandom';
import rangestr from 'rangestr';

export type Chars = string | string[];

export type Options = {
	length?: number;
	chars?: Chars;
	seed?: string | number;
	parseRange?: boolean;
};

const defaultOptions: Options = {
	length: 64,
	chars: 'a-z0-9',
	seed: null,
	parseRange: true
};

function generate(options?: Options): string {
	const opts = options || {};

	const length = opts.length || defaultOptions.length;
	const parseRange = opts.parseRange !== undefined ? opts.parseRange : defaultOptions.parseRange;
	const chars = opts.chars
		? Array.isArray(opts.chars)
			? opts.chars
			: parseRange
				? rangestr(<string>opts.chars)
				: (<string>opts.chars).split('')
		: rangestr(<string>defaultOptions.chars);
	const seed = opts.seed || defaultOptions.seed;

	const random = seed ? seedrandom(<string>seed) : Math.random;

	let str = '';

	for (let i = 0; i < length; i++) {
		str += chars[Math.floor(random() * chars.length)];
	}

	return str;
}

function rndstr(): string;
function rndstr(options: Options): string;
function rndstr(chars: Chars): string;
function rndstr(length: number): string;
function rndstr(chars: Chars, length: number): string;
function rndstr(chars: Chars, length: number, seed: string | number): string;

function rndstr(x?: any, y?: any, z?: any): string {
	if (typeof x === 'undefined') {
		return generate();
	} else if (typeof x === 'number') {
		return generate({
			length: x
		});
	} else if (typeof x === 'string' || Array.isArray(x)) {
		if (typeof y === 'number') {
			if (typeof z === 'string' || typeof z === 'number') {
				return generate({
					chars: x,
					length: y,
					seed: z
				});
			} else {
				return generate({
					chars: x,
					length: y
				});
			}
		} else {
			return generate({
				chars: x
			});
		}
	} else {
		return generate(x);
	}
}

Object.defineProperty(rndstr, "default", { value: rndstr });

module.exports = rndstr;

export default rndstr;
