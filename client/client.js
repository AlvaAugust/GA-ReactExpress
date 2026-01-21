ReactDOM.createRoot(document.querySelector("#root")).render(App());


function App() {
    return (
        <Header></Header>
        <div>
            <h2>React-Client</h2>
        </div>
    );
};

function Header(){
    return(
        <header>
            <nav>
                <a href="./">HOME</a>
            </nav>
        </header>
    );
}
