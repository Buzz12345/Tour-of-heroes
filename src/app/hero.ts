export interface Hero {
    id: number;
    name: string;
    description: string;
}

export interface News {
    id: number;
    heroId: number;
    newsText: string;
}