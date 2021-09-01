import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/home/Home'
import News from './components/News/News'
import SignIn from './components/Signin/SignIn'
import SignOut from './components/Signout/SignOut'
import Videos from './components/Videos/Videos'
import Layout from './hoc/layout/Layout'

function Routes() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/News" exact component={News} />
                <Route path="/Videos" exact component={Videos} />
                <Route path="/SignIn" exact component={SignIn} />
                <Route path="/SignOut" exact component={SignOut} />
            </Switch>
        </Layout>
    )
}

export default Routes
