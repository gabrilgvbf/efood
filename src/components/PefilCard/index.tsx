import { CardS, HeaderP, TextoP, ImagemP, BotaoP, DescriçãoP, Tag, Popup, TelaLateral, Btclose } from "./styles"
import Pjapones from "./../../images/pjapones.png"
import Estrela from "./../../images/estrela.png"
import { useState } from "react"
import Listalateral from "../ListaCarrinho/index"





const PerfilCard = () => {

    const [popupModal, setpopupModal] = useState(false)

    const OpenPopup = () => setpopupModal(true)
    const ClosePopup = () => setpopupModal(false)


    const [lateralModal, setlateralModal] = useState(false)

    const Openlateral = () => {
        setlateralModal(true)
        setpopupModal(false)
    }
    const Closelateral = () => setlateralModal(false)



    return (
        <>
            {/* transformar tudo em lista  */}
            <CardS>
                <ImagemP>

                    <img src={Pjapones}></img>

                </ImagemP>

                <DescriçãoP>
                    <HeaderP>
                        <h3> Hioki Sushi</h3>

                    </HeaderP>

                    <TextoP>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda vel, pariatur dignissimos eligendi, consequatur nesciunt nam repellendus veniam accusantium nostrum perspiciatis, nulla eum architecto modi laborum. Placeat veritatis alias velit!</TextoP>

                    <BotaoP onClick={OpenPopup}>Adicionar ao carrinho</BotaoP>
                </DescriçãoP>

            </CardS>
            {popupModal && (
                <Popup>
                    <div className="overlay">
                        <Btclose><button onClick={ClosePopup}>&times;</button></Btclose>
                        <img src={Pjapones}></img>
                        <div className="textoPoup">
                            <h3>Hioki Sushi </h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Est sapiente doloribus nam atque cupiditate modi blanditiis
                                quia! Atque natus accusamus provident iure
                                debitis dolores iusto corrupti ratione sint
                                ipsum dolor sit amet consectetur adipisicing elit.
                                Est sapiente doloribus nam atque cupiditate modi blanditiis
                                quia! Atque natus accusamus provident iure
                                debitis dolores iusto corrupti ratione sint
                                <br /><br />Serve 2 pessoas.</p>
                            <BotaoP style={{ width: "auto", padding: "4px 7px" }} onClick={Openlateral}>Adicionar ao Carrinho - R$ 60,90</BotaoP>
                        </div>

                    </div>
                </Popup>
            )
            }
            {lateralModal && (
                <TelaLateral>
                    <div className="overlay">
                        <Btclose><button onClick={Closelateral}>&times;</button></Btclose>
                        <Listalateral />



                    </div>
                </TelaLateral>

            )}
        </>
    )

}


export default PerfilCard