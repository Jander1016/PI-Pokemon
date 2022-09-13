import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colors = {
  border: "#0075FF",
  error: "#bb2929",
  success: "green",
};

const Forms = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  } 
`;

const Label = styled.label`
  display: block;
  font-weight: 700;
  padding: 10px;
  min-heigth: 35px;
  cursor: pointer;

${(props) => props.validate === "false" && css`
  color:${colors.error} ;
`}
`;

const GroupInput = styled.div`
  position: relative;
  z-index: 90;
`;

const Input = styled.input`
    width:100%;
    background: #fff;
    border-radius: 3px;
    height: 35px;
    line-height: 35px;
    padding: 0 30px 0 8px;
    transition : .3s ease all;
    border: 3px solid transparent;

    &:focus {
      border: 3px solid ${colors.border};
      outline: none;
      box-shadow: 3px 0px 50px rgba(163,163,163,0.4);
    }

    ${(props) => props.validate === "true" && css`
      border: 3px solid transparent;
    `}

    ${(props) => props.validate=== "false" && css`
      border: 3px solid ${colors.error} !important;
    `}
`;

const IconsValidation = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 100;
  font-size: 16px;
  opacity: 0;

  ${(props) => props.validate === "false" && css`
    color: ${colors.error} ;
    opacity: 1;
  `}
  ${(props) => props.validate === "true" && css`
    color: ${colors.success} ;
    opacity: 1;
  `}

`;

const ErrorsForms = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  color: ${colors.error};
  display: none;

  ${(props) => props.validate === "true" && css`
  color:${colors.error} ;
  display: none;
  `}
  ${(props) => props.validate === "false" && css`
  color:${colors.error} ;
  display: block;
  `}

`;

const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 2;

  @media (max-width: 800px) {
    grid-columns: span 1;
  } 
  
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
  transition: .1s ease all;

  &:hover {
    box-shadow: 3px 0px 25px rgba(163, 163, 163, 1);
  }

  @media (max-width: 800px) {
    grid-columns: span 1;
  } 
`;

const SuccessMessage = styled.p`
  font-size: 18px;
  height: 35px;
  line-height: 35px;
  padding: 0px 15px;
  border-radius: 3px;
  grid-column: span 2;
  color: ${colors.success};

  @media (max-width: 800px) {
    grid-columns: span 1;
  }
`;

const ErrorMessage = styled.div`
  height: 35px;
  line-height: 35px;
  background: #f66060;
  padding: 0px 15px;
  border-radius: 3px;
  grid-column: span 2;
  p {
    margin: 0;
  }

  @media (max-width: 800px) {
    grid-columns: span 1;
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
  ErrorMessage,
};
