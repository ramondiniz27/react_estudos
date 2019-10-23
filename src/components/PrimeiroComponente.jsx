import React from 'react';
let isLegal = true
export default (props) =>
<div>
  <h1>{props.valor}</h1>
  <h1>{isLegal ? 'sim': 'Não'}</h1>
  <h1>{!isLegal ? 'sim': 'Não'}</h1>
</div>



