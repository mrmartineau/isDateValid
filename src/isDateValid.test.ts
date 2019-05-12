import { isDateValid } from './isDateValid'

describe('Given a isDateValid function', () => {
  it('should return true for valid dates', () => {
    expect(isDateValid(2000, 1, 1)).toBe(true)
    expect(isDateValid(2000, 1, 1)).toBe(true)
    expect(isDateValid(2012, 2, 29)).toBe(true)
    expect(isDateValid(2012, 2, 29)).toBe(true)
    expect(isDateValid(2012, 11, 29)).toBe(true)
    expect(isDateValid(2012, 11, 30)).toBe(true)
    expect(isDateValid('2012', '11', '01')).toBe(true)
    expect(isDateValid('2012', '1', '01')).toBe(true)
    expect(
      isDateValid(parseInt('2012', 10), parseInt('11', 10), parseInt('30', 10))
    ).toBe(true)
  })

  it('should return false for invalid dates', () => {
    expect(isDateValid(2011, 2, 29)).toBe(false)
    expect(isDateValid('2011', '2', '29')).toBe(false)
    expect(isDateValid(2011, 1, 0)).toBe(false)
    expect(isDateValid(2011, -1, 29)).toBe(false)
    expect(isDateValid(2011, 12, 32)).toBe(false)
    expect(isDateValid(2011, 120, 32)).toBe(false)
    expect(isDateValid(2011, 11, 31)).toBe(false)
    expect(isDateValid(2011, 40, 60)).toBe(false)
    expect(
      isDateValid(parseInt('', 10), parseInt('', 10), parseInt('', 10))
    ).toBe(false)
  })
})
