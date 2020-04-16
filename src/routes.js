import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Auth from './Components/Auth/Auth'



//routing

export default (
<Switch>
<Route exact path='/' component={Competencies}/>
<Route path= '/register' component={Register}/>
<Route path='/dash' component={Dashboard}/>
</Switch>
)