class Produto {
    id: number
    NomeProduto: string
    TexApresent: string
    ImgProd: string

    constructor(
        id: number,
        NomeProduto: string,
        TexApresent: string,
        ImgProd: string

    ) {
        this.id = id
        this.NomeProduto = NomeProduto
        this.TexApresent = TexApresent
        this.ImgProd = ImgProd
    }
}


export default Produto