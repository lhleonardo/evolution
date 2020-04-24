

# Guia de Requisitos e Regras
Aqui estão descritos pequenos detalhes para auxiliar na implementação das funcionalidades da aplicação. 

A ideia é que o desenvolvimento seja de forma incremental com melhorias e adição de novas funcionalidades ao decorrer do tempo. 

O controle de evolução da plataforma será acompanhado a partir de lançamento de *issues* na plataforma. Elas terão o objetivo de centralizar relatos de bugs, solicitação de funcionalidades, melhorias de processo e centralização de metas entre os colaboradores. 

O controle de versão da aplicação será gerenciado também pela plataforma hospedada. Técnicas de integração e entrega contínua serão vinculadas as Actions presentes no Github. 

## Objetivo
Gerenciar uma clínica de atendimento a pacientes, com serviços diversos. A plataforma deve prover:

 - Gerenciamento de Pacientes
 - Gerenciamento de Funcionários/Profissionais
 - Gerenciamento de Serviços prestados
 - Controle de Consultas
 - Agenda de Atendimento
 - Disponibilidade de serviço
 - [...]

## Requisitos Funcionais

Descritos como funcionalidades no mais alto nível para entendimento da equipe. Composto por módulo/funcionalidade que deve ser implementada. 

### Pacientes
Os pacientes são entidades de atendimento direto da clínica. São pacientes que usufruem de serviços e marcam agendamentos/consultas com os profissionais presentes. 

As informações que devem ser armazenadas de um paciente são:

 - **Básicas**
	 - Nome completo
	 - Data de Nascimento
	 - Sexo
	 - Naturalidade
	 - Fator Sanguíneo
	 - Etnia
	 - CPF/RG (obrigatório para pacientes maiores de idade)
	 - Endereço
		 - CEP
		 - Logradouro
		 - Número
		 - Complemento
		 - Cidade/UF
	 - Contato
		 - Telefone
		 - Celular
		 - E-mail
 - **Parentescos** (listagem)
	 - Grau de parentesco
	 - Nome completo
	 - Profissão
	 - Data de Nascimento
	 - Informações de contato
	 - CPF/RG (obrigatório para pacientes menores de idade)
 - **Escolaridade** (opcional)
	 - Escola que frequenta
	 - Série
	 - Período
 - **Observações**
	 - Dados corporais
		 - Peso
		 - Altura
	 - Dados médicos
		 - Alergias
		 - Medicações
		 - Cirurgias
		 - [...]

Como as clínicas de atendimento provem atendimentos a todos os tipos de pacientes, algumas informações se fazem necessárias a partir de sua faixa etária. Para fins de controle e emissão de comprovantes de atendimentos, os pacientes legalmente maiores de idade precisam obrigatoriamente informar os documentos (CPF e RG), salvo desses os menores de idade resultando assim na obrigatoriedade no preenchimento dos documentos de pelo menos 1 (um) pa

> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbNDQzMDIwMTQyLC0zODgwNDgwMywyMDAyNz
AxMDE3LDM1OTc0MDA1OV19
-->