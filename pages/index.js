import styled from 'styled-components'

const Box = styled.div`
  background: #FFFFFF;
  border-radius: 8px;
  padding: 16px;
  /* CSS Pré-Pronto */
  margin-bottom: 10px;
  .boxLink {
    font-size: 14px;
    color: #2E7BB4;
    text-decoration: none;
    font-weight: 800;
  }
  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #333333;
    margin-bottom: 20px;
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #ECF2FA;
  }
  input {
    width: 100%;
    background-color: #F4F4F4;
    color: #333333;
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 10000px;
    ::placeholder {
      color: #333333;
      opacity: 1;
    }
  }
  button {
    border: 0;
    padding: 8px 12px;
    color: #FFFFFF;
    border-radius: 10000px;
    background-color: #6F92BB;
  }
`;

const MainGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  padding: 16px;
  margin: 0 auto;
  max-width: 500px;
  width: 100%;

  @media(min-width: 860px) {
    grid-template-areas: "ProfileArea WelcomeArea RelationArea";
    grid-template-columns: 160px 1fr 312px;
  }
`

export default function Home() {
  return (
    <MainGrid>
      <div className="ProfileArea" style={{ gridArea: 'ProfileArea' }}>
        <Box>
          <img src="https://github.com/gabrielHidro.png" />
        </Box>
      </div>
      <div className="WelcomeArea" style={{ gridArea: 'WelcomeArea' }}>
        <Box>
          imagem
        </Box>
        <Box>
          imagem
        </Box>
      </div>
      <div className="RelationArea" style={{ gridArea: 'RelationArea' }}>
        <Box>
          imagem
        </Box>
        <Box>
          imagem
        </Box>
      </div>
    </MainGrid>
  )
}
