import React from "react"
import { WorkContainer, WorkTitle, CardContainer, CardImage, CardTitle, CardBody, CardFooter, CardBtn } from "./WorkElement";
import img from "../../../assets/images/6452761.jpg"
import ChainshotProjects from "../../ProjectLists/chainshotProjects";
import CodeboxxProjects from "../../ProjectLists/codeboxxProjects";

const Work = () => {
    return (
        <div>
            <WorkContainer>
                <WorkTitle>Bootcamp Projects</WorkTitle>
                <div>
                    <CardContainer>
                        <CodeboxxProjects/>
                    </CardContainer>
                    <CardContainer>
                        <ChainshotProjects/>
                    </CardContainer>
                </div>
            </WorkContainer>
        </div>
    )
}

export default Work;