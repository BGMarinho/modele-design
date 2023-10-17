import React from 'react';
import TopBar from "../components/TopBar"
import LogoSignature from "../components/LogoSignature"
import MainContent from "../components/MainContent"
import SocialIconBar from '@/components/SocialIconBar';

export default function Home() {
  return (
    <>
      <TopBar>
        <SocialIconBar />
      </TopBar>
      <LogoSignature />
      <MainContent />
    </>
  )
}

