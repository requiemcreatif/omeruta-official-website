import React from "react";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from "@mui/material/IconButton";
import {
  FooterWrapper,
  FooterContainer,
  FooterTerms,
  FooterLink,
  FooterTextContent,
  FooterCopyrights,
  FooterSocial,
  FooterBottom,
  SocialIconButton,
} from "./styles";

interface SocialIcon {
  Icon: React.ComponentType;
  url: string;
}

export const Footer: React.FC = () => {
  const socialIcons: SocialIcon[] = [
    { Icon: InstagramIcon, url: "#" },
    { Icon: FacebookIcon, url: "#" },
    { Icon: YouTubeIcon, url: "#" },
    { Icon: TwitterIcon, url: "#" },
  ];

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterSocial>
          {socialIcons.map(({ Icon, url }, index) => (
            <Link
              key={index}
              href={url}
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton>
                <Icon />
              </IconButton>
            </Link>
          ))}
        </FooterSocial>
        <FooterTextContent>
          <FooterCopyrights>
            © 2024 | All rights reserved | Designed by:{" "}
            <Link href="#" passHref>
              Omeruta
            </Link>
          </FooterCopyrights>
          <FooterTerms>
            {["Contact", "Privacy", "Terms"].map((item, index) => (
              <React.Fragment key={item}>
                <FooterLink>
                  <Link href="#">{item}</Link>
                </FooterLink>
                {index < 2 && <span>|</span>}
              </React.Fragment>
            ))}
          </FooterTerms>
          <FooterBottom variant="body2">
            Omeruta - Requiem Creatif are registered trademarks of Omeruta.
          </FooterBottom>
        </FooterTextContent>
      </FooterWrapper>
    </FooterContainer>
  );
};
