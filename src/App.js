import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation.component'
import SignIn from './routes/signIn/sign-in.component'

const Shop = () => (
  <h2>
    hello world
  </h2>

)

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        {/*  nested routes below (childern routes)  */}
      <Route path='/' element={<Home />}/>
      <Route path='shop' element={<Shop/>}/>
      <Route path='sign-in' element={<SignIn/>}/>
      </Route>
    </Routes>
  )

};

export default App;
