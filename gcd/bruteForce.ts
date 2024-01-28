const gcdBruteForce = (n: number, m: number): number => {
  if (n < m) [n, m] = [m, n]
  for (let i = 0; i < m; ++i) {
    const a = m - i
    if (n % a == 0 && m % a == 0) return a
  }
  return 1
}