enum ListingType {
  forSale = 'forSale',
  forRent = 'forRent',
  sold = 'sold',
}

enum ListingCategory {
  byAgent = 'byAgent',
  byOwner = 'byOwner',
}

enum SortOption {
  verifiedSource = 'verifiedSource',
  homesForYou = 'homesForYou',
  priceHighToLow = 'priceHighToLow',
  priceLowToHigh = 'priceLowToHigh',
  paymentHighToLow = 'paymentHighToLow',
  paymentLowToHigh = 'paymentLowToHigh',
  newest = 'newest',
  bedrooms = 'bedrooms',
  bathrooms = 'bathrooms',
  squareFeet = 'squareFeet',
  lotSize = 'lotSize',
}

enum HomeType {
  house = 'house',
  townhome = 'townhome',
  multiFamily = 'multiFamily',
  condo = 'condo',
  lot = 'lot',
  apartment = 'apartment',
  manufactured = 'manufactured',
}

enum ListingPublishOption {
  ownerPosted = 'ownerPosted',
  agentListed = 'agentListed',
  newConstruction = 'newConstruction',
  foreclosures = 'foreclosures',
  auctions = 'auctions',
  foreclosed = 'foreclosed',
  preForeclosures = 'preForeclosures',
}

enum PropertyStatus {
  comingSoon = 'comingSoon',
  acceptingBackupOffers = 'acceptingBackupOffers',
  pendingAndUnderContract = 'pendingAndUnderContract',
}

enum Tour {
  open = 'open',
  '3d' = '3d',
}

enum OtherAmenity {
  ac = 'ac',
  pool = 'pool',
  waterfront = 'waterfront',
  onsiteParking = 'onsiteParking',
  inUnitLaundry = 'inUnitLaundry',
  acceptZillowApplications = 'acceptZillowApplications',
  incomeRestricted = 'incomeRestricted',
  appartmentCommunity = 'appartmentCommunity',
}

enum View {
  city = 'city',
  mountain = 'mountain',
  park = 'park',
  water = 'water',
}

enum Pet {
  allowsLargeDogs = 'allowsLargeDogs',
  allowsSmallDogs = 'allowsSmallDogs',
  allowsCats = 'allowsCats',
}

enum Basement {
  finished = 'finished',
  unfinished = 'unfinished',
}

declare type SearchAPIParams = {
  keyword: string
  type: ListingType
  sort?: SortOption
  price?: {
    min?: number
    max?: number
  }
  beds?: {
    min?: number
    max?: number
  }
  baths?: {
    min?: number
    max?: number
  }
  yearBuilt?: {
    min?: number
    max?: number
  }
  lotSize?: {
    min?: number
    max?: number
  }
  squareFeet?: {
    min?: number
    max?: number
  }
  homeTypes?: HomeType[]
  listingType?: ListingCategory
  listingPublishOptions?: ListingPublishOption[]
  hoa?: number
  propertyStatus?: PropertyStatus[]
  tours?: Tour[]
  otherAmenities?: OtherAmenity[]
  views?: View[]
  pets?: Pet[]
  basement?: Basement[]
  singleStoryOnly?: boolean
  hide55plusCommunities?: boolean
  daysOnZillow?: string | number
  moveInDate?: string
  mustHaveGarage?: boolean
  parkingSpotsMin?: number
  keywords?: string
  page?: number
}

declare type PropertyAPIParams = {
  url: string
}

declare class ZillowAPI {
  private readonly apiKey: string;
  constructor(apiKey: string);

  search(params: SearchAPIParams): Promise<Record<any, any>>;
  property(params: PropertyAPIParams): Promise<Record<any, any>>;
}

export default ZillowAPI;
