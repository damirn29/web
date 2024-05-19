import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  FormContainer,
  StyledTitle,
  FormGroup,
  Label,
  Input,
  ErrorMessage,
  SubmitButton
} from './RegistrationStyles';


interface IFormData {
  username: string;
  email: string;
  password: string;
}

const Registration: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const onSubmit: SubmitHandler<IFormData> = (data) => {
    console.log(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <StyledTitle>Регистрация</StyledTitle>
      <FormGroup>
        <Label>Логин:</Label>
        <Input
          type="text"
          {...register("username", {
            required: "Обязательное поле",
            minLength: {
              value: 3,
              message: "Длина больше 3 символов",
            },
          })}
        />
        {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
      </FormGroup>
      <FormGroup>
        <Label>Email:</Label>
        <Input
          type="email"
          {...register("email", {
            required: "Обязательное поле",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Некорректный email",
            },
          })}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </FormGroup>
      <FormGroup>
        <Label>Пароль:</Label>
        <Input
          type="password"
          {...register("password", {
            required: "Обязательное поле",
            minLength: {
              value: 6,
              message: "Длина пароля больше 6 символов",
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
