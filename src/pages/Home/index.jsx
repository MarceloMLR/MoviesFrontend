import { Container, Content, FilmsWrapper, Head } from "./styles";
import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { HiPlus } from "react-icons/hi";
import { FilmCard } from "../../Components/FilmCard";
export const Home = () => {
  return (
    <Container>
      <Header />

      <Content>
        <Head>
          <h1>Meus Filmes</h1>
          <Button icon={HiPlus} title="Adicionar filme" />
        </Head>

        <FilmsWrapper>
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
          <FilmCard />
        </FilmsWrapper>
      </Content>
    </Container>
  );
};
