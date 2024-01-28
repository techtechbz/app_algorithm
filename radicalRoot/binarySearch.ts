const binarySearch = (exponents: number, radicand: number, significantDigits: number): 
{floatingRoot: number, loopTimes: number, calculateProcess: number[]} => {
  let upper = radicand
  let lower = 0
  const tolerance = 0.1 ** (significantDigits + 1)
  let floatingRoot = 1
  let previousResult = 0
  const maxHandleTimes = 1000
  let breakTimes = 0
  const calculateProcess: number[] = []
  
  for (let i = 1; i <= maxHandleTimes; i++) {
    floatingRoot = (lower + upper) / 2
    if (floatingRoot ** exponents >= radicand) {
      upper = floatingRoot
    } else {
      lower = floatingRoot
    }
    if (Math.abs(floatingRoot - previousResult) < tolerance) {
      breakTimes = i - 1
      break
    }
    if (i <= 10) calculateProcess.push(floatingRoot)
    previousResult = floatingRoot
  }
  const loopTimes = breakTimes == 0 ? maxHandleTimes : breakTimes
  return {floatingRoot, loopTimes, calculateProcess}
}