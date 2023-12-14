export type Transaction = {
    id: number;
    name: string;
    card:string;
    value: number;
    isDone: boolean;
}

export const TransactionTamplate = [
    "Id",   
    "Nome", 
    "Valor", 
    "Cartão",
    "Executado",
]
