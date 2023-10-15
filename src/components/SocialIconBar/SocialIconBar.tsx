import React from 'react'
import SocialIcon from '@/base-components/SocialIcon'
import instagram from '../../images/svg/instagram.svg'

import * as S from './styles'

export default function SocialIconBar() {
    return (
        <S.SocialIconBarWrapper>
            <SocialIcon src={instagram} alt='Instagram' width={30} height={30} />
        </S.SocialIconBarWrapper>
    )
}