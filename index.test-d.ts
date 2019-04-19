import {expectType} from 'tsd';
import isPathInCwd = require('.');

expectType<boolean>(isPathInCwd('unicorn'));
