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
        getElement();
    }, [])

    async function getElement(){
        const res = await fetch("/element");
        const data = await res.json();
        setElement(data);
    };

    async function delE(id){
        alert(id)

    }

    return(
        <div>
            <h2>Element från servern</h2>
            {element.map(e=>(
                <div class="element" key={e.id}>
                    <h3>{e.brand}</h3> 
                    <h4>{e.id}</h4>                   
                    <h5><i>{e.price}</i></h5> 
                    <button onClick={()=>(delE(e.id))}>Delete</button>                   
                </div>
            ))}
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
