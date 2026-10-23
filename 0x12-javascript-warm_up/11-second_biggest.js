#!/usr/bin/node

/**
 * Prints the second largest integer from the command-line arguments.
 *
 * If there are fewer than two numeric arguments, it prints 0.
 * The values are converted to numbers, sorted in descending order,
 * and the second element is printed.
 */
const args = process.argv.slice(2);

if (args.length <= 1) {
  console.log(0);
} else {
  const nums = args.map(Number).sort((a, b) => b - a);
  console.log(nums[1]);
}