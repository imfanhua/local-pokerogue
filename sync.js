import { execSync } from 'child_process';
import { hash } from './tools.js';

execSync('git submodule update --init --recursive');
const old = hash();
execSync('git submodule update --init --recursive --remote');
if (hash() === old) throw 'updated';
