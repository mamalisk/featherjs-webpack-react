import React from 'react';

export default class ChartHeader extends React.Component {

   constructor(props){
     super(props);
   }

   render() {
     return (
       <div id="header">
         <h1>{this.props.title}</h1>
       </div>
     );
   }

}
