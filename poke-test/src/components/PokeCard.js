import styled from "styled-components";
import { colors } from "../config/colors";



const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
padding-top: 20px;;
align-items: center;
height: 400px;
width: 250px;
margin: 5px;
flex-grow: 1 1;
border-radius: 5px;
border: 1px solid rgba(0, 0, 0, 0.1);
background-color: ${colors.turquioseSecondary};
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

`;

const CardHeader = styled.h3`
display: flex;
color: white;
font-size: 20px;
text-transform: capitalize;
`;

const CardLink = styled.a`
display: flex;
color: white;
text-decoration: none;
`;

const CardImage = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 100%;
height: 170px;
width: 170px;
background-color: white;
box-shadow: rgba(107, 252, 46, 0.15) 0px 48px 100px 0px;

&:hover {
opacity: 0.9;
}

`;



export const PokeCard = ({ name, link }) => {
    return (
        <CardContainer>
            <CardImage>
                <p>image here</p>
            </CardImage>
            <CardHeader>
                {name}
            </CardHeader>
            <CardLink href={link}>Info




            </CardLink>
        </CardContainer>
    )
};