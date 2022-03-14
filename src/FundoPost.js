import ListaIonIconsPost from "./ListaIonIconsPost";
import IonIcon from "./IonIcon";

export default function FundoPost(props) {
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

            <Curtidas imagem={props.imagem} curtidoPor={props.curtidoPor} numPessoas={props.numPessoas}/>

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