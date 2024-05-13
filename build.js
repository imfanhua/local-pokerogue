import { readFileSync, writeFileSync } from 'fs';

// Fix local
{
	let source = readFileSync('./pokerogue/src/utils.ts', 'utf-8');
	source = source.replace(/export\sconst\sisLocal\s=([^;].)*;/g, 'export const isLocal = true;');
	writeFileSync('./pokerogue/src/utils.ts', source)
}

// Modify .env
{
	const addtion = readFileSync('./.env', 'utf-8')
	const content = readFileSync('./pokerogue/.env', 'utf-8');
	writeFileSync('./pokerogue/.env', `${content}\n${addtion}`)
}

// Copy version
{
	const version = JSON.parse(readFileSync('./pokerogue/package.json', 'utf-8'))["version"];
	writeFileSync('./src-tauri/tauri.conf.json', JSON.stringify(
		{
			...JSON.parse(readFileSync('./src-tauri/tauri.conf.json', 'utf-8')),
			...{
				"package": { version }
			}
		}
	));
}
