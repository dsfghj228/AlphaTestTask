export interface ProductsState {
    id: number;
    title: string;
    description: string;
    category: string;
    image: string;
    price: number;
    isFavorite: boolean;
  }

  export interface ProductsSliceState {
    products: ProductsState[];
    productsLen: number;
  }