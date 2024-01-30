const newtonsAlgorithm = (exponents: number, radicand: number, significantDigits: number): 
number => {
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

  const maxHandleTimes = 1000
  for (let i = 1; i <= maxHandleTimes; i++) {
    floatingRoot = newtonsHandle(floatingRoot)
    if (Number.isNaN(floatingRoot)) throw new Error('計算に失敗しました。他のアルゴリズムを試してください。')
    if (Math.abs(floatingRoot - previousResult) < tolerance) {
      break
    }
    previousResult = floatingRoot
  }
  return floatingRoot
}