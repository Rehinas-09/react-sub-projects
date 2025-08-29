
import './App.css';
import Binding from './Components/Binding';
import BindingEvent from './Components/BindingEvent';
import ClassClick from './Components/ClassClick';
import Counter from './Components/Counter';
import CounterApp from './Components/CounterApp';
import EventHandling from './Components/EventHandling';
import FunctionClick from './Components/FunctionClick';
import Greet from './Components/Greet';
import Hello from './Components/Hello';
import List from './Components/List';
import Message from './Components/Message';
import ParentC from './Components/ParentC';
import ProfileCard from './Components/ProfileCard';
import PropsPassing from './Components/PropsPassing';
import StyleSheet from './Components/StyleSheet';
import ThemeToggle from './Components/ThemeToggle';
import TodoList from './Components/TodoList';
import UserGreeting from './Components/UserGreeting';
import Welcome from './Components/Welcome';
import './Components/AppStyles.css'
import styles from './Components/AppStyles.module.css'
import Form from './Components/Form';
import ManualFormValidation from './Components/ManualFormValidation';
import FormReact from './Components/FormReact';
import CompnentMouting from './Components/CompnentMouting';
import LifecycleA from './Components/LifecycleA';
import LifeCycle from './Components/LifeCycle';
import ComponentRemove from './Components/ComponentRemove';
import FragmentDemo from './Components/FragmentDemo';
import Table from './Components/Table';
import PureCom from './Components/PureCom';
import ParentComp from './Components/ParentComp';
import RefsDemo from './Components/RefsDemo';
import FocusInput from './Components/FocusInput';
import FrParentInput from './Components/FrParentInput';
import PortalDemo from './Components/PortalDemo';
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
import ClickCounter2 from './Components/ClickCounter2';
import MouseHover2 from './Components/MouseHover2';
import User from './Components/User';
import Counters from './Components/Counters';
import ComponentC from './Components/ComponentC';
import { UserProvider } from './Components/UserContext';
import POstList from './Components/POstList';
import PostForm from './Components/PostForm';

function App() {
  return (
    <div className="App">  
     {/* <ComponentRemove/> */} 
     {/* <FragmentDemo/> */} 
     {/* <ParentComp/> */} 
     {/* <FocusInput/> */} 
     {/* <FrParentInput/> */}
     {/* <ClickCounter name="rehinas"/>
     <HoverCounter/> */} 
      {/* <ClickCounter2/>  
     <MouseHover2/> 
     <User render={(isLoggedIn)=>isLoggedIn?'Rehinas':'Guest'}/> */}
     {/* <Counters render={(count,increment)=>(
       <ClickCounter2 count={count} increment={increment}></ClickCounter2>
     )}/>
         <Counters render={(count,increment)=>(
       <MouseHover2 count={count} increment={increment}></MouseHover2>
     )}/> */}
       {/* <ComponentC/> */}
       {/* <POstList/> */}
        <PostForm/>
        
    </div>   
  );}    
export default App; 
 