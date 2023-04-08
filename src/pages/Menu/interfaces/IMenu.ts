export interface IMenu {
    id: number;
    title: string;
    description: string;
    size: number;
    serving: number;
    price: number;
    photo: string;
    category:{
        id: number;
        label: string;
    }
}