import React from 'react'
import { TokenPairImage, ImageProps } from 'uikit'
import { mainnetTokens } from 'config/constants/tokens'

const AppleVaultTokenPairImage: React.FC<Omit<ImageProps, 'src'>> = (props) => {
  const primaryTokenSrc = `/images/tokens/${mainnetTokens.pye.address}.svg`

  return <TokenPairImage primarySrc={primaryTokenSrc} secondarySrc="/images/tokens/autorenew.svg" {...props} />
}

export default AppleVaultTokenPairImage
