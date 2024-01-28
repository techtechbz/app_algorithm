const irreducibleList = (n: number, m: number): number => {
  if (n < m) [n, m] = [m, n]
  
  const contractionsList: number[] = []
  for (let i = 1; i ** 2 <= m; ++i) {
    if (m % i === 0) {
      contractionsList.push(i)
      contractionsList.push(m / i)
    }
  }

  const compareNumbers = (n: number, m: number): number => m - n
  contractionsList.sort(compareNumbers)
        
  for (const divisor of contractionsList) {
    if (n % divisor === 0) return divisor
  }

  return 1
}