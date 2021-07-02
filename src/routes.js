
import {Switch,Route,Link} from "react-router"
import HomePage from './screens/home/HomePage'
import ContactPage from './screens/Contact'

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/iletisim">
                <ContactPage />
            </Route>
        </Switch>
    )
}

export default Routes;