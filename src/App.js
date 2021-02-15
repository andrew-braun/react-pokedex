import styles from "./app.module.css"
import Home from "./pages/home/Home"

function App() {
	return (
		<div className={styles.appContainer}>
			<Home></Home>
		</div>
	)
}

export default App
