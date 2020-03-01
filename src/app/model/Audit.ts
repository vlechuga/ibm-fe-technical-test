import { CreditCard } from './CreditCard';
import { Client } from './Client';

export class Audit {
  id: number;
  description: String;
  amount: String;
  creationDate: String;
  card: CreditCard;
  client: Client;
}
