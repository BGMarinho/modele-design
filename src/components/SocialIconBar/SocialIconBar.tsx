import React from 'react'
import { useIcon } from '@/helpers/useIcon'
import SocialIcon from '@/base-components/SocialIcon'

import * as S from './styles'

export default function SocialIconBar() {
    const icons = useIcon()
    return (
        <S.SocialIconBarWrapper>
            {icons.map((icon, key) => <SocialIcon src={icon.name} link={icon.link} alt={icon.alt} width={icon.width} height={icon.height} key={key} />)}
        </S.SocialIconBarWrapper>
    )
}