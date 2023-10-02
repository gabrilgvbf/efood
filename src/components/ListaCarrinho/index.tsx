import React from "react";

import { Produto, ListaProdutos, InfEntrega } from "./styles";
import pjapones from "../../images/pjapones.png"
import { BotaoP } from "../PefilCard/styles"
const Listalateral = () => (
    <>
        {/* <ListaProdutos>
            <Produto>
                <img src={pjapones}></img>
                <h3>Nome do produto</h3>
            </Produto>
            <Produto>
                <img src={pjapones}></img>
                <h3>Nome do produto</h3>
            </Produto>
            <Produto>
                <img src={pjapones}></img>
                <h3>Nome do produto</h3>
            </Produto>
        </ListaProdutos>
        
              <div className="RodapeCarrinho">
                            <div className="Total">
                                <p>Valor Total</p>
                                <p>R$ 189,99</p>
                            </div>
                            <BotaoP>Continuar com a entrega</BotaoP>
                        </div>*/}

        <InfEntrega>
            <h3>Entrega</h3>

            <label> Quem irá receber</label>
            <input />

            <label> Endereço</label>
            <input />

            <label> Cidade</label>
            <input />

            <div>
                <div>
                    <label> CEP</label>
                    <input />
                </div>

                <div>
                    <label> Número</label>
                    <input />
                </div>

            </div>

            <label> Complemento (opcional)</label>
            <input />


            <BotaoP style={{ backgroundColor: '#fff', margin: '24px 0 8px' }}>Continuar com o pagamento</BotaoP>
            <BotaoP style={{ backgroundColor: '#fff' }}>Voltar para o carrinho</BotaoP>


        </InfEntrega>





    </>
)


export default Listalateral