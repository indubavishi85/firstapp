import logo from './logo.svg';
import './App.css';
import './demo.css';
import test from './test.module.css';
import styled from 'styled-components';


const heading={
 color:'pink',
 backgroundColor:'yellow'
}
const Btn = styled.button`
padding:22px,
border:none,
background-color: #003366,
color:black`

function App() {
  return (
    <div className="App">
      inline css
      <h1 style={{color:'red',backgroundColor:'yellow'}}>Good Morning</h1>
      internal css
      <h1 style={heading}> Wel come</h1>
      Exeternal css
      <h1 className="title">Title</h1>
      modual css
      <p className={test.disc}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
        Aperiam similique obcaecati necessitatibus nemo dolore, 
        corrupti tempore fugit harum provident vero architecto animi velit
         molestias amet iure accusantium nisi perspiciatis repudiandae?
      </p>
      <Btn>Click To Action </Btn>
      <img src={require('./image/f1.jpg')} width={300} alt=''/>   
      <img src={logo} width={300} alt='' />
    </div>
  );
}

export default App;
