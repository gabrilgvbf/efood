import { CardS, HeaderP, TextoP, ImagemP, BotaoP, DescriçãoP, Tag, Popup } from "./styles"
import Pjapones from "./../../images/pjapones.png"
import Estrela from "./../../images/estrela.png"
import { useState } from "react"





const PerfilCard = () => {

    const [popupModal, setpopupModal] = useState(false)

    const OpenPopup = () => setpopupModal(true)
    const ClosePopup = () => setpopupModal(false)

    return (
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

                    <BotaoP onClick={OpenPopup}>Adicionar ao carrinho</BotaoP>
                </DescriçãoP>

            </CardS>
            {popupModal && (
                <Popup>
                    <div id="popup1" className="overlay">
                        <div className="popup">
                            <h3>Here i am</h3>
                            <button className="close" onClick={ClosePopup}>&times;</button>
                        </div>
                    </div>
                </Popup>
            )}
        </>
    )

}


export default PerfilCard