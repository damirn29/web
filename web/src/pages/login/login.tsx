import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormWrapper = styled.div`
  width: 300px;
  text-align: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const LoginInput = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const LoginButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
`;

const Login: React.FC<{ handleAuthentication: () => void }> = ({ handleAuthentication }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAuthentication();
  };

  return (
    <Container>
      <FormWrapper>
        <h2>Форма авторизации</h2>
        <LoginForm onSubmit={handleSubmit}>
          <LoginInput type="text" placeholder="Имя пользователя" />
          <LoginInput type="password" placeholder="Пароль" />
          <LoginButton type="submit">Войти</LoginButton>
        </LoginForm>
      </FormWrapper>
    </Container>
  );
};

export default Login;
