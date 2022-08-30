import React from "react";
import Footer from "./index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter} from '@fortawesome/free-brands-svg-icons';
export default function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title><h1>More Info?</h1></Footer.Title>
                        <Footer.Link href="mailto:Ahsantime1@gmail.com">Ahsantime1@gmail.com</Footer.Link>                    
                        <Footer.Link href="#">Resume</Footer.Link>                    
                        <Footer.LinkInvisible href="https://imgur.com/gallery/pmSuXlo">?</Footer.LinkInvisible>                    
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title><h1>Say Hello</h1></Footer.Title>
                        <Footer.Link href="https://twitter.com/home"><FontAwesomeIcon icon={faTwitter} /> Twitter</Footer.Link>                    
                        <Footer.Link href="https://www.linkedin.com/feed/"><i className="fa fa-linkedin"></i> LinkedIn</Footer.Link>                    
                        <Footer.Link href="https://github.com/ahsanali17"><i className="fa fa-github"></i> Github</Footer.Link>                    
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}