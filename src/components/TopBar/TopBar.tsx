import React from 'react';
import * as S from './styles';
import { TopBarProps } from './interfaces';

export default function TopBar({ children }: TopBarProps) {
  const navOptions = [
    { text: 'Home', url: 'http://localhost:3000/' },
    { text: 'projetos', url: '/item-1-link' },
    { text: 'sobre nós', url: '/item-2-link' },
    { text: 'contato', url: '/item-3-link' },
  ];
  return (
    <S.TopBarNav>
      {navOptions.map((navOption, key) => (
        <S.TopBarItem href={navOption.url} key={key}>
          {navOption.text}
        </S.TopBarItem>
      ))}
      {children}
    </S.TopBarNav>
  );
}
