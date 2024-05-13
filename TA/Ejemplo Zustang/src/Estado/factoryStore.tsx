import create from 'zustand';

interface Product {
  id: number;
  name: string;
  quantity: number;
}

interface FactoryState {
  products: Product[];
  produceProduct: (name: string) => void;
  distributeProduct: (productId: number, quantity: number) => void;
}

const useFactoryStore = create<FactoryState>((set) => ({
  products: [],
  produceProduct: (name) =>
    set((state) => ({
      products: [...state.products, { id: Date.now(), name, quantity: 0 }],
    })),
  distributeProduct: (productId, quantity) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity - quantity }
          : product
      ),
    })),
}));

export default useFactoryStore;
