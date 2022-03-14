export default function User() {
    const user = [{ userName: "catanacomics", image: "/img/catanacomics.svg", name: "Catana" }];

    return (
        <div class="usuario">
            <div>
                {user.map(user => <img src={user.image} />)}
            </div>
            <div class="texto">
                <div>
                    {user.map(user => <strong>{user.userName}</strong>)}
                </div>
                {user[0].name}
            </div>
        </div>
    );
}