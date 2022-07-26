export interface IComentario{
  id?:number
  created?:string,
  email?:string,
  idUser?:number,
  updated?:string,
  idProduct?:number,
  comment?:string

}


export interface IFormularioComentario{

  email?:string,
  idProduct?:number,
  comment?:string

}