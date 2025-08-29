import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.sate={hasError:false}
    }
    static getDerivedStateFromError(error){
        return {hasError:true}
    }
    componentDidCatch(error,info){
        console.log("Erro",error)
        console.log("Error info",info)
    }
  render() {
    if(this.sate.hasError){
        return <h2>Something went wrong. Plese try again</h2>
    }
    return this.props.children;
  }
}

export default ErrorBoundary

