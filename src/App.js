import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComponent from "./home/HomeComponent";
import NotFound from "./home/NotFound";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomeComponent />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
