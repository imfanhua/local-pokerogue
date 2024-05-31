import { hash, hashFile } from './tools.js';
import { readFileSync, writeFileSync } from 'fs';

// Release body
{
	const target = './src-tauri/target/release/pokerogue.exe';
	const args = {
		'HASH': hash(),
		'MD5': hashFile('md5', target),
		'SHA1': hashFile('sha1', target),
		'SHA256': hashFile('sha256', target),
	};
	let body = readFileSync('./body-template.md', 'utf-8');
	for (const key in args) body = body.replace(`{{${key}}}`, args[key]);
	writeFileSync('./body.md', body);
}
