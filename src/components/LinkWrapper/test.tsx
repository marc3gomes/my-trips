import { render, screen } from '@testing-library/react'
import LinkWarapper from '.'

describe('<Link />', () => {
  it('should render link and children', () => {
    render(<LinkWarapper href="/my-link">Anything</LinkWarapper>)

    const children = screen.getByText(/anything/i)

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/my-link')
  })
})
