export function swapElementWithPrevious<T>(arr: T[], index: number): T[] {
  const isIndexInvalid = index < 0 || index > arr.length - 1
  if (isIndexInvalid) return arr

  const isItFirstElement = index === 0
  if (isItFirstElement) return arr

  const previousElement = arr[index - 1]
  arr[index - 1] = arr[index]
  arr[index] = previousElement

  return arr
}

export function swapElementWithNext<T>(arr: T[], index: number): T[] {
  const isIndexInvalid = index < 0 || index > arr.length - 1
  if (isIndexInvalid) return arr

  const isItLastElement = index === arr.length - 1
  if (isItLastElement) return arr

  const nextElement = arr[index + 1]
  arr[index + 1] = arr[index]
  arr[index] = nextElement

  return arr
}