import styled from "styled-components";

const colors = {
  border: "#0075FF",
  error: "#bb2929",
  success: "#1ed12d",
};

const Forms = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    @media (max-width:800px){
        grid-template-columns: 1fr;
    }
`;

const Label = styled.label`
    display: block;
    font-weight:700;
    padding: 10px;
    min-heigth: 40px;
    cursor: pointer;
`;

export { Forms, colors, Label };
