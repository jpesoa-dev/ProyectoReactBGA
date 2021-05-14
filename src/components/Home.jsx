import React, {useState, useEffect} from 'react'
import ListaPropiedades from './ListaPropiedades'
import '../styles/home.css'
import Header from './Header.jsx'

const Home = (props) => {
    const [lista, setLista] = useState(props.data);
    useEffect(() => {
        setLista(props.data)
    }, []);
    
    function handleSubmit(text) {
        setLista(props.data.filter(element => element.title.toLowerCase().includes(text.toLowerCase())));
    }

    return (
        <div className="container-home">
            <Header data={0} handleSubmit = {handleSubmit}/>

            <div className="container-title">
                <span className="title-header">{props.title}</span>
                <span className="count">{`${props.data.length}+ stays`}</span>
            </div>
            
            <ListaPropiedades data={lista}/>
        </div>
    )
}

export default Home
