import styled from "styled-components";
import { colors } from "../config/colors";


const PaginateContainer = styled.div`
display: flex;
position: fixed;
flex-wrap: wrap;
bottom: 10px;
height: 50px;
justify-content: center;
padding: 5px 10px;
align-items: center;
max-width: 420px;
border-radius: 10px;
`;

const PageNumWrapper = styled.div`
border-radius: 5px;
width: 45px;
justify-content: center;
align-items: center;
background-color: ${colors.turquioseSecondary};
margin: 5px;
padding: 10px;
cursor: pointer;
&:hover {
    opacity: 0.5;
    transition: all 0.3s ease-in-out;
}
`;


const PageNum = styled.a`
color: white;
font-weight: 500;
text-decoration: none;
font-size: 12px;
padding: 5px 5px 6px 8px;
margin: auto;
border-radius: 100%;

`;




export const PaginationComponent = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <PaginateContainer>
            {pageNumbers.map(number => (
                <ul style={{ listStyleType: "none" }}>
                    <li>
                        <PageNumWrapper>
                            <PageNum key={number} onClick={() => paginate(number)} href="#">{number}</PageNum>
                        </PageNumWrapper>
                    </li>
                </ul>
            ))}
        </PaginateContainer>
    )
}