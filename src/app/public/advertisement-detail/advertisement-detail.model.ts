export interface AdvertisementDetailModel {
 name: string
 description: string
 price: number
 createdAt: Date
 published: boolean
 imageUrl: string
 video: string
 map: string
}

export interface DetailImage {
 src: string
 thumb: string
 order: number

}
