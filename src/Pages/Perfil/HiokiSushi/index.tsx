import React, { useState } from 'react';
import {
    CardS,
    HeaderP,
    TextoP,
    ImagemP,
    BotaoP,
    DescriçãoP,
    Tag,
    Popup,
    TelaLateral,
    Btclose,
} from '../../../components/PerfilCard/styles';
import Pjapones from '../../../images/pjapones.png';
import Listalateral from '../../../components/ListaCarrinho/index';
import { PerfilLHiokiSushi } from '../../../components/store/reducers/Produtos';
import Produto from '../../../models/Produtos';

interface CardProps {
    produto: {
        id: number;
        NomeProduto: string;
        TexApresent: string;
        ImgProd: string;
        NomePerfil: string;
    };
}

const PerfilHS: React.FC<CardProps> = () => {
    const [popupModal, setPopupModal] = useState(false);
    const [lateralModal, setLateralModal] = useState(false);
    const [selectedProduto, setSelectedProduto] = useState<Produto | null>(null); // Armazena o produto selecionado

    const OpenPopup = (produto: Produto) => {
        setPopupModal(true);
        setSelectedProduto(produto); // Define o produto selecionado
    };

    const ClosePopup = () => {
        setPopupModal(false);
        setSelectedProduto(null); // Limpa o produto selecionado ao fechar o modal
    };

    const OpenLateral = (produto: Produto) => {
        setLateralModal(true);
        setPopupModal(false);
        setSelectedProduto(produto); // Define o produto selecionado
    };

    const CloseLateral = () => {
        setLateralModal(false);
        setSelectedProduto(null); // Limpa o produto selecionado ao fechar o modal
    };

    return (
        <>
            {PerfilLHiokiSushi.itens.map((produto) => (
                <CardS key={produto.id}>
                    <ImagemP>
                        <img src={produto.ImgProd} alt={produto.NomeProduto} />
                    </ImagemP>
                    <DescriçãoP>
                        <HeaderP>
                            <h3>{produto.NomeProduto}</h3>
                        </HeaderP>
                        <TextoP>{produto.TexApresent}</TextoP>
                        <BotaoP onClick={() => OpenPopup(produto)}>Adicionar ao carrinho</BotaoP>
                    </DescriçãoP>
                </CardS>
            ))}
            {popupModal && selectedProduto && (
                <Popup>
                    <div className="overlay">
                        <Btclose>
                            <button onClick={ClosePopup}>&times;</button>
                        </Btclose>
                        <img src={Pjapones} alt={selectedProduto.NomeProduto} />
                        <div className="textoPoup">
                            <h3>{selectedProduto.NomePerfil}</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde omnis
                                dolorem quidem molestias voluptatum doloribus impedit excepturi,
                                praesentium obcaecati amet iure asperiores quae repellat pariatur velit modi eum ullam voluptatem.
                            </p>
                            <BotaoP style={{ width: 'auto', padding: '4px 7px' }} onClick={() => OpenLateral(selectedProduto)}>
                                Adicionar ao Carrinho - R$ 60,90
                            </BotaoP>
                        </div>
                    </div>
                </Popup>
            )}
            {lateralModal && (
                <TelaLateral>
                    <div className="overlay">
                        <Btclose>
                            <button onClick={CloseLateral}>&times;</button>
                        </Btclose>
                        <Listalateral />
                    </div>
                </TelaLateral>
            )}
        </>
    );
};

export default PerfilHS;