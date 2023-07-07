import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Updatepage from './routes/Updatepage'
import RestaurantdetailPage from './routes/RestaurantdetailPage'
import Home from './routes/Home'

const App = () => {
    return <div>
    <Router basename='/'>
        <Routes>
            <Route path="*" element={<Home />}/>
            <Route exact path="restaurants/:id/update" component={<Updatepage />}/>
            <Route exact path="restaurants/:id" component={<RestaurantdetailPage />}/>
       </Routes>
    </Router>
    </div>
}

export default App
