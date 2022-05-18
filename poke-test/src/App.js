import { useEffect, useState } from "react";
import styled from "styled-components";
import { PokeCard } from "./components/PokeCard";
import { PaginationComponent } from "./components/PaginationComponent";
import { colors } from "./config/colors";


const PageContainer = styled.div`
display: flex;
height: 100vh;
width: 100%;
justify-content: center;
align-items: center;
background-color: ${colors.turquiosePrimary};
`;

const MainContentContainer = styled.div`
margin: auto;
height: 100%;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding: 16px;
`;


const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const API = "https://pokeapi.co/api/v2/pokemon/?limit=50";
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setData(data.results))
      .catch((err) => {
        setError(err);
        console.log(error);
      }).finally(() => {
        setIsLoading(false)
      });



  }, []);



  return (

    <PageContainer>


      <MainContentContainer>
        {isLoading ? (<h4 style={{ color: "white" }}>Loading...</h4>) :

          currentPosts.map((el, idx) => {
            return (
              <PokeCard
                key={idx}
                name={el.name}
                link={el.url}
              />
            )
          })
        }
      </MainContentContainer>
      <PaginationComponent
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}

      />
    </PageContainer>


  );
};

export default App;
