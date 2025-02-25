import { DATA_PATH } from '$env/static/private';
import { type Programs } from './program';
export async function load(): Promise<Programs> {
	const module = await import(/* @vite-ignore */ DATA_PATH);
	return module.default;
}
