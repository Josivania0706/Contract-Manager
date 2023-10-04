import { useState } from "react";
import { InputField, LoginButton, LoginContainer, LoginForm, Image } from "./styleLogin";
import imagemlogo from '../../assets/iconesInclude/Logomarca - Preto.png';

export const Login: React.FC = () => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para autenticar o usuário
  };

  return (
    <LoginContainer>
 
     <LoginForm onSubmit={handleLogin}>
        <Image src={imagemlogo}/>
        <InputField
          type="text"
          placeholder="Nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton type="submit">Entrar</LoginButton>
      </LoginForm>
  
    </LoginContainer>
  );
};
