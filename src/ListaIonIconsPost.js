export default function ListaIonIconsPost() {
    const itens = ["heart-outline", "chatbubble-outline", "paper-plane-outline"];

    return (
        <div>
            {itens.map(item => <ion-icon name={item}></ion-icon>)}
        </div>
    );
}