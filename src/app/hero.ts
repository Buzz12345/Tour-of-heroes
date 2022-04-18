export interface Hero {
    id: number;
    name: string;
}

export interface News {
    newsId: number;
    heroId: number;
    newsText: string;
}