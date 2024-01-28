const newtonsAlgorithm = (exponents: number, radicand: number, significantDigits: number): 
{floatingRoot: number, loopTimes: number, calculateProcess: number[]} => {
  const calculateProcess: Array<number> = []
  const tolerance = 0.1 ** (significantDigits + 1)
  let floatingRoot = 1
  let previousResult = 0
  
  const newtonsHandle = (root: number) => {
    const x = root
    const y = root ** exponents
    
    const slope = exponents * (x ** (exponents - 1))
    const intercept = y - slope * x
    
    return (radicand - intercept) / slope
  }

  let breakTimes = 0
  const maxHandleTimes = 1000
  for (let i = 1; i <= maxHandleTimes; i++) {
    floatingRoot = newtonsHandle(floatingRoot)
    if (Number.isNaN(floatingRoot)) new Error('計算に失敗しました。他のアルゴリズムを試してください。')
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