import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 100%;
    margin-top: 1rem;
    font-size: 1.5rem;
    background: #ebfeff;
    border-radius: 10px;
    border: 2px solid #0085a3;
    padding: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    text-align: center;
    
    p {
        font-size: 1.5rem;
    }
`;

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover {
        opacity: 0.8;
    }
    
    button {
        cursor: pointer;
        user-select: none;
        font-size: 0.8rem;
        width: 100%;
        padding: 5px 0;
        margin: 5px 0;
        background: ${({ correct, userClicked }) =>
            correct
            ? 'linear-gradient(90deg, #56FFA4, #59BC86)'
            : !correct && userClicked
                ? 'linear-gradient(90deg, #FF5656, #C16868)'
                : 'linear-gradient(90deg, #56ccff, #6eafb4)'};
        border: 3px solid #ffffff;
        box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        color: #fff;
        font-size: 1.1rem;
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
        transition: 0.5s ease;
        }
`;