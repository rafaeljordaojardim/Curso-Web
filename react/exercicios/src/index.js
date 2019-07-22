import React /*,{Fragment, Component}*/ from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/primeiro'
// import BomDia from './componentes/BomDia'
// const elemento =  <h1> React 2 </h1>;
// import { BoaTarde, BoaNoite } from './componentes/Multiplos'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'
// import Saudacao from './componentes/Saudacao'
//função para reiderizar um elemento
//são elementos jsx não são html
ReactDOM.render( 
    <div>
        <Pai nome="Rafael" sobrenome="Jardim">
            {/* Como passop os componentes filhos aqui */}
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        </Pai>
    </div>
    , document.getElementById('root'))

/*
    $('h1').html('react 2')
    é criado semelhando ao codigo acima
*/