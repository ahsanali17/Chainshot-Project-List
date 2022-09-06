import styled from 'styled-components';

export const WorkContainer = styled.section`
    position: relative;
    padding: 80px 60px;
    text-align: center;
    background: #fff;
`;

export const WorkTitle = styled.h4`
    text-align: center;
    font-size: 2rem
`;

export const CardContainer = styled.div`
    display: inline-grid;
    width: 340px;
    overflow: hidden;
    box-shadow: 0px 0px 15px -5px;
    transition: 0.5s;
    margin: 3rem;
    border-radius: 10px;
    background: #fff;
    
    &:hover {
        transform: scale(1.1);
        box-shadow: 0px 0px 15px 0px #37d334;
    }
`;

export const CardImage = styled.img`
    width: fit-content;
    overflow:hidden;
    height: 200px;
`;

export const CardTitle = styled.div`
    text-align: center;
`;
export const CardBody = styled.div`
    padding: 10px;
`;
export const CardFooter = styled.div`
    flex-direction: row;
`;
export const CardBtn = styled.button`
`;
