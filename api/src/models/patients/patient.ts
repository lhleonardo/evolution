import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from './address';
import { Contact } from './contact';

@Entity('patients')
export class Patient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ name: 'birth_date' })
  birthDate: Date;

  @Column()
  sex: 'm' | 'f';

  @Column({ name: 'country_of_birth' })
  countryOfBirth: string;

  @Column()
  ethnicity: string;

  @Column({ name: 'blood_type' })
  bloodType: string;

  @Column(() => Address)
  address: Address;

  @Column(() => Contact)
  contact: Contact;
}
