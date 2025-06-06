import { formatDate } from '../utils'

describe('formatDate', () => {
  it('formats a date string to US locale', () => {
    const result = formatDate('2024-01-15T00:00:00Z')
    expect(result).toBe('January 15, 2024')
  })
})
