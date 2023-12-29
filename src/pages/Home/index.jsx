import { Container, Content } from "./styles";
import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { HiPlus } from "react-icons/hi";
export const Home = () => {
  return (
    <Container>
      <Header />

      <Content>
        <div>
          <h1>Meus Filmes</h1>
          <Button icon={HiPlus} title="Adicionar filme" />
        </div>
      </Content>
    </Container>
  );
};
