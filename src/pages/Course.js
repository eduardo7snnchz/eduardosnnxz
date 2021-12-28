import React from 'react';

const Course = ({
    courses,
    get
}) =>(
    
<div className="principal">
        <div className="text-center pt-5">
            <h2>Cursos</h2>
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
      <a className="btn btn-success" href="/Api">API</a>
    </li>
    <li className="nav-item active">
      <a className="btn btn-success" href="/curso">Curso <span className="sr-only">(current)</span></a>
    </li>
  </ul>
</div>

</nav>


<div className="container">
        <div className='mt-3'>
            {
                
                    (item, i) => (
                        <div key={i}>
                         {item.courses}   
                            </div>
                    
                    )
                
            }
        </div>
        </div>
    </div>









);

export default Course;