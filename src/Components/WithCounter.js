import React, { Component } from 'react'
const withCounter=(WrappedComponent,incrementNumber)=>{
    class withCounter extends Component{
        constructor(props){
            super(props)
            this.state={ 
                count:0
            }
        }
        incrementCount=()=>{
            this.setState({count:this.state.count+incrementNumber});
        };
        render(){
            return(
                <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props}>
                </WrappedComponent>
            )
        }
    }
    return withCounter

}
export default withCounter;