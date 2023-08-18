import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Updatepage from './routes/Updatepage'
import RestaurantdetailPage from './routes/RestaurantdetailPage'
import Home from './routes/Home'
import { RestaurantsContextProvider } from './context/RestaurantsContext'

const App = () => {
    return ( <RestaurantsContextProvider> <div className='container'>
    <Router basename='/'>
        <Routes>
            <Route path="*" element={<Home />}/>
            <Route exact path="restaurants/:id/update" element={<Updatepage />}/>
            <Route exact path="restaurants/:id" element={<RestaurantdetailPage />}/>
       </Routes>
    </Router>
    </div>
    </RestaurantsContextProvider>
    )
}

export default App
