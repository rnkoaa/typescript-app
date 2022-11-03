export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone?: string;
    website?: string;
    address?: Address;
    company?: Company;
}

export interface Address {
    string: string;
    suite?: string;
    city: string;
    zipcode: string;
    geo?: Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    id: number;
    name: string;
    catchPhrase?: string;
    bs?: string;
}

export interface Comment {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
}

export interface Album {
    id: number;
    userId: number;
    title: string;
}

export interface Photo {
    id: number;
    albumId: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface Todo {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
}
