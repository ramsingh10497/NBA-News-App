import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/home/Home'
import News from './components/News/News'
import SignIn from './components/Signin/SignIn'
import SignOut from './components/Signout/SignOut'
import Videos from './components/Videos/Videos';
import classnames from 'classnames';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import NewsArticles from './components/Articles/News/Post/NewsArticles'
// import Layout from './hoc/layout/Layout'


const useStyles = makeStyles((theme) => ({
    content: {
   
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: '240px',
    },
    contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    // marginLeft: 0,
    },
}));

function Routes({ open }) {
    const classes = useStyles();
    return (
        <div
             className={classnames(classes.contentShift,{
            [classes.content]: open,
            })}
        >
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Home" exact component={Home} />
                <Route path="/News" exact component={News} />
                <Route path="/articles/:id" component={NewsArticles} />
                <Route path="/Videos" exact component={Videos} />
                <Route path="/SignIn" exact component={SignIn} />
                <Route path="/SignOut" exact component={SignOut} />
            </Switch>
        </div>
    )
}

export default Routes
