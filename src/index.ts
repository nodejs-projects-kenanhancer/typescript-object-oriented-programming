class Product {
    constructor(public id: string, public name: string, public price: number) {
    }
}

interface IPromotion {
    apply(products: Array<Product>): void;
}

class TenPercentPromotion implements IPromotion {

    apply(products: Array<Product>): void {
        for (const product of products) {
            if (product.price > 75) {
                product.price = product.price * 10 / 100;
            }
        }
    }
}

class BulkPromotion implements IPromotion {
    constructor(private price: number, private productName: string) { }

    apply(products: Array<Product>): void {
        products.filter(product => product.name === this.productName).forEach(product => product.price = this.price);
    }
}

class Checkout {
    promotions: Array<IPromotion> = [];

    constructor(private products: Array<Product>) { }

    usePromotion(promotion: IPromotion) {
        this.promotions.push(promotion);
    }

    scan() {
        this.promotions.forEach(promotion => promotion.apply(this.products));
    }

    total() {
        return this.products.reduce((sum, cur, index) => (sum + cur.price), 0);
    }
}

const main = (args: Array<string>) => {

    const products: Array<Product> = [
        { id: "0001", name: "Water Bottle", price: 24.95 },
        { id: "0001", name: "Water Bottle", price: 24.95 },
        { id: "0002", name: "Hoodie", price: 65.00 },
        { id: "0002", name: "Hoodie", price: 65.00 },
        { id: "0003", name: "Sticker Set", price: 3.99 }
    ];

    const checkout = new Checkout(products);

    checkout.usePromotion(new TenPercentPromotion());

    checkout.usePromotion(new BulkPromotion(22.99, "Water Bottle"));

    checkout.scan();

    console.log(checkout.total());
};

main([]);