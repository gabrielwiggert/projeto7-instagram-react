export default function TopoPost(props) {
  return (
    <div class="topo">
      <UsuarioPost imagem={props.imageUsuario} user={props.nomeUsuario}/>
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