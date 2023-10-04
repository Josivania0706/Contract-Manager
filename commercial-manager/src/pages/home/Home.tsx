import { Grafico } from "../../components/grafico/Grafico"
import { Dashboard } from "../index"
import { ConatinerGrafico, Container, ContainerContratos, ContainerSolucoes, Title } from "./styleHome"


export const Home: React.FC = () => {
    return (
        <Dashboard>
            <Container>
                <Title>Desempenho anual</Title>
                <ConatinerGrafico>
                    <Grafico />
                </ConatinerGrafico>

                <ContainerContratos>
                    <ContainerSolucoes>
                        <Title>Soluções</Title>
                    </ContainerSolucoes>

                    <ContainerSolucoes>
                        <Title>Contratos</Title>
                    </ContainerSolucoes>
                </ContainerContratos>

            </Container>
        </Dashboard>
    )
}