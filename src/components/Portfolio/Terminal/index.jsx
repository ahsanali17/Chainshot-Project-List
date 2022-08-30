import React from "react";
import { ReactTerminal } from "react-terminal";

export default function Terminal () {
    let welcomeMessage = `Type 'opensesame' to enter the website.`;
    let prompt =`Ahsan's-Portfolio-Website=###`;
    let errorMessage = `That command does not exist`;

    const commands = {
        whoami: "Ahsan Syed",
        cd: (directory) => `changed path to ${directory}`,
        opensesame: () => window.open('https://www.google.com/', '_blank'),
    };

    return (
        <ReactTerminal
          welcomeMessage={welcomeMessage}
          prompt={prompt}
          errorMessage={errorMessage}
          commands={commands}
          theme="matrix"
        />
    );
}