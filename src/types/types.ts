/**
 * Define the All types in a manner way that will be used in Application
 * @todo Please use a separate dir for each feature
 */

export type SearchType = {
    query: string | null;
    limit: number;
    offset: number;
}

export type GIFCardDetailsType = {
    id: string;
    title: string;
    thumbnail: string;
    gifURL: string;
    width:number;
    height:number;
}

export type PaginationDataType = {
    count: number;
    offset: number;
    total_count: number;
}