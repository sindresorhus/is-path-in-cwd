/**
Check if a path is in the [current working directory](https://en.wikipedia.org/wiki/Working_directory).

@example
```
import isPathInCwd from 'is-path-in-cwd';

isPathInCwd('unicorn');
//=> true

isPathInCwd('../rainbow');
//=> false

isPathInCwd('.');
//=> false
```
*/
export default function isPathInCwd(path: string): boolean;
