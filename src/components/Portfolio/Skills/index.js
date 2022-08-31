import React from "react";
import { SkillsContainer, SkillsTitle, SkillListContainer, SkillList, SkillItem, SkillItemDiv, SkillItemImg, SkillItemText } from "./SkillsElements";
import { ExperienceContainer, ExperienceTitle, ExperienceListContainer, ExperienceList, ExperienceItem, ExperienceItemYear, ExperienceItemTitle, ExperienceItemCompany, ExperienceDivider } from "./ExperienceElements";
import {
    images,
} from "../../../assets/index";

const Skills = () => {
    return (
        <div>
            <SkillsContainer>
                <SkillsTitle>Skills</SkillsTitle>
                <SkillListContainer>
                    <div>
                        <SkillList>
                            <SkillItem>
                                <SkillItemDiv>
                                    <SkillItemImg src={images.HTMLImg}/>
                                </SkillItemDiv>
                                <SkillItemText>HTML</SkillItemText>
                            </SkillItem>
                            <SkillItem>
                                <SkillItemDiv>
                                    <SkillItemImg src={images.CSSImg}/>
                                </SkillItemDiv>
                                <SkillItemText>CSS</SkillItemText>
                            </SkillItem>
                            <SkillItem>
                                <SkillItemDiv>
                                    <SkillItemImg src={images.JavascriptImg}/>
                                </SkillItemDiv>
                                <SkillItemText>Javascript</SkillItemText>
                            </SkillItem>
                            <SkillItem>
                                <SkillItemDiv>
                                    <SkillItemImg src={images.GraphQlImg}/>
                                </SkillItemDiv>
                                <SkillItemText>GraphQL</SkillItemText>
                            </SkillItem>
                            <SkillItem>
                                <SkillItemDiv>
                                    <SkillItemImg src={images.GithubImg}/>
                                </SkillItemDiv>
                                <SkillItemText>Github</SkillItemText>
                            </SkillItem>
                            <SkillItem>
                                <SkillItemDiv>
                                    <SkillItemImg src={images.NodeJsImg}/>
                                </SkillItemDiv>
                                <SkillItemText>NodeJs</SkillItemText>
                            </SkillItem>
                            <SkillItem>
                                <SkillItemDiv>
                                    <SkillItemImg src={images.RubyImg}/>
                                </SkillItemDiv>
                                <SkillItemText>Ruby</SkillItemText>
                            </SkillItem>
                            <SkillItem>
                                <SkillItemDiv>
                                    <SkillItemImg src={images.ReactImg}/>
                                </SkillItemDiv>
                                <SkillItemText>React</SkillItemText>
                            </SkillItem>
                            <SkillItem>
                                <SkillItemDiv>
                                    <SkillItemImg src={images.SolidityImg}/>
                                </SkillItemDiv>
                                <SkillItemText>Solidity</SkillItemText>
                            </SkillItem>
                        </SkillList>
                    </div>
                </SkillListContainer>
            </SkillsContainer>
            
            <ExperienceContainer>
                <ExperienceTitle>Experience</ExperienceTitle>
                <ExperienceListContainer>
                    <div>
                        <ExperienceList>
                            <ExperienceItem>
                                <ExperienceItemYear>2020-2021</ExperienceItemYear>
                                <ExperienceItemTitle> Programming Bootcamp Student</ExperienceItemTitle>
                                <ExperienceDivider>
                                    <ExperienceItemCompany> Codeboxx</ExperienceItemCompany>
                                </ExperienceDivider>
                            </ExperienceItem>
                            <ExperienceItem>
                                <ExperienceItemYear>2021-2022</ExperienceItemYear>
                                <ExperienceItemTitle> Full-Stack Developer</ExperienceItemTitle>
                                <ExperienceDivider>
                                    <ExperienceItemCompany> Codeboxx Digital Solutions</ExperienceItemCompany>
                                </ExperienceDivider>
                            </ExperienceItem>
                        </ExperienceList>
                    </div>
                </ExperienceListContainer>
            </ExperienceContainer>
        </div>
    )

}

export default Skills;