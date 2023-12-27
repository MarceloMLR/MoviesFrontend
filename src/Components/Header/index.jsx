import { Container, Logo, Search } from "./styles";
import { Input } from "../Input";
import { FaSearch } from "react-icons/fa";

export const Header = () => {
  return (
    <Container>
      <Logo>RocketMovies</Logo>

      <Search>
        <Input icon={FaSearch} placeholder="Pesquisar pelo titulo" />
      </Search>

      <div>Profile</div>
    </Container>
  );
};
