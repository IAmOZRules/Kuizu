import styled from 'styled-components';

export const Wrapper = styled.div`
    user-select: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    > p {
        color: #fff;
        font-size: 3rem;
    }
    
    .score {
        background: #ebfeff;
        border-radius: 10px;
        border: 2px solid #0085a3;
        padding: 0 4rem;
        margin: 0;
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .display-score {
        margin: auto;
        margin-left: 1rem;
        font-size: 3rem;
        color: #1EE174;
        }};
    }
    
    h1 {
        font-family: Fascinate Inline;
        font-weight: 400;
        background-size: 100%;
        background-clip: text;
        --webkit-background-clip: text;
        --webkit-text-fill-color: transparent;
        --moz-background-clip: text;
        --moz-text-fill-color: transparent;
        filter: drop-shadow(2px 2px #741EE1);
        font-size: 70px;
        text-align: center;
        margin: 20px;
        color: #87f1ff;
        text-shadow: 2px 5px black;
    }
    
    .start, .next {
        font-family: 'Catamaran', sans-serif;
        cursor: pointer;
        background: linear-gradient(180deg, #ffffff, #ffcc91);
        border: 2px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        margin: 20px 0;
        padding: 5px 40px;
        font-size: 1.5rem;
    }
    
    .start {
        max-width: 200px;
    }

    .loading-msg {
        color: black;
    }
`;