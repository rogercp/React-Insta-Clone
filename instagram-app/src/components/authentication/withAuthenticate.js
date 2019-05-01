import React from 'react';


const Authenticate = PostsPage =>Login =>
class  extends React.Component {
    constructor(){
        super();
        this.state = {  
        authorized:false

        }
    }
    componentDidMount(){
        if(!localStorage.getItem('logger')){
            this.setState({authorized:false})
        }else{
            this.setState({authorized:true})
        }


    }
    render() { 
        if(this.state.authorized===true){
            return <PostsPage />;
        }else{
            return <Login />
        }
         
           
    }
}
 
export default Authenticate;