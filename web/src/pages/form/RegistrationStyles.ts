import styled from 'styled-components';

export const FormContainer = styled.form`
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

export const StyledTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border-radius: 20px;
  border-color: #afdaff;
`;

export const ErrorMessage = styled.p`
  color: red;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;
