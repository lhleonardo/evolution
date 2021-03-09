import { Column } from 'typeorm';

export class Contact {
  @Column({ name: 'contact_phone' })
  phone: string;

  @Column({ name: 'contact_mail' })
  mail: string;
}
