import React, { useEffect } from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Navi from './components/Navbar/Navi'
import Mainpages from './pages/MainPages'

const App = () => {
    return (
        <Router>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 mt-4 p-0">
                        <Navi />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <Mainpages />
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default App

