const sieveOfEratosthenes = (upperLimit: number): ReadonlyArray<number> => {
  const primeList: number[] = []
  const isPrimeList: boolean[] = Array.from({length: upperLimit + 1}, () => true)

  for (let i = 2; i ** 2 <= upperLimit; i++) {
    if (isPrimeList[i]) {
      for (let x = 2 * i; x <= upperLimit; x += i) isPrimeList[x] = false
    }
  }

  isPrimeList.forEach((isPrime, index) => {
    if (index >= 2 && isPrime) primeList.push(index)
  })

  return primeList
}