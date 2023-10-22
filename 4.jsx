function NavBar() {
    let heads = ["Home", "About Us", "Profile", "Test"];
    return (
        <div className="nav-bar">
            <div className="nav">
                <ul>
                    <a href="#" className="nav-link"><li>{heads[0]}</li></a>
                    <a href="#" className="nav-link"><li>{heads[1]}</li></a>
                    <a href="#" className="nav-link"><li>{heads[2]}</li></a>
                    <a href="#" className="nav-link"><li>{heads[3]}</li></a>
                </ul>
            </div>
        </div>
    );
}

ReactDOM.render(
    <NavBar />,
    document.querySelector(".main")
);
