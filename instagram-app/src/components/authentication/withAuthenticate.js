import React from 'react';


const Authenticate = PostsPage =>Login =>
class  extends React.Component {
    constructor(props){
        super(props);
        this.state = {  
        authorized:false

        }
    }
    componentDidMount(){
        if(localStorage.getItem('logger')===false){
            this.setState({authorized:false})
        }this.setState({authorized:true})


    }
    render() { 
        if(this.state.authorized===true){
            return <PostsPage />;
        }
        return <Login />
        
         
           
    }
}
 
export default Authenticate;