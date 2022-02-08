import Url from 'url';
import Path from 'path';
import Filesystem from 'fs-extra';

import camelcase from 'camelcase';

const scriptsDir = Path.dirname(Url.fileURLToPath(import.meta.url));
const currentDir = Path.resolve(scriptsDir, '..');

const sourceIconsDir = Path.resolve(currentDir, 'icons');
const targetIconsDir = Path.resolve(currentDir, 'source', 'icons');
const indexFilePath = Path.resolve(currentDir, 'source', 'index.js');
const typesFilePath = Path.resolve(currentDir, 'source', 'index.d.ts');

await Filesystem.remove(targetIconsDir);
await Filesystem.remove(indexFilePath);
await Filesystem.remove(typesFilePath);

await Filesystem.ensureDir(sourceIconsDir);
await Filesystem.ensureDir(targetIconsDir);

// Transform all pro icons to react components
let iconFilenames = await Filesystem.readdir(sourceIconsDir);
for (let filename of iconFilenames) {
	let filePath = Path.resolve(sourceIconsDir, filename);

	if (filename === '3d_glasses.png') filename = 'glasses_3d.png';
	if (filename === '32_bit.png') filename = 'bit_32.png';
	if (filename === '64_bit.png') filename = 'bit_64.png';

	let content = await Filesystem.readFile(filePath, 'binary');
	let contentBase64 = Buffer.from(content, 'binary').toString('base64');
	let componentName = camelcase(filename.replace(/\.png$/, ''), { pascalCase: true }) + 'Icon';
	let componentFilename = filename.replace(/\.png$/, '.jsx');
	let componentFilePath = Path.resolve(targetIconsDir, componentFilename);
	let componentDescription = camelcase(filename.replace(/\.png$/, ''), { pascalCase: true });

	let component = `import * as React from "react"; 
	
export default function ${componentName}(props) {
	return <img width={32} height={32} src="data:image/png;base64,${contentBase64}" alt="${componentDescription}" data-type="icon fatcow-icon" {...props} />
}`;

	let componentType = `export function ${componentName}(props: any): any;\n`;
	let componentExport = `export { default as ${componentName} } from './icons/${componentFilename}';\n`;

	await Filesystem.writeFile(componentFilePath, component);
	await Filesystem.writeFile(typesFilePath, componentType, { flag: 'a' });
	await Filesystem.writeFile(indexFilePath, componentExport, { flag: 'a' });
}
