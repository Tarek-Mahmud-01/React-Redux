import React from 'react';
import Button from './button';


class Test extends React.Component{
constructor(props){

    super(props);
    this.state={date:new Date(),name:'react'};
  
   // this.state = {date: "Ford"};
}



// componentDidMount(){
// //  setInterval(()=>{
// // this.setState({date:new Date()});


// //  },1000);

  
 
// }  
  handle = () => {
        

        this.setState((state)=>{

           
           
            return  {name:
                state.name=='react'? new Date().toLocaleString('bn-BD') : "react" }
        }
        
      );

    }
    render(){

        return(

            <><h1>
                <span>{this.state.date.toLocaleString('bn-BD')}</span>

            </h1>
            <p>{this.state.name}</p>
            <Button v={this.handle}/>
            {/* <button onClick={this.handle}>click</button> */}</>

        );
    }

}

// class Car extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         brand: "Ford",
//         model: "Mustang",
//         color: "red",
//         year: 1964,
//         date:new Date()
//       };
//     }
//     render() {
//       return (
//         <div>
//           <h1>My {this.state.brand}</h1>
//           <p>
//             It is a {this.state.color}
//             {this.state.model}
//             from {this.state.year}.
//           </p>
//           <h1>My {this.state.date.toDateString()}</h1>
//         </div>
//       );
//     }
//   }
  

//  export default Car;
  export default Test;

