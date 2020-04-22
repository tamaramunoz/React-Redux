import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { obtenerPokemonesAccion, siguientePokemonAccion } from '../redux/pokeDucks'

const Pokemones = () => {

    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemones.results)
    console.log(pokemones);

    return (
        <div>
            lista de pokemones
            <button onClick={ () => dispatch(obtenerPokemonesAccion()) }>Get pokemones</button>
            <button onClick={ () => dispatch(siguientePokemonAccion()) }>Siguiente</button>
            <ul>
                {
                    pokemones.map(item => (
                        <li key={item.name}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pokemones
