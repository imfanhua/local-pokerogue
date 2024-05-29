import { hash, hashFile } from './tools.js';
import { readFileSync, writeFileSync } from 'fs';

// Release body
{
	const target = './package.json';
	const args = {
		'HASH': hash(),
		'MD5': hashFile('md5', target),
		'SHA1': hashFile('sha1', target),
		'SHA256': hashFile('sha256', target),
	};
	let body = readFileSync('./src-tauri/target/release/pokerogue.exe', 'utf-8');
	for (const key in args) body = body.replace(`{{${key}}}`, args[key]);
	writeFileSync('./body.md', body);
}
