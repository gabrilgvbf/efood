import { profileEnd } from "console"

class Perfil {
    id: number
    NomePerfil: string
    Nota: number
    TexApresent: string
    ImgPerfil: string
    PaisTipico: string
    ProdutosPg: string

    constructor(
        id: number,
        NomePerfil: string,
        Nota: number,
        TexApresent: string,
        ImgPerfil: string,
        PaisTipico: string,
        ProdutosPg: string

    ) {
        this.id = id
        this.NomePerfil = NomePerfil
        this.Nota = Nota
        this.TexApresent = TexApresent
        this.ImgPerfil = ImgPerfil
        this.PaisTipico = PaisTipico
        this.ProdutosPg = ProdutosPg
    }
}


export default Perfil






//FALTA ADICIONAR O ROUTER REACT - POR O CAMINHO DA PAGINA PRODUTOS COMO PROPRIEDADE NO PERFIL 