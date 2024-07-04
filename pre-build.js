import { hash } from './tools.js';
import { readFileSync, writeFileSync } from 'fs';

// Fix isLocal
{
	let source = readFileSync('./pokerogue/src/utils.ts', 'utf-8');
	const start = source.indexOf('export const isLocal =');
	if (start === -1) throw 'Not found!';
	const end = source.indexOf(';', start);
	if (end === -1) throw 'Not found!';
	source = source.replace(source.substring(start, end + 1), 'export const isLocal = true;');
	writeFileSync('./pokerogue/src/utils.ts', source);

}

// Modify .env
{
	const addtion = readFileSync('./.env', 'utf-8')
	const content = readFileSync('./pokerogue/.env.production', 'utf-8');
	writeFileSync('./pokerogue/.env.production', `${content}\n${addtion}`);
}

// Copy version
{
	const version = JSON.parse(readFileSync('./package.json', 'utf-8'))["version"];
	const pokerogue = JSON.parse(readFileSync('./pokerogue/package.json', 'utf-8'))["version"];
	const game = `v${pokerogue}-${hash().substring(0, 7)}`;

	writeFileSync('./VERSION', `v${version}-${game}`);

	let config = {
		...JSON.parse(readFileSync('./src-tauri/tauri.conf.json', 'utf-8')),
		...{
			"package": { version }
		}
	};
	config['tauri']['windows'][0]['title'] += ` ${game} [v${version}]`;
	writeFileSync('./src-tauri/tauri.conf.json', JSON.stringify(config));
}
