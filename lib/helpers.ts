/**
 * Helper functions for common operations
 */

/**
 * Formats a date as a string in the format "Month Day, Year"
 * @param date - The date to format
 * @returns A formatted date string
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Truncates a string to a specified length and adds ellipsis if needed
 * @param str - The string to truncate
 * @param length - The maximum length of the string
 * @returns The truncated string
 */
export function truncateString(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + '...';
}

/**
 * Generates a random ID
 * @returns A random string ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

/**
 * Checks if a value is empty (null, undefined, empty string, or empty array)
 * @param value - The value to check
 * @returns True if the value is empty, false otherwise
 */
export function isEmpty(value: any): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string') return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}

/**
 * Delays execution for a specified number of milliseconds
 * @param ms - The number of milliseconds to delay
 * @returns A promise that resolves after the specified delay
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
