import styled from 'styled-components';
import RightImg from "../../../assets/gifs/matrix.gif";

export const HeroSection = styled.section`
    position: relative;
    background-color: #000200;
    height: 60vh;
    display: block;
    background-size: contain;
`;

export const HeroContent = styled.div`
    width: 100%;
    height: 100px;
    color: #fff;
`;

export const HeroTitle = styled.p`
    color: #fff;
    font-size: 2.5rem;
    font-weight: 400;
`;
export const HeroLeft = styled.div`
    padding-left: 10rem;
    padding-top: 1rem;
`;
export const HeroDesc = styled.p`
    width: 472px;
    font-size: 1.2rem;
    color: #fff;
    line-height: 1.5;
    margin-top: 50px;
`;
export const HeroButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    margin-top: 50px;
    width: 80px;
    height: 20px;
    line-height: 50px;
    
    
    background: #fff;
    padding: 10px 22px;
    color: #000;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;


    &:hover {
        transition: all 0.2s ease-in-out;
        background: #147d5c;
        color: #fff;
    }
`;

export const MatrixSection = styled.section`
    width: 50%;
    height: 50vh;
    background-image: url(${RightImg});
    float: right;
`;
