import { useState, useEffect } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResults/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


useEffect(() => {

  const fetchFoodData = async () => {
    setLoading(true);

    try {
      const response = await fetch(BASE_URL);

      const json = await response.json();
      setData(json);
      setLoading(false);

    } 
    catch (error) {
      setError("Unable to fetch data");
    }
  };
    fetchFoodData();  
  }, []);


  // Show loading or error message
  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/public/foody logo.png" alt="Logo" />
        </div>

        <div className="search">
          <input type="text" placeholder="Search food" />
        </div>
      </TopContainer>

      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>

      <SearchResult data = {data}/>

    </Container>
  );
};

export default App;

// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;

  .search {
    input {
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      background-color: transparent;
    }
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
`;
