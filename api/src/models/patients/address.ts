import { Column } from 'typeorm';

export class Address {
  @Column({ name: 'address_location' })
  location: string;

  @Column({ name: 'address_cep' })
  cep: string;

  @Column({ name: 'address_number' })
  number: string;

  @Column({ name: 'address_description' })
  description: string;

  @Column({ name: 'address_city' })
  city: string;

  @Column({ name: 'address_uf' })
  uf: string;
}
