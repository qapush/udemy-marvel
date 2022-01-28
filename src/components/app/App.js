import { MainPage, ComicsPage, Page404, SingleComicPage } from '../pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import AppHeader from "../appHeader/AppHeader";




const App = () => {

    return (
        <Router>
            <div className="app">
                <AppHeader/>
                <main>
                    <Switch>
                        <Route path="/" exact>
                            <MainPage/> 
                        </Route>
                        <Route path="/comics" exact>
                            <ComicsPage/>
                        </Route>
                        <Route path="/comics/:comicId" exact>
                            <SingleComicPage/>
                        </Route>
                        <Route path="*">
                            <Page404/>
                        </Route>
                    </Switch>
                </main>
            </div>
        </Router>
    )

}

export default App;