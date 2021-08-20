/** floating point number precision check */
function epsilonEqual(n1: number, n2: number): boolean {
  return Math.abs(n1 - n2) <= Number.EPSILON;
}
