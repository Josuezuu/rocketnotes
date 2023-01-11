import {Container, Links, Content} from './styles'
import {Header} from '../../components/Header'
import {Button} from '../../components/Button'
import {Section} from '../../components/Section'
import {Tag} from '../../components/Tag'
import {ButtonText} from '../../components/ButtonText'


export function Details(){
  
  return(
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio praesentium quidem rem quasi consequuntur ipsa explicabo, natus ad esse rerum aut sed voluptate aliquam, provident, labore eligendi sapiente ipsam voluptatibus?
          </p>
      <Section title="Links úteis">
        <Links>
          <li><a href='https://github.com/Josuezuu' target="_blank">https://github.com/Josuezuu</a></li>
          <li><a href='https://www.rocketseat.com.br' target="_blank">https://www.rocketseat.com.br</a></li>

        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="Express"/>
        <Tag title="Node"/>
      </Section>


      <Button title="Voltar" />
      </Content>
      </main>
    </Container>
    ) 
}