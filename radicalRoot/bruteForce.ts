const radicalRootBruteForce = (exponents: number, radicand: number, significantDigits: number): 
number => {
  let floatingRoot = 1
  const integerDigits = radicand.toString().split('.')[0].length
  for (let integerPlaces = -integerDigits; integerPlaces <= significantDigits; ++integerPlaces) {
    for (let j = 1; j <= 9; ++j) {
      const expectedInteger = floatingRoot + j * 0.1 ** integerPlaces
      if (expectedInteger ** exponents == radicand) {
        floatingRoot = expectedInteger
        break
      } else if (expectedInteger ** exponents > radicand) {
        floatingRoot += 0.1 ** integerPlaces * (j - 1)
        break
      }
      if (j == 9) floatingRoot += 0.1 ** integerPlaces * 9
    }
  }
  return floatingRoot
}