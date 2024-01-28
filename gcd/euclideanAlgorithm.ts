const recursiveEuclidean = (n: number, m: number): number => {
  if (m == 0) return n
  if (n < m) [n, m] = [m, n]
  return recursiveEuclidean(m, n % m)
}

