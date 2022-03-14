import IonIcon from "./IonIcon";

export default function Stories() {
    const stories = [
        { imagem: "/img/9gag.svg", usuario: "9gag" },
        { imagem: "/img/meowed.svg", usuario: "meowed" },
        { imagem: "/img/barked.svg", usuario: "barked" },
        { imagem: "/img/nathanwpylestrangeplanet.svg", usuario: "nathanwpylestrangeplanet" },
        { imagem: "/img/wawawicomics.svg", usuario: "wawawicomics" },
        { imagem: "/img/respondeai.svg", usuario: "respondeai" },
        { imagem: "/img/filomoderna.svg", usuario: "filomoderna" },
        { imagem: "/img/memeriagourmet.svg", usuario: "memeriagourmet" }
    ];

    return (
        <div class="stories">
                {stories.map(story => <Story imagem={story.imagem} usuario={story.usuario} />)}

            <div class="setinha">
                <IonIcon name="chevron-forward-circle" />
            </div>
        </div>
    );
}

function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.imagem} />
            </div>
            <div class="usuario">
                {props.usuario}
            </div>
        </div>
    );
}