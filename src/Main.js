import Posts from './Posts';
import Stories from './Stories'
import Sugestao from './Sugestao'

export default function Main() {
    return (
        <div class="corpo">
        <div class="esquerda">
            <Stories />
          <div class="posts">
            <Posts />
          </div>
        </div>

        <div class="sidebar">
          <div class="usuario">
            <img src="/img/catanacomics.svg" />
            <div class="texto">
              <strong>catanacomics</strong>
              Catana
            </div>
          </div>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            <Sugestao image="/img/bad.vibes.memes.svg" name="bad.vibes.memes"/>
            <Sugestao image="/img/chibirdart.svg" name="chibirdart"/>
            <Sugestao image="/img/razoesparaacreditar.svg" name="razoesparaacreditar"/>
            <Sugestao image="/img/adorable_animals.svg" name="adorable_animals"/>
            <Sugestao image="/img/smallcutecats.svg" name="smallcutecats"/>
          </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
      </div>
    );
}