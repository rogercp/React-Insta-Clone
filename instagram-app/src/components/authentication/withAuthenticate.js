import React from 'react';


const Authenticate = Login => PostsPage=>
class  extends React.Component {
    constructor(){
        super();
        this.state = {  
        authorized:false

        }
    }
    componentDidMount(){
        if(localStorage.getItem('logger')!==false){
            this.setState({authorized:false})
        }else{
            this.setState({authorized:true})
        }


    }
    render() { 
        if(this.state.authorized===true){
            return <PostsPage/>;
        }else{
            return <Login/>
        }
         
           
    }
}
 
export default Authenticate;