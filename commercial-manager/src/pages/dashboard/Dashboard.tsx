import { ContainerHome, ContainerQuad, Footer, Header, Image1, Image2, ImageLogo, ImagePato, TextFooter } from "./styleDashboard"
import img from '../../assets/fundo/ondapng 2.png'
import imgPato from '../../assets/fundo/pato.png'
import logo from '../../assets/iconesInclude/Logomarca - Branco.png'

interface IBasePageProps {
    children: React.ReactNode;

}

export const Dashboard: React.FC<IBasePageProps> = ({ children }) => {
    return (
        <ContainerHome>

            <Image1 src={img} />
            
            <Header>
                <ImageLogo src={logo} />
            </Header>
            
            <ContainerQuad>
                {children}
            </ContainerQuad>

            <Footer>
                <TextFooter>Desenvolvido por IncludeJr</TextFooter>
                <ImagePato src={imgPato} />
                <Image2 src={img} />
            </Footer>

        </ContainerHome>
    )
}