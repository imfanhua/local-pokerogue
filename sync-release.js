import { hash } from './tools.js';
import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';

let old = '';
try {
    old = readFileSync('./MOD-HASH', 'utf-8');
} catch {}
execSync('git submodule update --init --recursive');
const now = hash();
if (now === old) throw 'updated';
writeFileSync('./MOD-HASH', now);
