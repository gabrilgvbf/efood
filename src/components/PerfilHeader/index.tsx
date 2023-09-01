import { SHeader, Logo, Hero, ImgHero } from "./styles"
import EfoodLogo from '../../images/logo.png'
import imgperfil from '../../images/imgperfil.png'

const PerfilHeader = () => (
    <SHeader >
        <Hero className="Container">

            <Logo>
                <img src={EfoodLogo} alt="LogoEfood" />
            </Logo>
        </Hero>

    </SHeader>
)


export default PerfilHeader