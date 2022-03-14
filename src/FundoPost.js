import ListaIonIconsPost from "./ListaIonIconsPost";
import IonIcon from "./IonIcon";

export default function FundoPost() {
    return (
        <div class="fundo">
            <div class="acoes">
                <div>
                    <ListaIonIconsPost />
                </div>
                <div>
                    <IonIcon name="bookmark-outline" />
                </div>
            </div>

            <Curtidas imagem="/img/adorable_animals.svg" curtidoPor="adorable_animals" numPessoas="99.159"/>

        </div>
    );
}

function Curtidas(props) {
    return (
        <div class="curtidas">
            <img src={props.imagem} />
            <div class="texto">
                Curtido por <strong>{props.curtidoPor}</strong> e <strong>outras {props.numPessoas} pessoas</strong>
            </div>
        </div>
    );
}