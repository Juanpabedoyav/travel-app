export interface Welcome {
    offset:            number;
    pageSize:          number;
    totalSize:         number;
    marketSize:        number;
    sortType:          string;
    tripFilterSummary: TripFilterSummary;
    cityInfo:          CityInfo;
    hotels:            Hotel[];
}

export interface CityInfo {
    cityId:          number;
    cityName:        string;
    stateName:       string;
    countryCode:     string;
    countryName:     string;
    areaId:          number;
    lat:             number;
    lon:             number;
    zonePolygonInfo: { [key: string]: ZonePolygonInfo };
}

export interface ZonePolygonInfo {
    id:            number;
    type:          string;
    name:          string;
    centerLat:     number;
    centerLon:     number;
    viewOrder:     number;
    polygonPoints: PolygonPoint[];
}

export interface PolygonPoint {
    latitude:  number;
    longitude: number;
}

export interface Hotel {
    hotelId:                  string;
    name:                     string;
    brand:                    string;
    starRating:               number;
    location:                 Location;
    thumbnailUrl:             string;
    hotelFeatures:            HotelFeatures;
    overallGuestRating:       number;
    totalReviewCount:         number;
    proximity:                number;
    ratesSummary:             RatesSummary;
    allInclusiveRateProperty: boolean;
    displayRank:              number;
    recmdScore:               number;
    dealTypes:                string[];
    merchandising:            Merchandising;
    media:                    Media;
    keyFeatures:              string[];
    globalDealScore:          number;
}

export interface Badge {
    type:        string;
    description: string;
}

export interface HotelFeatures {
    hotelAmenityCodes: string[];
    hotelAmenities?:   HotelAmenity[];
}

export interface HotelAmenity {
    code: string;
    name: string;
    free: boolean;
}

export interface Location {
    address:          Address;
    timeZone:         string;
    neighborhoodId:   string;
    neighborhoodName: string;
    cityId:           number;
    zoneId:           string;
    zoneName?:        string;
    zoneType?:        string;
    encLatLong?:      string;
    longitude?:       number;
    latitude?:        number;
}

export interface Address {
    cityName:       string;
    countryName:    string;
    isoCountryCode: string;
    addressLine1?:  string;
    zip?:           string;
}

export interface Media {
    source: string;
    url:    string;
}

export interface Merchandising {
    topBooked?: Badge;
}

export interface RatesSummary {
    minPrice:                   string;
    minCurrencyCode:            string;
    minStrikePrice?:            string;
    pclnId:                     string;
    freeCancelableRateAvail:    boolean;
    payWhenYouStayAvailable:    boolean;
    minRatePromos?:             MinRatePromo[];
    gid:                        number;
    rateIdentifier:             string;
    programName?:               string;
    strikeThroughPrice?:        string;
    merchandisingFlag?:         boolean;
    minRateSavingsPercentage?:  number;
    ccNotRequiredAvailable:     boolean;
    applePayRateAvailable:      boolean;
    minRateStrikeThroughPrice?: string;
    roomLeft?:                  number;
}

export interface MinRatePromo {
    type:                  string;
    title:                 string;
    discountPercentage:    number;
    showDiscount:          boolean;
    dealType:              string;
    isVariableMarkupPromo: boolean;
}

export interface TripFilterSummary {
    totalSizeFiltered:     number;
    cityCounts:            { [key: string]: number };
    clusterCounts:         { [key: string]: number };
    amenityCounts:         { [key: string]: number };
    starRatingCounts:      { [key: string]: number };
    brandIdCounts:         { [key: string]: number };
    propertyTypeCounts:    PropertyTypeCounts;
    propertyType:          PropertyType[];
    dealTypeCounts:        DealTypeCounts;
    minFilterPrice:        string;
    maxFilterPrice:        string;
    maxFilterPricePerStay: string;
}

export interface DealTypeCounts {
    EXPRESS_DEAL: number;
}

export interface PropertyType {
    typeId:    string;
    typeTitle: string;
    count:     number;
}

export interface PropertyTypeCounts {
    "204": number;
}
