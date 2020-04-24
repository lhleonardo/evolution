

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

Como as clínicas de atendimento provem atendimentos a todos os tipos de pacientes, algumas informações se fazem necessárias a partir de sua faixa etária. 

Para fins de controle e emissão de comprovantes de atendimentos, os pacientes legalmente maiores de idade precisam obrigatoriamente informar os documentos (CPF e RG), salvo desses os menores de idade resultando assim na obrigatoriedade no preenchimento dos documentos de pelo menos 1 (um) dos parentescos informados.

Também é necessário armazenar no cadastro do paciente o termo de consentimento, caso seja autorizado pelo mesmo, de utilizar seus dados e/ou registros de mídia digital (vídeos, áudios, fotografias, etc) nas redes sociais do estabelecimento cujo objetivo seja divulgação ou supervisão interna no acompanhamento de evolução das consultas. 

### Funcionários/Profissionais
No âmbito de trabalho, os profissionais e funcionários serão aqueles que trabalham em prol do estabelecimento, exercendo ou não atendimento especializado aos pacientes. 

A diferença entre os registros se difere em acesso a dados sensíveis obtidos e gerados nas [Consultas](#consultas) que, por sua vez, só poderão ser acessados apenas por profissionais. 

Para generalizar, ambos os tipos são categorizados como funcionários. Entretanto, os *profissionais* possuem informações complementares sobre suas áreas de atuação e vinculação para prover determinados [Serviços.](#servicos)

As informações que devem ser armazenadas de um funcionário são:

 - **Básicas**
	 - Nome completo
	 - Data de Nascimento
	 - CPF/RG
	 - Sexo
	 - Data de Contratação
 - **Recebimento Monetário**
	 - Salário atual
	 - Carga Horária de Trabalho
		 - Grade de presença 

### Serviços
Os serviços são operações de atendimento disponíveis na clínica para atendimento aos pacientes. 

> Written with [StackEdit](https://stackedit.io/).
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTQ5ODkyODM5MywtMzg4MDQ4MDMsMjAwMj
cwMTAxNywzNTk3NDAwNTldfQ==
-->