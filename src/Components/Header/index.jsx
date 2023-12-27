import { Container, Logo, Search, Profile } from "./styles";
import { Input } from "../Input";
import { FaSearch } from "react-icons/fa";

export const Header = () => {
  return (
    <Container>
      <Logo>RocketMovies</Logo>

      <Search>
        <Input icon={FaSearch} placeholder="Pesquisar pelo titulo" />
      </Search>

      <Profile>
        <div>
          <strong>Marcelo Lima</strong>
          <button>sair</button>
        </div>
        <a href="#">
          <img
            src="https://github.com/MarceloMLR.png"
            alt="Imagem do usuario"
          />
        </a>
      </Profile>
    </Container>
  );
};
