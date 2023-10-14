import React from 'react'
import Image from 'next/image'

import { SocialIconProps } from './interfaces'
import * as S from './styles'

export default function SocialIcon({ src, alt, width, height }: SocialIconProps) {
    return (
        <S.SocialIconContainer>
            <Image src={src} alt={alt} width={width} height={height} />
        </S.SocialIconContainer>
    )
}