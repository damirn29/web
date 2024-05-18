import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import {
  FormContainer,
  StyledTitle,
  FormGroup,
  Label,
  Input,
  ErrorMessage,
  SubmitButton,
  ListContainer,
  ListItem
} from './LoginFormStyles';

interface IFormData {
  username: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [formItems, setFormItems] = useState<IFormData[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormData>();

  const onSubmit: SubmitHandler<IFormData> = (data) => {
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
