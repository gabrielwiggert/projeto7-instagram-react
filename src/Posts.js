import TopoPost from './TopoPost';
import FundoPost from './FundoPost';

export default function Posts() {
	return (
		<div>
			<Post imagem="/img/dog.svg" />
		</div>
	);
}

function Post(props) {
    return (
        <div class="post">
        <TopoPost />

        <div class="conteudo">
          <img src={props.imagem} />
        </div>

        <FundoPost />

        </div>
    );
}