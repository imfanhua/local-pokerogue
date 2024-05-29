import { execSync } from 'child_process';

const hash = () => execSync('git rev-parse @:./pokerogue').toString().trim();

const old = hash();
execSync('git submodule update --init --recursive --remote').toString();
if (hash() === old) throw 'updated';
