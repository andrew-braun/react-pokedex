import React, { useState } from "react"
import Hamburger from "./Hamburger"
import HamburgerMenu from "./HamburgerMenu"

function HamburgerMenuContainer({ pokemonCards }) {
	const [menuIsOpen, setMenuIsOpen] = useState(false)
	return (
		<React.Fragment>
			<Hamburger menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
			<HamburgerMenu
				menuIsOpen={menuIsOpen}
				setMenuIsOpen={setMenuIsOpen}
				pokemonCards={pokemonCards}
			/>
		</React.Fragment>
	)
}

export default HamburgerMenuContainer
