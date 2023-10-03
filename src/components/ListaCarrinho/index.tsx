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

        {/* <InfEntrega>
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


        </InfEntrega> */}



        {/* <InfEntrega>
            <h3>Pagamento - Valor a pagar R$ 60,90</h3>

            <label> Nome do cartão</label>
            <input />


            <div>
                <div>
                    <label> Número do cartão</label>
                    <input />
                </div>

                <div>
                    <label style={{ width: '87px' }}> CVV</label>
                    <input />
                </div>

            </div>

            <div>
                <div>
                    <label> Mês de vencimento</label>
                    <input />
                </div>

                <div>
                    <label> Ano de vencimento</label>
                    <input />
                </div>

            </div>


            <BotaoP style={{ backgroundColor: '#fff', margin: '24px 0 8px' }}>Finalizar pagamento</BotaoP>
            <BotaoP style={{ backgroundColor: '#fff' }}>Voltar para a edição de endereço</BotaoP>


        </InfEntrega> */}



        <InfEntrega>
            <h3>Pedido realizado - ORDER_ID</h3>
            <p>
                Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.<br /><br />

                Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.<br /><br />

                Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.<br /><br />

                Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
            </p>



            <BotaoP style={{ backgroundColor: '#fff', margin: '24px 0 8px' }}>Concluir</BotaoP>



        </InfEntrega>








    </>
)


export default Listalateral