import { SHeader, Logo, Hero } from "./styles"
import EfoodLogo from '../../images/logo.png'

const Header = () => (
    <SHeader>
        <Hero >

            <Logo>
                <img src={EfoodLogo} alt="LogoEfood" />
            </Logo>
            <h2 className="FontG">Viva experiências gastronômicas no conforto da sua casa</h2>
        </Hero>
    </SHeader>
)


export default Header