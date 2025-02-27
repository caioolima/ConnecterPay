# Calculadora de Parcelas (Connecter Pay)- Teste Técnico FlexLabs

Este projeto foi desenvolvido como parte do teste técnico para a equipe de tecnologia do GrupoFlex (FlexLabs). A aplicação tem como objetivo calcular um novo valor de parcela de uma dívida, removendo juros abusivos aplicados por bancos. O valor da parcela é recalculado com a seguinte fórmula:

**(Valor da parcela / 2) + 7,50**

## Funcionalidades

1. **Formulário de Captação de Dados:**
   - Nome completo
   - E-mail
   - Telefone
   - Data de Nascimento

2. **Calculadora de Parcelas:**
   - Valor total da dívida
   - Valor da parcela da dívida
   - Número total de parcelas
   - Número de parcelas pagas
   - Cálculo do novo valor da parcela (com a fórmula mencionada).

3. **Persistência de Dados:**
   - Utilização do `localStorage` para armazenar os dados preenchidos no formulário e o valor calculado.

4. **Exibição dos Dados em um Dialog (Modal):**
   - Após a submissão do formulário, os dados preenchidos, juntamente com o valor da nova parcela, são exibidos em um dialog/modal.
   - O modal apresenta os dados armazenados de forma permanente, incluindo o valor calculado da parcela.

### 5. Exibição dos Dados na Página de Histórico

- Após o preenchimento do formulário, os dados pessoais do usuário podem ser encontrados na página de histórico.
- Na mesma página, é apresentada uma **tabela** contendo todas as simulações feitas pelo usuário, incluindo detalhes como:
  - O valor da parcela calculado.
  - Outras informações relevantes da simulação.
- A tabela permite ao usuário visualizar de forma clara e organizada todo o seu histórico de simulações.
  
## Tecnologias Utilizadas

- **React** (para construção da interface)
- **Next.js** (estrutura do projeto)
- **React Hook Form** (para gerenciamento e validação dos formulários)
- **Tanstack React Query** (para mutação de dados)
- **shadcn** (para estilização de componentes)
- **zod** (para validação de dados)
- **localStorage** (para persistência dos dados)

## Como Rodar o Projeto

1. Clone este repositório para a sua máquina local:
   ```bash
   git clone 

2. Navegue até a pasta raiz do projeto:
   ```bash
   cd connecter-pay

3. Instale as dependências do projeto:
    ```bash
    npm install

4. Execute o projeto:
    ```bash
    npm run dev

**Isso irá iniciar o servidor de desenvolvimento em http://localhost:3000.**

## Como Funciona

1. O usuário preenche o formulário com seus dados pessoais e informações do contrato.
2. Após preencher o formulário, o valor da nova parcela é calculado com base na fórmula fornecida.
3. Os dados do formulário, juntamente com o valor da nova parcela, são armazenados no `localStorage`.
4. Após o envio do formulário, os dados armazenados (incluindo o valor calculado da parcela) são exibidos em um dialog/modal.
5. O modal exibe as informações de forma clara e organizada, permitindo ao usuário visualizar todos os dados registrados.
6. Em seguida todos os dados passados pelo usuário podem ser visualizados na página histórico, como os dados pessoais e uma tabela que consta todas as simulações realizadas pelo mesmo. Caso o usuário queira excluir os dados da tabela, ele pode clicar mo botão limpar simulãções.

## Considerações

- A persistência dos dados foi implementada utilizando o `localStorage`, garantindo que os dados não sejam perdidos após o fechamento do navegador.
- A validação do formulário é feita com o uso da biblioteca Zod, garantindo que todos os campos sejam preenchidos corretamente antes da submissão.
- O cálculo da parcela é simples e segue a fórmula solicitada.

## License

Este projeto é de código aberto e pode ser utilizado, modificado ou distribuído conforme necessário.
