import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { pokeDetalleAccion } from '../redux/pokeDucks'

const PokeDetail = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = () => {
            dispatch(pokeDetalleAccion())
        }
        fetchData()
    }, [dispatch])

    const pokeInfo = useSelector(store => store.pokemones.unPokemon)
    // console.log(pokeInfo);


    return pokeInfo ? (
        <div className="card mt-4 text-center">
            <div className="card-body">
                <img src={pokeInfo.foto} alt="imagen-pokemon" className="img-fluid" />
                <div className="card-title text-uppercase">{pokeInfo.nombre}</div>
                <p className="card-text">Alto: {pokeInfo.alto} | Ancho: {pokeInfo.ancho}</p>
            </div>

        </div>
    ) : null
}

export default PokeDetail
