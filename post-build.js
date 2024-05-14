import { readFileSync, writeFileSync, renameSync } from 'fs';

// Inject fetch-polyfill.js
{
	const inject = readFileSync('./scripts/fetch-polyfill.js', 'utf-8');
	let source = readFileSync('./pokerogue/dist/index.html', 'utf-8');
	source = source.replace(/(\<script\>)/, `<script>\n${inject}`);
	writeFileSync('./pokerogue/dist/index.html', source);
}

// Fix tauri fallback issue
{
	renameSync('./pokerogue/dist/index.html', './pokerogue/dist/app.html');
}
