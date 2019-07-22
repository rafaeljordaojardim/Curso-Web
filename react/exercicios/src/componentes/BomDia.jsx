import React, { Fragment } from "react";
//por convenção usa-se props == propriedades
// export default props => (
// // serve para reiderizar, mas nãoaparece na dom
//         <React.Fragment>
//             <h1>Bom dia {props.nome}!</h1>
//             <h2>Até breve!</h2>
//         </React.Fragment>
// serve para reiderizar, mas nãoaparece na dom
//   <Fragment>
//     <h1>Bom dia {props.nome}!</h1>
//     <h2>Até breve!</h2>
//   </Fragment>
// );
// export default props => [<h1 key='h1'>Bom dia {props.nome}!</h1>, <h2 key='h2'>Até breve!</h2>];
//na maioria das vezes usa div
export default props => 
    // serve para reiderizar, mas nãoaparece na dom
            <React.Fragment>
                <h1>Bom dia {props.nome}!</h1>
                <h2>Até breve!</h2>
            </React.Fragment>