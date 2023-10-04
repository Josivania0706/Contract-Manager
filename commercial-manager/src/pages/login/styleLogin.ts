import styled from 'styled-components';


export const LoginContainer = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000000;

`;

export const LoginForm = styled.form`
  display: flex;
  width: 20rem;
  height: 18rem;
  background-color: rgba(255, 255, 255);
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #ccc;
  padding: 25px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  @media(max-width: 768px){
    width: 18rem;
    
  }
  
`;

export const InputField = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 12px;
  border: 1px solid #000;
  border-radius: 5px;
`;

export const LoginButton = styled.button`
  background-color: #191919;
  color: #fff;
  border: none;
  width: 21.6rem;
  border-radius: 5px;
  padding: 12px 20px;
  cursor: pointer;

  @media(max-width: 768px){
    width: 20rem;
  }
 &:hover {
    background-color: #000;
  }
`;

export const Image = styled.img`
  width: 5rem;
`;