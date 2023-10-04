import styled from "styled-components";


export const ContainerHome = styled.div`
    
    background: black;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const Header = styled.div`
margin-top: 30px;
`;

export const Footer = styled.div`
position: relative;
width: 100%;
bottom: 0;
left: 0;
`;

export const TextFooter = styled.div`
padding-bottom: 20px;
text-align: center;
color: #fff;
z-index: 2;
`;

export const Image1 = styled.img`
    top: 0;
    left: 0;
    width: 100%;
    z-index: 0;
    position: absolute;
`;

export const Image2 = styled.img`
    transform: rotate(180deg);
    bottom: 0;
    left: 0;
    width: 100%;
    position: absolute;
    z-index: 0;

`;

export const ImagePato = styled.img`
    position: absolute;    
    width: 150px;
    bottom: 0;
    right: 10px;
    z-index: 1;
   
`;

export const ImageLogo = styled.img`
    width: 8rem;
    height: 6rem;
    flex-shrink: 0;
    z-index: 1;
`;

export const ContainerQuad = styled.div`
    z-index: 1;
    margin: 25px;
    width: 75.9375rem;
    height: 100%;
    border: 0.5px solid white;
    border-radius: 0.90rem;
    background: #18181A;
    color: #fff;
    padding: 30px 0px;
`;