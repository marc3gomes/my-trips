import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /leaflet/i
      })
    ).toBeInTheDocument()
  })
  it('Should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Igarassu',
      slug: 'igarassu',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    render(<Map places={[place]} />)

    expect(screen.getByTitle(/igarassu/i)).toBeInTheDocument()
  })
})
