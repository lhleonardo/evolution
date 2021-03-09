import {
  MigrationInterface, QueryRunner, Table, TableColumn,
} from 'typeorm';

export class CreatePatientsTable1615253135828 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(new Table({
      name: 'patients',
      columns: [
        new TableColumn({
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()',
        }),
        new TableColumn({ name: 'name', type: 'varchar' }),
        new TableColumn({ name: 'birth_date', type: 'date' }),
        new TableColumn({ name: 'sex', type: 'enum', enum: ['m', 'f'] }),
        new TableColumn({ name: 'country_of_birth', type: 'varchar' }),
        new TableColumn({ name: 'ethnicity', type: 'varchar' }),
        new TableColumn({ name: 'blood_type', type: 'varchar' }),
        new TableColumn({ name: 'address_location', type: 'varchar' }),
        new TableColumn({ name: 'address_cep', type: 'varchar' }),
        new TableColumn({ name: 'address_number', type: 'varchar' }),
        new TableColumn({ name: 'address_description', type: 'varchar' }),
        new TableColumn({ name: 'address_city', type: 'varchar' }),
        new TableColumn({ name: 'address_uf', type: 'varchar' }),
        new TableColumn({ name: 'contact_phone', type: 'varchar' }),
        new TableColumn({ name: 'contact_mail', type: 'varchar' }),

      ],
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('patients');
  }
}
