import { SHeader, Logo, Hero, ImgHero } from "./styles"
import EfoodLogo from '../../images/logo.png'


const PerfilHeader = () => (
    <SHeader >
        <Hero className="Container">
            <h3>Restaurantes</h3>
            <Logo>
                <img src={EfoodLogo} alt="LogoEfood" />
            </Logo>
            <h3>0 produto(s) no carrinho</h3>
        </Hero>

    </SHeader>
)


export default PerfilHeader