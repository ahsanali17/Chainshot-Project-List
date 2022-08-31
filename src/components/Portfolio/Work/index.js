import React from "react"
import { WorkContainer, WorkTitle, CardContainer, CardImage, CardTitle, CardBody, CardFooter, CardBtn } from "./WorkElement";
import img from "../../../assets/images/6452761.jpg"
import ProjectList from "../../ProjectLists/projects";

const Work = () => {
    return (
        <WorkContainer>
            <ProjectList/>
            <WorkTitle>Works</WorkTitle>
            <CardContainer>
                <CardTitle>LOREM IPSUM</CardTitle>
                <CardImage src={img} />
                <CardBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </CardBody>
                <CardFooter>
                    <CardBtn><i className="fa fa-github" /> Repo</CardBtn>
                    <CardBtn>Demo</CardBtn>
                </CardFooter>
            </CardContainer>
            <CardContainer>
                <CardTitle>LOREM IPSUM</CardTitle>
                <CardImage src={img} />
                <CardBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </CardBody>
                <CardFooter>
                    <CardBtn><i className="fa fa-github" /> Repo</CardBtn>
                    <CardBtn>Demo</CardBtn>
                </CardFooter>
            </CardContainer>
            <CardContainer>
                <CardTitle>LOREM IPSUM</CardTitle>
                <CardImage src={img} />
                <CardBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </CardBody>
                <CardFooter>
                    <CardBtn><i className="fa fa-github" /> Repo</CardBtn>
                    <CardBtn>Demo</CardBtn>
                </CardFooter>
            </CardContainer>
            <CardContainer>
                <CardTitle>LOREM IPSUM</CardTitle>
                <CardImage src={img} />
                <CardBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </CardBody>
                <CardFooter>
                    <CardBtn>
                        <i className="fa fa-github" /> Repo
                        {/* <a href="https://github.com/ahsanali17" /> */}
                    </CardBtn>
                    <CardBtn>Demo</CardBtn>
                </CardFooter>
            </CardContainer>
        </WorkContainer>
    )
}

export default Work;