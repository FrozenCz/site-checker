export interface DetailModel {
 uuid: string
 name: string;
 description: string;
 createdAt: Date;
 published: boolean;
 price: number;
 status: 'actual' | 'sold'
 video: string
 map: string
}


export interface DetailImage {
 src: string | undefined
 uuid: string
 order: number
}


