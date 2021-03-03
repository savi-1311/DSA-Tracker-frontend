import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LoginForm from './loginform';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
    flexDirection: 'row',
    backgroundColor: 'mediumorchid',
    height: '30vh',
    width: '30vh',
    borderRadius: "10%",
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3vh',
    color: 'white',
    fontFamily: font,
    fontWeight: 'bold',
    '&:hover': 
    {
      cursor: 'pointer',
      backgroundColor: 'darkviolet',
    },
  },
  link:
  {
    textDecoration: "none",
    display: 'flex',
    flexDirection: 'row',
    height: '30vh',
    width: '30vh',

  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Link to="/signup" className={classes.link}><Paper elevation={4} className={classes.paper}>New Here?<br/>Sign Up</Paper></Link>
    <br/>
    <Link to="/login" className={classes.link}><Paper elevation={4} className={classes.paper}>Already a Coder?<br/>Log In</Paper></Link>
    </div>
    );
  }



  // const [login, setLogin] = React.useState(false);
  // const [user, setUser] = React.useState({});

  // React.useEffect(() => {
  //   LoginRequest();
  //     //getUserInfo();
  //   }, [])

  // async function getUserInfo(){
  //   const response =
  //   await axios.get(`${process.env.REACT_APP_BACKEND_URL}/dashboard`,{withCredentials: true}
  //     )
  //   console.log(response);
  //   if(response.status==200)
  //   {
  //     setUser(response.data);
  //   }

  // }


  // async function LoginRequest(){
  //   const body = new URLSearchParams()
  //   body.append('email', 'bandanacharu@gmail.com')
  //   body.append('password', '123456')

  //   const config = 
  //   {
  //     withCredentials: true,
  //     headers: 
  //     {
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //     }
  //   }

  //   const response =
  //   await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`,body,config
  //     )
  //   if(response.status==200)
  //   {
  //     setLogin(true);
  //     getUserInfo();
  //   }

  // }