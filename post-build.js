import { readFileSync, writeFileSync, renameSync } from 'fs';

// Fix tauri fallback issue
{
	renameSync('./pokerogue/dist/index.html', './pokerogue/dist/app.html')
}
