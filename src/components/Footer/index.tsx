import { SFooter, Logo, Hero, STexto } from "./styles"
import EfoodLogo from '../../images/logo.png'

const Footer = () => (
    <SFooter >
        <Hero className="Container">

            <Logo>
                <img src={EfoodLogo} alt="LogoEfood" />
            </Logo>
            <STexto>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade dos produtos é toda do estabelecimento contratado. </STexto>
        </Hero>
    </SFooter>
)


export default Footer