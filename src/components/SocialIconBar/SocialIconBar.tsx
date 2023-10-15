import React from 'react'
import SocialIcon from '@/base-components/SocialIcon'
import instagram from '../../images/svg/instagram.svg'
import pinterest from '../../images/svg/pinterest.svg'
import whatsapp from '../../images/svg/whatsapp.svg'
import facebook from '../../images/svg/facebook.svg'

import * as S from './styles'

export default function SocialIconBar() {
    const icons = [instagram, pinterest, whatsapp, facebook]
    return (
        <S.SocialIconBarWrapper>
            {icons.map((icon, key) => <SocialIcon src={icon} alt={icon} width={16} height={16} key={key} />)}
        </S.SocialIconBarWrapper>
    )
}