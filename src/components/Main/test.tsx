import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the hediing', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot() // esse cara é pra gerar o snapshot
  })

  it('should render the color correclty', () => {
    const { container } = render(<Main />)
    //verifica o estilo que está no componente
    expect(container.firstChild).toHaveStyle({
      'background-color': '#06092b'
    })
  })
})
