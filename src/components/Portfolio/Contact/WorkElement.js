import styled from "styled-components";

export const FormWrapper = styled.section`
    text-align: -webkit-center;
    margin: 20px;
    padding: 50px;
    border-radius: 5px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    background-color: #f346;
`;
export const FormTitle = styled.h4`
    text-align: center;
    font-size: 2rem;
    padding-bottom: 3rem;
    margin-top: 2rem;
`;
export const Form = styled.form`
    display: table-caption;
    width: 100%;
    max-width: 700px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;

    &:hover {
        box-shadow: 0px 0px 25px 0px #37d334;
    }
`;
export const InputContainer = styled.div`
    display: grid;
    margin-bottom: 20px;
`;
export const Label = styled.label``;
export const Input = styled.input``;
export const TextArea = styled.textarea``;
export const Button = styled.button``;
export const Error = styled.div``;
