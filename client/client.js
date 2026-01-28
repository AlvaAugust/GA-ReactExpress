// ALLA FUNKTIONER MED STOR BOKSTAV

ReactDOM.createRoot(document.querySelector("#root")).render(App());


function App() {

    //får endast return ett element, därför måste alltid return ha en div
    return (
        <div>
            <Header></Header>
            <h2>React-Client</h2>

            <Post></Post>
        </div>
    );
};

function Post(){
    const [post, setPost] = React.useState([]);
    React.useEffect(()=>{
        getPost();
    }, [])

    async function getPost(){
        const res = await fetch("/post");
        const data = await res.json();
        setPost(data);
    };

    async function delP(id){

        // Skicka en delete request till servern
        const res = await fetch("/post/"+id,{
            method: "DELETE"
        });
        if(res.status == 200)
            setPost(prev => prev.filter(p=>p.id != id));
    };

    return(
        <div>
            <h2>Element från servern</h2>
            {post.map(p=>(
                <div class="post" key={p.id}>
                    <h3>{p.brand}</h3> 
                    <h4>{p.id}</h4>                   
                    <h5><i>{p.price}</i></h5> 
                    <button onClick={()=>(delP(p.id))}>Delete</button>                   
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
