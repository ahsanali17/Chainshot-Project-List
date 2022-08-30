import styled from 'styled-components';

export const ExperienceContainer = styled.section`
    position: relative;
    width: 100%;
    flex-direction: column;
`;

export const ExperienceTitle = styled.h4`
    text-align: center;
    font-size: 2rem
`;

export const ExperienceListContainer = styled.div`
    width 100%;
    margin-top: 3rem;
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media screen and (max-width: 900px) {
        width: 100%;
        flex-direction: column;
    }
`;

export const ExperienceList = styled.div`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;

    @media screen and (max-width: 900px) {
        margin-top: 2rem;
    }
`; // .app__Experience-list

export const ExperienceItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 1rem 0;
    
    h4 {
        font-size: 1rem;
    }
`;

export const ExperienceItemYear = styled.h4`
    margin-right: 2rem;
`;
export const ExperienceItemTitle = styled.h4`
    cursor: pointer;
`;

export const ExperienceItemCompany = styled.h5`
`;

export const ExperienceDivider = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 1rem;

    h5 {
        font-weight: normal;
        cursor: pointer;
    }

    p {
        font-weight: 400;
        color: #828282;
        margin-top: 5px;
    }
`;

