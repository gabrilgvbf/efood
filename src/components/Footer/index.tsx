import { SFooter, Logo, Hero, STexto, RedesSociais } from "./styles"
import EfoodLogo from '../../images/logo.png'
import Instagram from '../../images/instagram.png'
import Facebook from '../../images/facebook.png'
import twitter from '../../images/twitter.png'

const Footer = () => (
    <SFooter >
        <Hero className="Container">

            <Logo>
                <img src={EfoodLogo} alt="LogoEfood" />
            </Logo>
            <RedesSociais>
                <img src={Instagram} alt="Instagram" />
                <img src={Facebook} alt="Facebook" />
                <img src={twitter} alt="Tiwitter" />

            </RedesSociais>
            <STexto>A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade<br /> dos produtos é toda do estabelecimento contratado. </STexto>
        </Hero>
    </SFooter>
)


export default Footer