class Produto {
    id: number
    NomeProduto: string
    TexApresent: string
    ImgProd: string
    NomePerfil: string

    constructor(
        id: number,
        NomeProduto: string,
        TexApresent: string,
        ImgProd: string,
        NomePerfil: string
    ) {
        this.id = id
        this.NomeProduto = NomeProduto
        this.TexApresent = TexApresent
        this.ImgProd = ImgProd
        this.NomePerfil = NomePerfil
    }
}


export default Produto