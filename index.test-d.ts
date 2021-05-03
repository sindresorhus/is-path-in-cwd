import {expectType} from 'tsd';
import isPathInCwd from './index.js';

expectType<boolean>(isPathInCwd('unicorn'));
