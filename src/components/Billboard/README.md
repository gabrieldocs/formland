## Billboard Component

O componente de `Billboard` possui uma estrutura bastante simples, seguindo a 
fisolofia de módulos do Angular. 

Todos os arquivos necessários para o funcionamento do componente estão disponíveis
dentro da pasta do próprio componente.

### Tabela de conteúdos

- Arquivos do componente
- Implementação geral
- Configuração do service
- Como fazer uso do componente e do contexto global
- Caveats

## Arquivos do componente

|Arquivo|Propósito|
|------|------|
|index.tsx| Arquivo responsável por importar a View, Contexts e exportar o componente|
|billboard.view.tsx|Arquivo que realiza a implementação da View e apresentação dos dados|
|billboard.service.tsx|Arquivo que realiza a conexão com APIs externas|
|billboard.context.tsx|Arquivo responsável por centralizar o estado global do módulo|


## Implementação geral

Estou utilizando a estrutura de `Functional Components` do React ao lado da arquitetura 
ou organização próxima à que tenho encontrado em alguns artigos que definem um modelo próximo do ideal.

A estrutura geral se aproxima da filosofia do Angular, reforçando a separação de procupações e o isolamento
proposto no SOLID.

## Configuração do Service

São responsabilidades do Service implementar a conexão com a API, por meio de uma 
instância do Axios e algumas funções que fazem o consumo e o envio de dados
para o backend.

## Caveats

### Problemas conhecidos

Alguns problemas conhecidos aqui são: estrutura geral do Hook, extrutura de exportação,
dificuldade em ordenar props passadas para o `createContext`. Estes problemas se repetem
independente do arquivo ou `context`, pois a maioria dos tutoriais que encontrei até o momento
não abordam o assunto de forma prática, ou não utilizam arquivos de `tsconfig` configurados
com e a flag `--template=typescript`