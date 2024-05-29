import { execSync } from 'child_process';
import { createHash } from 'crypto';
import { readFileSync } from 'fs';

export const hash = () => execSync('git -C ./pokerogue rev-parse HEAD').toString().trim();
export const hashFile = (format, file) => createHash(format).update(readFileSync(file)).digest('hex').toString().toUpperCase();
