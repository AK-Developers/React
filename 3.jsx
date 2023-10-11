function Header() {
    return (
        <header>
            <h1>This is 3<sup>rd</sup> React File</h1>
        </header>
    );
}
function Main() {
    return (
        <div>
            <p className="main">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque autem beatae consequatur cum de</p>
        </div>
    );
}

ReactDOM.render(
    <div>
        <Header />
        <Main/>
    </div>, document.getElementById("root")
)