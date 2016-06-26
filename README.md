rndstr
-------------------------------

[![][npm-badge]][npm-link]
[![][mit-badge]][mit]

Generate random string

## Install
``` shell
$ npm install rndstr --save
```

## Example
``` javascript
const rndstr = require('rndstr');

rndstr(); // ujvb17u5vxgqsh41mgwhlo3lfjrbz1xy2oi9zgxk7vh04r5p3cfc121fo8bkoj2j
rndstr(); // 9rx8ghughdlihe35l7uzld4f3gvwa0wm0cb21ousiiit7q2uvrixo331zcdkb8kj
rndstr(); // q1a334oio0t6sc5yqb2yjqmuym22acthfzhsnwrr67orp5hvjkj22r9fiehonly9
```

## Options
| Property   | Type                   | Description                         | Default                                  |
| :--------- | :--------------------- | :---------------------------------- | :--------------------------------------- |
| **length** | *number*               | The length of your resulting string | `8`                                      |
| **chars**  | *string* or *string[]* | The chars you want to include       | `'abcdefghijklmnopqrstuvwxyz0123456789'` |

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
