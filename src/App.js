import './App.css';
import Header from './components/header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';




const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  
  const addData = ()=>{
    if(name == "" || email == ""){
      alert("you must enter some value");
    }
    else{
    setData([...data,{email,name }])
    setName("");
    setEmail("");
  }}

  const removeItem = (index)=>{
    let data2=data;
    data2.splice(index,1);
    setData([...data2])
  }
  return (
    <div className='App'>
      <Header />
      <div className='form-data'>
        <Stack direction="row" spacing={2}>
          <TextField 
          className='input-field ib'
          onChange={(event)=>setName(event.target.value)}
          value={name} 
          id="outlined-basic" 
          label="enter your name" 
          variant="outlined" />
          <TextField 
          className='input-field ib'
          onChange={(event)=>setEmail(event.target.value)}
          value={email} 
          id="outlined-basic" 
          label="enter your email" 
          variant="outlined" />
          <Button 
          color="success" 
          variant="contained"
          onClick={addData}>
            <AddIcon />
          </Button>

        </Stack>
      </div>
      <div className='stored-data'>
        <div className='stored-data-values'>
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>remove</h3> 
        </div> 
        <div>
          {
            data.map(
              (element,index)=>{
                return(
                <div key={index} className='stored-data-values'>
                  <h3>{element.name}</h3>
                  <h3>{element.email}</h3>
                  <h3>
                  <Button onClick={()=>removeItem(index)} style={{padding:"20px 40px"}} variant="outlined" color="error">
                  <DeleteIcon/>
                  </Button>
                  </h3>
              </div>
                )
              }
            )
          }
        </div>
       
      </div>       
    </div>
  )
}

export default App;


