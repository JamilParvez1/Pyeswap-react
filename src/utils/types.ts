import ethers, { Contract, ContractFunction } from 'ethers'

export type MultiCallResponse<T> = T | null


// Farm Auction

// Note: slightly different from AuctionStatus used throughout UI
export enum FarmAuctionContractStatus {
  Pending,
  Open,
  Close,
}

export interface AuctionsResponse {
  status: FarmAuctionContractStatus
  startBlock: ethers.BigNumber
  endBlock: ethers.BigNumber
  initialBidAmount: ethers.BigNumber
  leaderboard: ethers.BigNumber
  leaderboardThreshold: ethers.BigNumber
}

export interface BidsPerAuction {
  account: string
  amount: ethers.BigNumber
}

export type ViewBidsPerAuctionResponse = [BidsPerAuction[], ethers.BigNumber]

// [auctionId, bids, claimed, nextCursor]
export type ViewBidderAuctionsResponse = [ethers.BigNumber[], ethers.BigNumber[], boolean[], ethers.BigNumber]

type GetWhitelistedAddressesResponse = [
  {
    account: string
    lpToken: string
    token: string
  }[],
  ethers.BigNumber,
]

interface AuctionsHistoryResponse {
  totalAmount: ethers.BigNumber
  hasClaimed: boolean
}

export interface FarmAuctionContract extends Contract {
  currentAuctionId: ContractFunction<ethers.BigNumber>
  viewBidders: ContractFunction<[string[], ethers.BigNumber]>
  totalCollected: ContractFunction<ethers.BigNumber>
  auctions: ContractFunction<AuctionsResponse>
  claimable: ContractFunction<boolean>
  viewBidsPerAuction: ContractFunction<ViewBidsPerAuctionResponse>
  viewBidderAuctions: ContractFunction<ViewBidderAuctionsResponse>
  whitelisted: ContractFunction<boolean>
  getWhitelistedAddresses: ContractFunction<GetWhitelistedAddressesResponse>
  auctionsHistory: ContractFunction<AuctionsHistoryResponse>
}
