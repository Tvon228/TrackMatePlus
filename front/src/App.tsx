import type { Component } from "solid-js"

import { Router, Route } from "@solidjs/router"

import Login from "./pages/authentication/Login/page"
import SignUp from "./pages/authentication/Sign_up/page"

const App: Component = () => {

	return (
		<Router>
			<Route path="/" component={Login} />
			<Route path="/user/sign_up" component={SignUp} />
		</Router>
	)
}

export default App
