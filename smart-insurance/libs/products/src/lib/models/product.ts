import { Category } from './category';

export class Product {
  id?: string;
  name?: string;
  category?: Category;
  coverage?: string;
  description?: string;
  richDescription?: string;
  image?: string;
  images?: string[];
  productType?: string;
  price?: number;
  rating?: number;
  numReviews?: number;
  isAvailable?: boolean;
  dateCreated?: string;
  startDate?: string;
  expireDate?: string;
}