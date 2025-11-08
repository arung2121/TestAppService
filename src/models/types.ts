export interface Product
{
    id : string,
    name : string,
    description: string,
    price : number,
    imageUrl: string
}

export interface CartItem extends Product
{
    productId : string,
    quantity : number                                                    
}


export interface Cart {
    userId : string,
    items : CartItem[]
}