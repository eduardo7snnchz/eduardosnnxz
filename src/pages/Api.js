import React from 'react';

const Api = ({
    consumir, 
    perfiles,
    onChange,
    nombre
}) =>(

<div className="principal">
        <div className="text-center pt-5">
            <h2>API</h2>
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
    <a className="btn btn-success" href="/Domicilio">Domicilio</a>
  </li>
  <li className="nav-item active">
    <a className="btn btn-success" href="/Api">API <span className="sr-only">(current)</span></a>
  </li>
  <li className="nav-item active">
    <a className="btn btn-success" href="/curso">Curso</a>
  </li>
</ul>

</div>
</nav>

    <div className="container">
        <div className="row">
            <input className="form-control mt-5" type="text" onChange={onChange} value={nombre} placeholder="Ingresa un nombre de GitHub" />
        </div>
        <div className="text-center mt-5">
            <button onClick={consumir} className="btn btn-success">Consumir</button>
        </div>
        <div className='mt-3'>
        <div className="container" style={{display:'flex'}} id="scroll" >
            {
                perfiles.map(
                    (item, i) => (
                        <div key={i} id="innerscroll">
                        <div className="card border-dark" id="carta">
                            <img className="card-img-top" src={item.avatar_url} alt="Perfil"/>
                            <div className="card-body">
                            <a className="btn btn-outline-info" href={item.html_url}>{item.login}</a>
                            </div>
                        </div>
                        </div>
                    )
                )
            }
        </div>
        </div>
    </div>
    </div>
);

export default Api;