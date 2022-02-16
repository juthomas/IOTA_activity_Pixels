import "./App.css";
import Level11 from "./level-1/level-1-1";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Level11 />} />
					</Routes>
				</BrowserRouter>
			</header>
		</div>
	);
}

export default App;
