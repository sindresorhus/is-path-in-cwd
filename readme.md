# is-path-in-cwd

> Check if a path is in the [current working directory](https://en.wikipedia.org/wiki/Working_directory)

## Install

```
$ npm install is-path-in-cwd
```

## Usage

```js
import isPathInCwd from 'is-path-in-cwd';

isPathInCwd('unicorn');
//=> true

isPathInCwd('../rainbow');
//=> false

isPathInCwd('.');
//=> false
```

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-is-path-in-cwd?utm_source=npm-is-path-in-cwd&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
