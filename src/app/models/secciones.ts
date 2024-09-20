import { Categoria } from "./categoria";

export interface Seccion{
    id:number,
    estado:string,
    seccion:string,
    categoria:Categoria
}