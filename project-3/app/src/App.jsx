import Styled from "styled-components";

const App = () => {
  return <Container>
      <TopContainer>
        <div className="logo">
  <img src="/public/foody logo.png" alt="" />
        </div>

        <div className="serch">
          <input type="text" placeholder="Serach food" />
        </div>
        <div className="nav">
          <ul type='none'>
            <li>All</li>
            <li>Break Fast</li>
            <li>Launch</li>
            <li>Dinner</li>
          </ul>
        </div>
      </TopContainer>
  </Container>;
};

export default App;

const Container = Styled.div`
  max-width: 1200px

`;
const TopContainer = Styled.div``;