import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom'

const font = "'Patrick Hand','cursive'"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100vh',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    backgroundColor: 'plum',
  },
  paper:
  {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'mediumorchid',
    height: '90vh',
    width: '50vh',
    borderRadius: "10%",
    flexWrap: 'wrap',
    alignItems: 'center',
    alignSelf: "center",
    alignContent: "center",
    justifyContent: 'center',
    fontSize: '3vh',
    color: 'white',
    fontFamily: font,
    fontWeight: 'bold',
  },
  input:
  {
    fontSize: '2vh',
    backgroundColor: 'transparent',
    color: 'white',
    borderRadius: "10%",
    border: '2px violet solid',
    padding: '1%',
  },
}));

export default function LoginForm() {
  const classes = useStyles();
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [user, setUser] = React.useState("");
  const [login, setLogin] = React.useState(false);

  const handleChange1 = (event) => {
    setEmail(event.target.value);
  }

  const handleChange2 = (event) => {
    setPassword(event.target.value);
  }


  async function LoginRequest(){
    const body = new URLSearchParams()
    body.append('email', email)
    body.append('password', password)
    
    const config = 
    {
      withCredentials: true,
      headers: 
      {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    try
    {
      const response =
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`,body,config
        )
      if(response.status==200)
      {
        setUser(response.data);
        toast.success("Successfully Logged In");
        setLogin(true);
        history.push("/dashboard");
      }
    }
    catch(err)
    {
      toast.error("Error Occured! Use correct creadentials");
    }
  }

  return (
    <div className={classes.root}>
    <Paper elevation={4} className={classes.paper}>Welcome Back!<br/><br/>
    <form>
    <label> Email Address: </label> <br/> <input type="text" className={classes.input} onChange={handleChange1} value={email}></input><br/>
    <label> Password: </label> <br/> <input type="password" className={classes.input} onChange={handleChange2} value={password}></input><br/>
    <Button variant="contained" color="secondary" onClick={LoginRequest}> Login </Button>
    </form>
    </Paper>
    </div>
    );
}