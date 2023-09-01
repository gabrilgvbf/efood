import { CardS, HeaderP, TextoP, ImagemP, BotaoP, DescriçãoP, Tag } from "./styles"
import Pjapones from "./../../images/pjapones.png"
import Estrela from "./../../images/estrela.png"


const PerfilCard = () => (
    <>
        <CardS>
            <ImagemP>

                <img src={Pjapones}></img>

            </ImagemP>

            <DescriçãoP>
                <HeaderP>
                    <h3> Hioki Sushi</h3>

                </HeaderP>

                <TextoP>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda vel, pariatur dignissimos eligendi, consequatur nesciunt nam repellendus veniam accusantium nostrum perspiciatis, nulla eum architecto modi laborum. Placeat veritatis alias velit!</TextoP>

                <BotaoP>Adicionar ao carrinho</BotaoP>
            </DescriçãoP>
        </CardS>
    </>
)


export default PerfilCard