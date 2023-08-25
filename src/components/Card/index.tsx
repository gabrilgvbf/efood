import { CardS, Nota, HeaderP, TextoP, ImagemP, BotaoP, DescriçãoP, Tag } from "./styles"
import Pjapones from "./../../images/pjapones.png"
import Estrela from "./../../images/estrela.png"


const Card = () => (
    <>
        <CardS>
            <ImagemP>

                <img src={Pjapones}></img>
                <Tag><h3>Teste</h3></Tag>
            </ImagemP>

            <DescriçãoP>
                <HeaderP>
                    <h3> Hioki Sushi</h3>
                    <Nota><h3>4.6</h3><img src={Estrela}></img></Nota>
                </HeaderP>

                <TextoP>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda vel, pariatur dignissimos eligendi, consequatur nesciunt nam repellendus veniam accusantium nostrum perspiciatis, nulla eum architecto modi laborum. Placeat veritatis alias velit!</TextoP>

                <BotaoP>Saiba mais</BotaoP>
            </DescriçãoP>
        </CardS>
    </>
)


export default Card