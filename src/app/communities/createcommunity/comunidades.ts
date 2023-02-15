export class Comunidades {
    constructor (
        public name:string,
        public description:string,
        public master:number
    ){}
        
}
export class Com_Usu {
    constructor (
        public id_comunity: number,
        public id_user: number
    ){}
}