import { Container, Header, Avatar, Form } from "./styles";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiCamera, FiMail, FiLock, FiUser } from "react-icons/fi";
import { Input } from "../../Components/Input/";
import { Button } from "../../Components/Button";

export const Profile = () => {
  return (
    <Container>
      <Header>
        <a to="/">
          <FiArrowLeft />
          Voltar
        </a>
      </Header>
      <Form>
        <Avatar>
          <img src="https://github.com/MarceloMLR.png" alt="Foto do usuario" />
          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input placeholder="Nome" type="text" icon={FiUser} />

        <Input placeholder="E-mail" type="text" icon={FiMail} />

        <Input placeholder="Senha Atual" type="password" icon={FiLock} />

        <Input placeholder="Nova Senha" type="password" icon={FiLock} />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
};
