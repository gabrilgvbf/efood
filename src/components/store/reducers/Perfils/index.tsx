import Perfils from "../../../../models/Perfils";
import Pjapones from "../../../../images/pjapones.png"
import Pmassas from "../../../../images/pmassas.png"
type ProdutosState = {
    itens: Perfils[]
}

const ListaPerfil: ProdutosState = {
    itens: [
        {
            id: 1,
            NomePerfil: "Hioki Sushi",
            Nota: 5.9,
            TexApresent: " Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
            ImgPerfil: Pjapones,
            PaisTipico: "Japonesa",
            ProdutosPg: "/PerfilHS"
        }
        ,
        {
            id: 2,
            NomePerfil: "La Dolce Vita Trattoria",
            Nota: 4.6,
            TexApresent: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
            ImgPerfil: Pmassas,
            PaisTipico: "Italiana",
            ProdutosPg: "/PerfilLDV"
        }
    ]
}


export default ListaPerfil