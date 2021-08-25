import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, React NextJS, Styled-Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo-react.png"
      alt="Imagem de um atomo simbolo do react"
      height="100px"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/Minato_Base.png"
      alt="Imagem Minato namikase personagem ficticio do anime japones naruto "
      height="400px"
    />
  </S.Wrapper>
)
export default Main
