import React from "react";

class ClassComponentIndex extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            firstName:"Surendra",
            lastName:"Babu",
            userData:[]
        }
        console.log("Constructor.");
    }

    // Mounting
    //constructor
    // static getderivedstatefromprops
    // render
    // componentdidmount


    // Update
    // static getderivedstatefromprops
    // render
    // componentdidUpdate

    componentDidUpdate(){
        console.log("Boom");
    }


    static getDerivedStateFromProps(props,state){
        console.log("getDervicedStateFromProps");
        console.log(props,state);
        return {};
    }

    componentDidMount(){
        console.log("ComponentDidMount");
        (async()=>{
            try{
                let apiRes = await fetch('https://gorest.co.in/public/v2/users').then(res=>res.json());
                this.setState({userData:[...apiRes]});
            }catch(err){

            }
        })();
    }

    componentWillUnmount(){

    }

    render(){
        console.log("Render")
        const {firstName, lastName, userData} = this.state;
        return (
            <>
                <h1> Hello, I am {firstName} {lastName}.</h1>
                <h1>{this.props.children}</h1>
                {userData && userData.map((item,i)=>{
                    return <p key={item.id}>{item.name}</p>
                })}
                <button onClick={()=>this.setState({firstName:"P"})}>Click here</button>
            </>
        )
    }
}

export default ClassComponentIndex;