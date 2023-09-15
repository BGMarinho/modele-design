import React from 'react';
import GlobalStyle from "@/src/layout/globalStyles"
import HeadAndSEO from "@/src/components/Head"
import TopBar from "@/src/components/TopBar"
import LogoSignature from "@/src/components/LogoSignature/LogoSignature"
import MainContent from "@/src/components/MainContent"

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

