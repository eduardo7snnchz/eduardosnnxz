import React, {Fragment} from 'react';



const RFC=({
    rfc,
    form,
    onChange})=>(

    <Fragment>

<div className="principal">
        <div className="text-center pt-5">
            <h2>RFC</h2>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light" >
<div className="collapse navbar-collapse" id="navbarNav">


<ul className="navbar-nav">
  <li className="nav-item active">
    <a className="btn btn-success" href="/welcome">Home</a>
  </li>
  <li className="nav-item active">
    <a className="btn btn-success" href="/rfc">RFC <span className="sr-only">(current)</span></a>
  </li>
  <li className="nav-item active">
    <a className="btn btn-success" href="/Domicilio">Domicilio</a>
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


        <div className="container d-flex justify-content-center mt-5">
            <form className="form">
                <div className="form-group mt-3">
                    <label>Apellido Paterno:</label>
                    <input onChange={onChange} value={form.paterno} className="form-control" type="text" name="paterno"/>
                </div>
                <div className="form-group mt-3">
                    <label>Apellido Materno:</label>
                    <input onChange={onChange} value={form.materno} className="form-control" type="text" name="materno"/>
                </div>
                <div className="form-group">
                    <label>Nombre:</label>
                    <input onChange={onChange} value={form.nombre} className="form-control" type="text" name="nombre"/>
                </div>
                <div className="form-group mt-3">
                    <label>Fecha de nacimiento:</label>
                    <input onChange={onChange} value={form.fechaNacimiento} className="form-control" type="date" name="fechaNacimiento"/>
                </div>
            </form>
        </div>
        <div className="text-center mt-5">
            <h5 className="txt-rfc">{rfc}</h5>

        </div>
        </div>
    </Fragment>
);

export default RFC;