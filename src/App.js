import { Container,makeStyles } from '@material-ui/core'
import React from 'react'
import Header1 from './components/header/header1'
import Layout from './hoc/layout/Layout';
import Routes from './Routes';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[300],
    padding: 0,
  }
}))

function App() {
  const classes = useStyles()
  return (
    <Container className={classes.root}>
      <Layout />
      {/* <Routes /> */}
    </Container>
  )
}

export default App

