export interface RealitiesEditModel {
    uuid: string;
    name: string;
    imageUrl: string;
    status: RealitiesStatus;
    createdAt: Date;
}

export type RealitiesStatus = 'actual' | 'sold'  ;
