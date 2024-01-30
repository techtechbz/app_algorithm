const binarySearch = (exponents: number, radicand: number, significantDigits: number): 
number => {
  let upper = radicand
  let lower = 0
  const tolerance = 0.1 ** (significantDigits + 1)
  let floatingRoot = 1
  let previousResult = 0
  const maxHandleTimes = 1000
  
  for (let i = 1; i <= maxHandleTimes; i++) {
    floatingRoot = (lower + upper) / 2
    if (floatingRoot ** exponents >= radicand) {
      upper = floatingRoot
    } else {
      lower = floatingRoot
    }
    if (Math.abs(floatingRoot - previousResult) < tolerance) {
      break
    }
    previousResult = floatingRoot
  }
  return floatingRoot
}