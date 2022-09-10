import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colors = {
  border: "#0075FF",
  error: "#bb2929",
  success: "#1ed12d",
};

const Forms = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
  gap: 20px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

const Label = styled.label`
  display: block;
  font-weight: 700;
  padding: 10px;
  min-heigth: 40px;
  cursor: pointer;
`;

const Input = styled.input`
    width=100%;
    background: #fff;
    border-radius: 3px;
    height:35px;
    line-height: 35px;
    padding: 0 40px 0 10px;
    transition : all 0.3s;
    border: 3px solid transparent;

    &:focus{
      border: 3px solid ${colors.border};
      outline: none;
      box-shadow: 3px 0px 30px rgba(163,163,163,0.4);
    }
`;

const IconsValidation = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  bottom: 14px;
  z-index= 100;
  font-size: 16px;
  opacity: 0;
`;

const GroupInput = styled.div`
  position: relative;
  z-index: 90;
`;

const ErrorsForms = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  color: ${colors.error};
  display: none;
`;

const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 2;
`;

const ButtonCreate = styled.button`
  height: 35px;
  line-height: 35px;
  width: 30%;
  background: #000;
  color: #fff;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.1s ease all;

  &:hover {
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
  }
`;

const SuccessMessage= styled.div`
  font-size: 14px;
  color: ${colors.success};
`;

const ErrorMessage= styled.div`
  height: 35px;
  line-height: 35px;
  background: ${colors.error};
  padding: 0px 15px;
  border-radius: 3px;
  grid-column: span 2;
  p {
    margin: 0;
  }
`;

export {
  Forms,
  Label,
  Input,
  GroupInput,
  ErrorsForms,
  IconsValidation,
  ContainerButton,
  ButtonCreate,
  SuccessMessage,
  ErrorMessage
};
