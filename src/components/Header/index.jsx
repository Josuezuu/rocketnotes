import {RiShutDownLine} from 'react-icons/ri';
import { Container, Profile, Logout } from "./styles";

export function Header(){
  return (
    <Container>
      <Profile to="/profile">
        <img src="http://github.com/josuezuu.png"
        alt="foto do usuário"/>

        <div>
          <span>Bem vindo</span>
          <strong>Josué Oliveira</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>

    </Container>
  );
}

