// ALLA FUNKTIONER MED STOR BOKSTAV

ReactDOM.createRoot(document.querySelector("#root")).render(App());


function App() {

    //får endast return ett element, därför måste alltid return ha en div
    return (
        <div>
            <Header></Header>
            <h2>React-Client</h2>

            <Element></Element>
        </div>
    );
};

function Element(){

    const [element, setElement] = React.useState([]);

    React.useEffect(()=>{

    }, [])


    async function getElement(){
        const res = await fetch("/element");
        const data = await res.json();
        setElement(data);
    };

    return(
        <div>
            <h3>Element från servern</h3>
            {JSON.stringify(element)}
        </div>
    );
};

function Header(){
    return(
        <header>
            <nav>
                <a href="./">Homepage</a>
            </nav>
        </header>
    );
}
