import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert'
import axios from 'axios';
import {useHistory, Redirect} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formContainer:{    
    flex:1,
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    height:"calc(100vh - 56px)",
    [theme.breakpoints.up('md')]: {
      height:"calc(100vh - 64px)",
    }
  },
}));

export default function Login(props) {
  
  const classes = useStyles();
  const [response, setResponse] = useState();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  const loginRequest = (e) => {
    e.preventDefault();
    axios.post("admin/authenticate",{
        username: username,
        password: password
      }
    )
    .then(response => {
      localStorage.setItem('token', response.data);
      history.push("/admin");
      window.location.reload();
      
    })
    .catch(() => {
      setResponse(401)
    })
  }

  
  if(props.authorized)
    return <Redirect to="/admin" />

  return (
    <Container component="main" maxWidth="xs">
        <div className={classes.formContainer}>          
        <Paper elevation={3} style={{padding:24}}>
          {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar> */}
          
          <Typography component="h1" variant="h4">
            Giriş Yap
          </Typography>
          <form className={classes.form} id="login-form" >
         
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Kullanıcı adı"
              name="username"
              onChange = {(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Şifre"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange = {(e) => setPassword(e.target.value)}
            />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick = {(e) => loginRequest(e)}
              >
              Giriş Yap
            </Button>
            {
              response === 401
              ?
              <Alert severity="error">{"Giriş bilgilerinizi kontrol ediniz!"}</Alert>
              :
              null
            }
            
          </form>
        </Paper>
        </div>
    </Container>
  );
}
