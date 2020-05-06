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
        <div className="mt-4">
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={pokeInfo.foto} className="card-img" alt="imagen-pokemon" />
                    </div>
                        <div className="col-md-8">
                            <div className="card-body text-center">
                                <h5 className="card-title text-uppercase mt-4">{pokeInfo.nombre}</h5>
                                <p className="card-text">Alto: {pokeInfo.alto} | Ancho: {pokeInfo.ancho}</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    ) : null
}

export default PokeDetail
