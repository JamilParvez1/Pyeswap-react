import { ChainId } from '@pyeswap/swap-sdk'
import addresses from 'config/constants/contracts'
import { Address } from 'config/constants/types'
import {VaultKey} from "../state/types";

export const getAddress = (address: Address): string => {
  const chainId = process.env.REACT_APP_CHAIN_ID
  return address[chainId] ? address[chainId] : address[ChainId.MAINNET]
}

export const getMasterChefAddress = () => {
  return getAddress(addresses.masterChef)
}
export const getMulticallAddress = () => {
  return getAddress(addresses.multiCall)
}


export const getAppleVaultAddress = () => {
  return getAddress(addresses.appleVault)
}

export const getVaultPoolAddress = (vaultKey: VaultKey) => {
  if (!vaultKey) {
    return null
  }
  return getAddress(addresses[vaultKey])
}