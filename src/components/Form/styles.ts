import styled from 'styled-components'

export const FormContainer = styled.div`
    width: 516px;
    height: 353px;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    background-color: ${(props) => props.theme['gray500']};

    border: solid 1px ${(props) => props.theme['gray600']};
    border-radius: 3px;
`

export const UploudPhoto = styled.label`
    width: 88px;
    height: 88px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: solid 1px ${(props) => props.theme['gray300']};
    border-radius: 36px;

    margin-bottom: 16px;

    background-color: transparent;

    cursor: pointer;

    input {
        display: none;
    }
`

export const SelectedImage = styled.div`
    width:  max-content;
    height: max-content;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 16px;

    margin-bottom: 16px;

    button {
        width: 24px;
        height: 24px;

        background-color: transparent;

        border: none;

        cursor: pointer;
    }
`

export const ImagePost = styled.img`
    width: 88px;
    height: 88px;

    border-radius: 36px;
`

export const FormContent = styled.form`
    width: max-content;
    height: max-content;

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    gap: 8px;

    input {
        width: 468px;
        height: 40px;

        border: none;
        border-radius: 8px;

        padding: 0 12px;

        color: ${(props) => props.theme['white']};
        background-color: ${(props) => props.theme['gray400']};
    }
`

export const InputMessage = styled.textarea`
    width: 468px;
    height: 80px;

    border: none;
    border-radius: 8px;

    padding: 12px;

    resize: none;

    color: ${(props) => props.theme['white']};
    background-color: ${(props) => props.theme['gray400']};

    &::-webkit-scrollbar {
        display: none;
    }
`

export const FormSubmit = styled.div`
    width: 468px;
    height: max-content;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    gap: 24px;

    margin-top: 32px;
`

export const SubmitButton = styled.button`
    width: 98px;
    height: 41px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 8px;

    color: ${(props) => props.theme['white']};
    background-color: ${(props) => props.theme['green100']};

    cursor: pointer;

    &:disabled {
        cursor: not-allowed;
        color: ${(props) => props.theme['gray500']};
        background-color:  ${(props) => props.theme['gray300']};
    }
`

export const DeleteButton = styled.button`
    width: max-content;
    height: max-content;

    border: none;

    color: ${(props) => props.theme['gray300']};
    background-color: transparent;

    border-bottom: solid 1px ${(props) => props.theme['gray300']};

    cursor: pointer;
`