import { env } from '$env/dynamic/private';
import { type Programs } from './program';
import { readFile } from 'fs/promises';
export async function load(): Promise<Programs> {
	return JSON.parse(await readFile(env.DATA_PATH, 'utf-8'));
}
