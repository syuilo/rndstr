rndstr.js
-------------------------------

[![Greenkeeper badge](https://badges.greenkeeper.io/syuilo/rndstr.svg)](https://greenkeeper.io/)

[![][npm-badge]][npm-link]
[![][mit-badge]][mit]

Generate random string

## Install
``` shell
$ npm install rndstr --save
```

## Usage
``` javascript
rndstr(opts)
```

## Example
``` javascript
const rndstr = require('rndstr');

rndstr(); // ujvb17u5vxgqsh41mgwhlo3lfjrbz1xy2oi9zgxk7vh04r5p3cfc121fo8bkoj2j
rndstr(); // 9rx8ghughdlihe35l7uzld4f3gvwa0wm0cb21ousiiit7q2uvrixo331zcdkb8kj
rndstr(); // q1a334oio0t6sc5yqb2yjqmuym22acthfzhsnwrr67orp5hvjkj22r9fiehonly9

// === Use custom options ===
rndstr({length: 8, chars: '0-9'}); // 51048708
rndstr({length: 8, chars: '0-9'}); // 80987908
rndstr({length: 8, chars: '0-9'}); // 72556885

// === Specify seed ===
rndstr({seed: 'himawari'}); // Always m8ucpxibnp98qd8791hv98h1knfdypimztyfo3agu7gj757uyicjdea8wwyrpwab
rndstr({seed: 'sakurako'}); // Always kybaq23mek8580s246kjkngupc9zsuyjuqgh6jkbale5btvtzssxjn2g6nienuyq

// === Enable/Disable range-syntax parser ===
rndstr({length: 16, chars: 'a-z', parseRange: true}); // sbywqwriyielxske
rndstr({length: 16, chars: 'a-z', parseRange: false}); // az--a--zaa-a-aa-
```

## Options
| Property       | Type                   | Description                                                | Default    |
| :------------- | :--------------------- | :--------------------------------------------------------- | :--------- |
| **length**     | *number*               | The length of your resulting string                        | `64`       |
| **chars**      | *string* or *string[]* | The chars you want to include                              | `'a-z0-9'` |
| **seed**       | *string* or *number*   | The seed value to be used to generate                      | `null`     |
| **parseRange** | *boolean*              | Whether a given **chars** be interpreted as a range-syntax | `true`     |

## On TypeScript
Type definition are bundled.
``` typescript
import rndstr from 'rndstr';
```

## License
[MIT](LICENSE)

[npm-link]:  https://www.npmjs.com/package/rndstr
[npm-badge]: https://img.shields.io/npm/v/rndstr.svg?style=flat-square
[mit]:       http://opensource.org/licenses/MIT
[mit-badge]: https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
