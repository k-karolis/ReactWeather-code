import React from "react";
import { FooterContainer } from "./styled";

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <p>
                Developed by <a href="https://www.ehsanazizi.me">Ehsan Azizi</a>
                <br />
                Edited by{" "}
                <a href="http://www.karoliskimtys.com">Karolis Kimtys</a>
            </p>
        </FooterContainer>
    );
};

export default Footer;
