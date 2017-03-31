export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}

/*Example only 
export class Product implements IProduct {
    constructor(public productId: number,
    public productName: string,
    public releaseDate: string,
    public price: number,
    public description: string,
    public startRating: number,
    public imageUrl: string) {       
    }

    calculateDiscount(percent: number): number {
        return this.price - (this.price * percent / 100);
    }

}*/