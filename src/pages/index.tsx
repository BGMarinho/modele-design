import React from 'react';
import GlobalStyle from "../layout/globalStyles"
import HeadAndSEO from "../components/Head"
import TopBar from "../components/TopBar"
import LogoSignature from "../components/LogoSignature"
import MainContent from "../components/MainContent"
import SocialIconBar from '@/components/SocialIconBar';

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <HeadAndSEO />
      <TopBar />
      <SocialIconBar />
      <LogoSignature />
      <MainContent />
    </>
  )
}

