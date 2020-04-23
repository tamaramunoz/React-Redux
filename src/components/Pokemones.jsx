import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { obtenerPokemonesAccion, siguientePokemonAccion, anteriorPokemonAccion, pokeDetalleAccion } from '../redux/pokeDucks'
import PokeDetail from './PokeDetail'

const Pokemones = () => {

    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemones.results)
    // console.log(pokemones);
    const next = useSelector(store => store.pokemones.next)
    const previous = useSelector(store => store.pokemones.previous)

    useEffect(() => {
        const fetchData = () => {
            dispatch(obtenerPokemonesAccion())
        }
        fetchData()
    }, [dispatch])

    return (
        <div className="row">
            <div className="col-md-6">
                <h3>Lista de pokemones</h3>
                
            <div className="d-flex justify-content-between">
                {
                    pokemones.length === 0 &&
                    <button 
                        className="btn btn-dark"
                        onClick={() => dispatch(obtenerPokemonesAccion())}>Get pokemones</button>
                }
                {
                    next &&
                    <button 
                        className="btn-next"
                        onClick={() => dispatch(siguientePokemonAccion())}>Siguiente</button>
                }
                {
                    previous &&
                    <button 
                        className="btn-next"
                        onClick={() => dispatch(anteriorPokemonAccion())}>Anterior</button>
                }
            </div>

                <ul className="list-group mt-5">
                    {
                        pokemones.map(item => (
                            <li key={item.name} className="list-group-item text-uppercase">
                                {item.name}
                                <button 
                                    className="btn-data btn-sm float-right"
                                    onClick={ () => dispatch(pokeDetalleAccion(item.url))}
                                
                                >Info</button>
                            </li>
                        ))
                    }
                </ul>

            </div>
            <div className="col-md-6 mt-5">
                <h3>Detalle Pokemon</h3>
                <PokeDetail />
            </div>
        </div>
    )
}

export default Pokemones
