import type { Component } from "solid-js"

import { Router, Route } from "@solidjs/router"

import Login from "./pages/authentication/Login/page"
import ForgotPass from "./pages/authentication/ForgotPass/page"
import CreateAccount from "./pages/authentication/CreateAccount/page"
import Layout from "./Layout"

const App: Component = () => {
	return (
		<Router>
			<Route path="/" component={Layout} />
			<Route path="/user/login" component={Login} />
			<Route path="/user/forgot_password" component={ForgotPass} />
			<Route path="/user/create_account" component={CreateAccount} />
		</Router>
	)
}

export default App
