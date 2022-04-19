export interface Hero {
    id: number;
    name: string;
    description: string;
}

export interface News {
    newsId: number;
    heroId: number;
    newsText: string;
}