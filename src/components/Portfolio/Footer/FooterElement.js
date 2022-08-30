import styled from 'styled-components';

export const Container = styled.section`
    position: relative;
    padding: 80px 60px;
    background: #000;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    min-height: 100%;
    margin: 0 auto;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px; 
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 20px;
    
    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    }
`;

export const Link = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
    
    &:hover {
        color: #147d5c;
        transition: 200ms ease-in;
    }
`;
export const LinkInvisible = styled.a`
    color: #000;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;
    
    &:hover {
        color: #147d5c;
        transition: 200ms ease-in;
    }
`;

export const Title = styled.p`
    font-size: 18px;
    color: #fff;
    margin-bottom: 40px;
    font-weight: bold;
`;