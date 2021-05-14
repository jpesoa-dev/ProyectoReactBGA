import React from 'react'
import Propiedad from './Propiedad'
import '../styles/listaPropiedades.css'

const ListaPropiedades = props => {
    let lista;
    if(props.data.length == 0){
      lista = <span className="SinResultados">No se encontraron resultados.</span>;
    }
    else{
        lista = props.data.map((element,key) => {
            return(
                <Propiedad data={element} key={key} />
            )
        })
    }

    return (
        <div className="lista-propiedades">
            { lista }
        </div>
    )
}


export default ListaPropiedades
