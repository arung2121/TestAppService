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
export interface State {
  cart: CartItem[];
  userId: number | null;
}

export interface Mutations {
  addOrUpdateItem(state: State, cartItem: CartItem): void;
  setCart(state: State, items: CartItem[]): void;
}

export interface Actions {
  addItemToCart(context: any, product: Product): Promise<void>;
  fetchCart(context: any): Promise<void>;
  removeItemFromCart(context: any, productId: number): Promise<void>;
}