// components/Footer/Footer.tsx

"use client";
import React from "react";
import Link from "next/link";
import { useTheme } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
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
  label: string;
}

export const Footer: React.FC = () => {
  const theme = useTheme();

  const socialIcons: SocialIcon[] = [
    { Icon: InstagramIcon, url: "#", label: "Instagram" },
    { Icon: FacebookIcon, url: "#", label: "Facebook" },
    { Icon: YouTubeIcon, url: "#", label: "YouTube" },
    { Icon: TwitterIcon, url: "#", label: "Twitter" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterSocial>
          {socialIcons.map(({ Icon, url, label }, index) => (
            <Link href={url} target="_blank">
              <SocialIconButton
                key={index}
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon />
              </SocialIconButton>
            </Link>
          ))}
        </FooterSocial>
        <FooterTextContent>
          <FooterCopyrights>
            © {currentYear} | All rights reserved | Designed by:{" "}
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

export default Footer;
