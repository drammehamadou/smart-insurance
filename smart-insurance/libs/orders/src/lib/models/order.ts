import { OrderPackage } from './order-package';
import { User } from '@smart-insurance/users';

export class Order {
  id?: string;
  orderPackages?: OrderPackage[];
  address1?: string;
  address2?: string;
  county?: string;
  postcode?: string;
  country?: string;
  phone?: string;
  status?: number;
  totalPrice?: number;
  user?: User;
  dateOrdered?: string;
}
