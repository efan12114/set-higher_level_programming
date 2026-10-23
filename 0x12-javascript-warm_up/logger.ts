/**
 * Logs a message prefixed with [YYYY-MM-DD HH:mm:ss LEVEL].
 * @param message The message string
 * @param level 'info' | 'warn' | 'error'
 */
export function logWithTimestamp(message: string, level: 'info' | 'warn' | 'error'): void {
	const date = new Date();
	const pad = (value: number): string => String(value).padStart(2, '0');
	const timestamp = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;

	console.log(`[${timestamp} ${level.toUpperCase()}] ${message}`);
}