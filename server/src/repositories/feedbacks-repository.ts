//Representa a camada de dados (manter separado a camada de aplicação (regras) e a de dados)
export interface FeedbackCreateData {
    type: string;
    comment: string;
    screenshot?: string;
}

export interface FeedbacksRepository {
    create: (data:FeedbackCreateData) => Promise<void>;
}
/*Toda função assíncrona vira uma promise, importante lembrar para avisar que há 
um erro quando formos usar o create*/