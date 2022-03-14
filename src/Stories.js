export default function Stories() {
    return (
        <div class="stories">

            <Story imagem="/img/9gag.svg" usuario="9gag"/>
            <Story imagem="/img/meowed.svg" usuario="meowed"/>
            <Story imagem="/img/barked.svg" usuario="barked"/>
            <Story imagem="/img/nathanwpylestrangeplanet.svg" usuario="nathanwpylestrangeplanet"/>
            <Story imagem="/img/wawawicomics.svg" usuario="wawawicomics"/>
            <Story imagem="/img/respondeai.svg" usuario="respondeai"/>
            <Story imagem="/img/filomoderna.svg" usuario="filomoderna"/>
            <Story imagem="/img/memeriagourmet.svg" usuario="memeriagourmet"/>

        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    );
}

function Story(props) {
    return(
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