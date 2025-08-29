import React,{PureComponent} from 'react'
class PureCom extends PureComponent{
    render(){
        console.log("pure Component Render")
        return(
            <div>
                Pure Componet {this.props.name}
              
            </div>
        )
    }
}
export default PureCom 