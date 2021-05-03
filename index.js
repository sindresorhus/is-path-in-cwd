import isPathInside from 'is-path-inside';

export default function isPathInCwd(path) {
	return isPathInside(path, process.cwd());
}
