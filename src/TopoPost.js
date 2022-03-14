export default function TopoPost() {
  return (
    <div class="topo">
      <UsuarioPost imagem="/img/barked.svg" user="barked"/>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>
  );
}

function UsuarioPost(props) {
  return (
    <div class="usuario">
      <img src={props.imagem} />
      {props.user}
    </div>
  );
}