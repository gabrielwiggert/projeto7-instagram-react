import TopoPost from './TopoPost';
import FundoPost from './FundoPost';

export default function Posts() {
    const posts = [{imagemPost:"/img/gato-telefone.svg", imageUsuario:"/img/meowed.svg", userName:"meowed", curtidoPorImage:"/img/respondeai.svg",
                    curtidoPorUser:"respondeai", numPessoas:"101.523"},
                    {imagemPost:"/img/dog.svg", imageUsuario:"/img/barked.svg", userName:"Barked", curtidoPorImage:"/img/adorable_animals.svg",
                    curtidoPorUser:"adorable_animals", numPessoas:"99.101"}];

    return (
        <div>
            {posts.map(post => <Post imagemPost={post.imagemPost} imageUsuario={post.imageUsuario} userName={post.userName}
                        curtidoPorImage={post.curtidoPorImage} curtidoPorUser={post.curtidoPorUser} numPessoas={post.numPessoas}/>)}
        </div>
    );
}

function Post(props) {
    return (
        <div class="post">
            <TopoPost imageUsuario={props.imageUsuario} nomeUsuario={props.userName} />

            <div class="conteudo">
                <img src={props.imagemPost} />
            </div>

            <FundoPost imagem={props.curtidoPorImage} curtidoPor={props.curtidoPorUser} numPessoas={props.numPessoas} />

        </div>
    );
}