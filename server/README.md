#SOLID
1. Single Responsibility Principle
2. Open/Closed Principle
3. Liskov Substitution Principle
4. Interface Segregation Principle
5. Dependency Inversion Principle
                                                          
1. Cada classe tem uma responsabilidade única;
2. As classes da aplicação devem ser abertas para extensão nas fechadas para modificação;
3. Nós devemos poder substituir uma classe pai por uma herança dela e tudo continuar funcionando;
4. ...
5.

Prisma está sendo inversamente injetado, se quiser realizar modificações posso sem problemas

A aplicação não deve depender de coisas externas, as coisas externas dependem da aplicação para existir

// Esse caso de uso possui apenas um método, uma única responsabilidade
como visto no: submit-feedback-use-case.ts

routes.ts:
//MÉTODOS: |GET|POST|PUT|PATCH|DELETE Recurso atingido: '/feedbacks'

no routes.ts
O arquivo que precisar utilizar o SubmitFeedbackUserCase é quem passa para ele as dependências

Inversão de dependência
Não é o SubmitFeedbackUseCase que está importando o Prisma, estamos passando para ele como parâmetro o (Prisma)

const prismaFeedbacksRepository = new PrismaFeedbackRepository
const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository
)

Se estou criando uma aplicação que tem uma rota agora, mas dps vai ter 50 - 200 - 1000, o quanto antes é melhor saber disso.
Se eu criar apenas para funcionar, como faço com outras aplicações
SE EU NÃO FIZER ISSO VAI CHEGAR EM ALGUM MOMENTO DA APLICAÇÃO QUE VAI DAR A VONTADE DE RECRIAR TUDO DO 0

Pois tem alguma coisa que eu acho que sei, mas não sei que está fazendo meu código ser difícil de dar manutenção

Na maioria das vezes é porque estou com meu código muito ACOPLADO, dependendo de coisas externas, em vez das coisas externas dependerem do meu código.

Uma coisa que mexo em um lugar, despenca erros em outros lugares
Esse é o comum.
Siga as melhores práticas no melhor momento, enquanto a aplicação está NASCENDO.

REFATORAR APLICAÇÕES LEGADAS DÁ MUITO TRABALHO. E GERALMENTE NÃO ACONTECE. SE NÃO APLICAR OS PRINCÍPIOS E OS PADRÕES NOVOS, VAI CAIR NO MESMO LUGAR.

Programar e fazer o computador entender é fácil, programar para fazer outras pessoas entenderem que é difícil.

O MESMO SE APLICA AOS TESTES DE APLICAÇÃO

Se vc ainda encontra os bugs da sua aplicação em produção com cliente reclamando, ou se tem medo de fazer deploy de uma nova versão da sua aplicação, se isso acontece é porque você não escreveu testes

TRAZEM SEGURANÇA E CONFIANÇA NA HORA DE ADICIONAR NOVA FUNCIONALIDADE AO CÓDIGO E DE LIBERAR UMA NOVA FUNCIONALIDADE PARA PRODUÇÃO

TESTES UNITÁRIOS:
São testes que testam pequenas unidades da aplicação desacopladas do resto, cada teste testa uma função, sem testar como essa função se integra ao restanto do código, completamente desacoplada.

Testamos se o caso de uso realmente está fazendo tudo o que ele deveria fazer.

Nada de testar infra, isso vai além do teste, estaríamos testanto camada de aplicação que vão além do core da nossa regra de negócio.

Camada de infraestrutura: banco de dados, conexão com API externa, e isso foge do teste unitário.
Isso vai para um teste de integração, test end to end.
