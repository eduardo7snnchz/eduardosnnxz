import React from 'react';
import Logo from '../images/logo.png';

const Index = ({form, onChange, onSubmit,msg}) => (
    <div className="principal">
        <h1>Oscar Eduardo Sanchez Hidalgo - 2018631401</h1>
        <a className="btn btn-success" href="https://github.com/eduardo7snnchz/eduardosnnxz">Github Code</a>
        <div className="container-form">
            
            <form onSubmit={onSubmit} className="form-react">
                <div className="text-center mb-4">
                    <img src={Logo} alt="Logo Escom" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="email" className="form-label">Usuario</label>
                    <input autoComplete="off" required onChange={onChange} value={form.email} type="text" className="form-control" name="email" id="email" placeholder="Ingrese su correo" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="pass" className="form-label">Clave</label>
                    <input required onChange={onChange} value={form.pass} type="password" className="form-control" name="pass" id="pass" placeholder="Clave" />
                </div>
                <div className="text-end mt-3">
                    <p>{msg}</p>
                </div>
                <div className="text-end mt-3">
                    <button type="submit" className="btn btn-success">Login</button>
                </div>
            </form>
        </div>
        </div>
        );

        export default Index;