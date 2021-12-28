import React from 'react';

const Domicilio = ({
    form,
    onChange
}) =>(


<div className="principal">
        <div className="text-center pt-5">
            <h2>Domicilio</h2>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light" >
<div className="collapse navbar-collapse" id="navbarNav">
 <ul className="navbar-nav">
  <li className="nav-item active">
    <a className="btn btn-success" href="/welcome">Home</a>
  </li>
  <li className="nav-item active">
    <a className="btn btn-success" href="/rfc">RFC</a>
  </li>
  <li className="nav-item active">
    <a className="btn btn-success" href="/Domicilio">Domicilio <span className="sr-only">(current)</span></a>
  </li>
  <li className="nav-item active">
    <a className="btn btn-success" href="/Api">API</a>
  </li>
  <li className="nav-item active">
    <a className="btn btn-success" href="/curso">Curso</a>
  </li>
</ul>

</div>
</nav>



    <div className="container pt-5">
        <div className="form-group">
            <label>Código postal</label>
            <input className="form-control" type="text" onChange={onChange} value={form.cp} placeholder="Ingrese el código postal" />
        </div>
        <div className="row mt-5">
            <p>Estado: {form.estado}</p>
            <p>Municipio: {form.municipio}</p>
        </div>
    </div>
    </div>
);

export default Domicilio;