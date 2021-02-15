import { useEffect, useState } from "react"

function PokeAPI(call) {
	const [pokemonData, setPokemonData] = useState()

	useEffect(() => {
		async function fetchPokemon(call) {
			const response = await fetch(call)
			const data = await response.json()
			await setPokemonData(data)
		}
		fetchPokemon(call)
	}, [])

	return pokemonData
}

export default PokeAPI
