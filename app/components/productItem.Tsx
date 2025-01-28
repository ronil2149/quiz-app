import { Product } from "../types/Task";

type ProductItemProps = {
    product: Product;
  };
export default function productItem({ product }: ProductItemProps) {
    return (    
        product
    );
}