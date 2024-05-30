import { hash } from './tools.js';
import { readFileSync, writeFileSync } from 'fs';

let old = '';
try {
    old = readFileSync('./MOD-HASH', 'utf-8');
} catch {}
const now = hash();
if (now === old) throw 'updated';
writeFileSync('./MOD-HASH', now);
