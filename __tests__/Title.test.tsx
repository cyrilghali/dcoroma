import { render, screen } from '@testing-library/react'
import Title from '../components/Title'

describe('Title component', () => {
  it('renders the provided title', () => {
    render(<Title title="Hello" />)
    expect(screen.getByRole('heading', { name: 'Hello' })).toBeInTheDocument()
  })
})
