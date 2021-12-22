import React from "react"
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink, SocialIconLink } from "./FooterElements"
const Footer = () => {

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>

                            <FooterLink to="/">How it works</FooterLink>
                            <FooterLink to="/">Testimonials</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Investors</FooterLink>
                            <FooterLink to="/">Terms of Services</FooterLink>

                        </FooterLinksItems>

                        <FooterLinksItems>
                            <FooterLinkTitle>Video</FooterLinkTitle>
                            <FooterLink to="/">Submit Video</FooterLink>
                            <FooterLink to="/">Agency</FooterLink>
                            <FooterLink to="/">Influencer</FooterLink>


                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/">Contact</FooterLink>
                            <FooterLink to="/">Support</FooterLink>
                            <FooterLink to="/">Destinations</FooterLink>
                            <FooterLink to="/">Sponsorships</FooterLink>


                        </FooterLinksItems>

                        <FooterLinksItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink to="/">Instagram</FooterLink>
                            <FooterLink to="/">Facebook</FooterLink>

                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialIconLink>
                    TradeStock {new Date().getFullYear()} All rights reserved.
                </SocialIconLink>
            </FooterWrap>
        </FooterContainer>



    )


}


export default Footer