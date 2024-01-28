const primeSearchBruteForce = (upperLimit: number): ReadonlyArray<number> => {
  const primeList: number[] = []
  for (let i = 2; i <= upperLimit; ++i) {
    let isPrime = true
    for (let j = 2; j < i; ++j) {
      if (i % j == 0) isPrime = false
    }
    if (isPrime) primeList.push(i)
  }
  return primeList
}