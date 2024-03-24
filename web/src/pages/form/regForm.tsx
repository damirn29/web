import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';

type FormData = {
  username: string;
  email: string;
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

const Registration: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <StyledTitle>Регистрация</StyledTitle>
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
        <Label>Email:</Label>
        <Input
          type="email"
          {...register('email', {
            required: 'Обязательное поле',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Некорректный email',
            },
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
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
      <SubmitButton type="submit">Зарегистрироваться</SubmitButton>
    </FormContainer>
  );
};

export default Registration;
