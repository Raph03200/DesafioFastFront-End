export interface ResponseInterface<T>{
    dados: T;
    mensagem: string;
    Sucesso: boolean;
}