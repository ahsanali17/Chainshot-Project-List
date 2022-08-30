import styled from 'styled-components';

export const SkillsContainer = styled.section`
    position: relative;
    width: 100%;
    flex-direction: column;
`;

export const SkillsTitle = styled.h2`
    text-align: center;
    font-size: 2rem
`;

export const SkillListContainer = styled.div`
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
export const SkillList = styled.div`
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;

    @media screen and (max-width: 900px) {
        margin-right: 0;
        justify-content: center;
        align-items: center;
    }
`; // .app__skills-list

export const SkillItem = styled.div`
    flex-direction: column;
    text-align: center;
    margin: 1rem;
    transition: 0.3s;
    transition: all 0.3s ease-in-out;
`; // .app__skills-item

export const SkillItemDiv = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-color: #fff;

   &:hover {
       box-shadow: 0px 0px 25px 0px #37d334;
    }

   @media screen and (min-width: 2000px) {
        width: 150px;
        height: 150px;
    }

    @media screen and (min-width: 2000px) {
        width: 70px;
        height: 70px;
    }
`; // .app__skills-item-div

export const SkillItemImg = styled.img`
    width: 50%;
    height: 50%;
    margin-top: 1.5rem;
`; // .app__skills-item-img

export const SkillItemText = styled.p`
   font-weight: 500;
   margin-top: 0.5rem;

   @media screen and (min-width: 2000px) {
    margin: 0rem 1rem;
    p {
        margin-top: 1rem;
    }
}
`; // .app__skills-item-text
