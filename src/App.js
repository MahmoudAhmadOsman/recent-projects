import { BrowserRouter } from "react-router-dom";
import HomeComponent from "./home/HomeComponent";

function App() {
	return (
		<BrowserRouter>
			<div>
				<HomeComponent />
			</div>
		</BrowserRouter>
	);
}

export default App;
