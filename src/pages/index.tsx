import React from 'react';
import GlobalStyle from "../layout/globalStyles"
import HeadAndSEO from "../components/Head"
import TopBar from "../components/TopBar"
import LogoSignature from "../components/LogoSignature"
import MainContent from "../components/MainContent"

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <HeadAndSEO />
      <TopBar />
      <LogoSignature />
      <MainContent />
    </>
  )
}

