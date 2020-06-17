import React, { useState } from 'react'
// import './style.css'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import sembakoo from '../resources/sembakoo.svg'
import background from '../resources/background.png'
import {useForm} from 'react-hook-form'
import {
    Sidenav,
    Nav,
    Dropdown,
    Navbar,
    Sidebar,
    Icon,
    Input,
    Button,
} from 'rsuite'
import Background from '../Background'
import FixedFooter from '../FixedFooter'
import FixedHeader from '../FixedHeader'

function App({open, toogle_open}) {

    console.log("background", background)

    return (
        <div className="h-100vh w-100vw">
            <Background />

            <FixedHeader/>
        
            <div className="centering shift h-100" >
                <div className="mt-n5" style={{minWidth: '26rem'}}>
                    <div className="mb-4">
                        <h3>Masuk</h3>
                        <div>Silakan masuk untuk menikmati layanan yang tersedia di sembako</div>
                    </div>
                    
                    <div className="form-group row">
                        <div className="col">
                            <Input placeholder="Alamat email"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col">
                            <Input placeholder="Kata sandi"/>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <Link className="d-block text-decoration-none" to={"/forgot_password"}>
                                Lupa kata sandi?
                            </Link>
                            <Link className="d-block text-decoration-none mt-1" to={"/register"}>
                                Daftar Baru?
                            </Link>
                        </div>
                        <Link className="d-block" to="/">
                            <Button className="bg-warning text-dark">Masuk <i className="fas fa-arrow-right ml-2"></i></Button>
                        </Link>
                    </div>
                </div>
            </div>
            <FixedFooter/>
        </div>
    );
}

export default App;
