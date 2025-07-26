import styled from "styled-components";
import { BASE_URL, Button } from "../../App";
const SearchResult = ({ data }) => {
  return (
   <FoodCardContainer>
  <FoodCards>
    {data?.map(({name, text, image, price}) => (
      <FoodCard key={name}>

        <div className="food_image">
          <img src={BASE_URL + image} alt={name} />
        </div>

        <div className="food_info">

            <div className="info">
                <h3>{name}</h3>
                <p>{text}</p>
            </div>

            <Button>${price.toFixed(2)}</Button>
        </div>
      </FoodCard>
    ))}
  </FoodCards>
</FoodCardContainer>
  );
};
export default SearchResult;

const FoodCardContainer = styled.section`
  height: calc(100vh - 210px);
  background-image: url("/bg.png");
  background-size: cover;
`;

const FoodCards = styled.div``;
const FoodCard = styled.div`

  width: 340px;
  height:167px;
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  background: blur;
  border: 1px solid #fff;
  display: flex;
padding: 8px;

.food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;

    h3{
    margin-top: 8px;
    font-size: 16px;
    font-weight: 500;
    }

    p{
        margin-top: 4px;
        font-size: 12px;
    }
        button{
        font-size: 12px;
        }
    }

`;
