export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  features: string[];
  category: string;
}

export interface ProductDetail extends Product {
  fullDescription: string;
  specifications?: string[];
  applications?: string[];
}