import { CardS, Nota, HeaderP, TextoP, ImagemP, BotaoP, DescriçãoP, Tag } from "./styles"
import { Link } from "react-router-dom"
import Estrela from "./../../images/estrela.png"
import ListaPerfil from "../store/reducers/Perfils"

interface CardProps {
    perfil: {
        id: number;
        NomePerfil: string;
        Nota: number;
        TexApresent: string;
        ProdutosPg: string;
    }
}
const Card: React.FC<CardProps> = () => {






    return (
        <>
            {
                ListaPerfil.itens.map((perfil) =>
                (
                    <CardS key={perfil.id}>
                        <ImagemP>

                            <img src={perfil.ImgPerfil}></img>
                            <Tag><h3>{perfil.PaisTipico}</h3></Tag>
                        </ImagemP>

                        <DescriçãoP>
                            <HeaderP>
                                <h3>{perfil.NomePerfil}</h3>
                                <Nota><h3>{perfil.Nota}</h3><img src={Estrela}></img></Nota>
                            </HeaderP>

                            <TextoP>{perfil.TexApresent}</TextoP>

                            <BotaoP><Link to={perfil.ProdutosPg}>Saiba mais</Link></BotaoP>
                        </DescriçãoP>
                    </CardS>
                )
                )
            }
        </>
    )

}


export default Card