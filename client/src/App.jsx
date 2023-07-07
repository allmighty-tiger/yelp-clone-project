import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Updatepage from './routes/Updatepage'
import RestaurantdetailPage from './routes/RestaurantdetailPage'
import Home from './routes/Home'

const App = () => {
    return <div>
    <Router>
        <Routes>
            <Route exact path="/" component={Home}/>
            <Route exact path="/restaurants/:id/update" component={Updatepage}/>
            <Route exact path="/restaurants/:id" component={RestaurantdetailPage}/>
       </Routes>
    </Router>
    </div>
}

export default App