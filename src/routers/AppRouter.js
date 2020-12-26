import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { JournalScreen } from '../components/journal/JournalScreen'
import { AuthRouter } from './AuthRouter'

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={JournalScreen} />
                    <Route path='/auth' component={AuthRouter}/>

                    <Redirect to='/auth/login' />

                </Switch>
            </div>
        </Router>
    )
}
