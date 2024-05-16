import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type FormData = {
  username: string;
  password: string;
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  margin-top: 5%;
  border: solid 1px;
  border-radius: 30px;
  padding: 50px;
  background-color: #f8f9fa;
`;

const StyledTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border-radius: 20px;
  border-color: #afdaff;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const LoginForm: React.FC = () => {
  const [formItems, setFormItems] = useState<FormData[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setFormItems([...formItems, data]);
    reset();
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <StyledTitle>Авторизация</StyledTitle>
      <FormGroup>
        <Label>Логин:</Label>
        <Input
          type="text"
          {...register('username', {
            required: 'Обязательное поле',
            minLength: {
              value: 3,
              message: 'Длина больше 3 символов',
            },
          })}
        />
        {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
      </FormGroup>
      <FormGroup>
        <Label>Пароль:</Label>
        <Input
          type="password"
          {...register('password', {
            required: 'Обязательное поле',
            minLength: {
              value: 6,
              message: 'Длина пароля больше 6 символов',
            },
          })}
        />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
      </FormGroup>
      <SubmitButton type="submit">Войти</SubmitButton>

      <div>
        Нет аккаунта? <Link to="/registration">Зарегистрируйтесь</Link>
      </div>

      <ListContainer>
        {formItems.map((item, index) => (
          <ListItem key={index}>
            <strong>Логин:</strong> {item.username}, <strong>Пароль:</strong> {item.password}
          </ListItem>
        ))}
      </ListContainer>
    </FormContainer>
  );
};

export default LoginForm;
