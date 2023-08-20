import { SHeader, Logo } from "./styles"
import EfoodLogo from '../../images/logo.png'

const Header = () => (
    <SHeader>
        <div className="Container">

            <Logo>
                <img src={EfoodLogo} alt="LogoEfood" />
            </Logo>
            <h2 className="FontG">Viva experiências gastronômicas no conforto da sua casa</h2>
        </div>
    </SHeader>
)


export default Header