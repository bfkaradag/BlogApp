import React, {useState, useEffect} from 'react';
import InputBase from '@material-ui/core/InputBase'
import Paper from '@material-ui/core/Paper';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import dotenv from 'dotenv';
import * as EmailValidator from 'email-validator';

dotenv.config();

const Footer = () => {
    
    const [mail, setMail] = useState("");
    const [response, setResponse] = useState(null);
    const subscribeRequest = (e) => {
        e.preventDefault();

        if(EmailValidator.validate(mail))
        {
            axios.post(process.env.REACT_APP_API_ADDRESS +"/user/addsubscriber",
            {
                mail: mail,
                from: "footer"
            })
            .then((response) => {
            setResponse(response.status);
            
            })
            .catch((err) => {
                setResponse(err)
            })
        }
        else{
            setResponse(202);
        }
    }
    useEffect(() => {
        setTimeout(() => {
            setResponse(null)
        }, 3000);
    }, [response])
    return(
       <footer>           
           <div className="container-carousel">
                <div className="footer-design">
                    <div className="footer-logo">
                        <img src="./static/img/logos/nav_logo_white.png" width="200px" />
                        <p>E-posta listemize abone olun!</p>
                        <form id="subscribe-footer-form">
                            <Paper 
                                component="form"
                                style={{
                                    padding: '2px 4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: 225,
                                    justifyContent:'space-between'
                                }}>
                                <InputBase 
                                    required
                                    defaultValue={mail} 
                                    onChange = {(e) => setMail(e.target.value)} 
                                    id="eposta_kayit" 
                                    label="E-mail" 
                                    placeholder="Email" 
                                    style={{paddingLeft:4, fontSize:12, width:"100%"}}/>
                                <IconButton 
                                type="submit" 
                                color="primary" 
                                aria-label="directions" 
                                onClick = {(e) => subscribeRequest(e)}>
                                    <ArrowForwardIosRoundedIcon />
                                </IconButton>
                            </Paper>
                            {
                                response === 202
                                ?
                                    <div className="wrong-alert">
                                        <span>Mail yazımı doğru değil!</span>
                                    </div>
                                :
                                response === 200
                                ?
                                    <div className="success-alert">
                                        <span>Başarıyla kayıt olundu!</span>
                                    </div>
                                :
                                response === 201
                                ?
                                <div className="error-alert">
                                    <span>Zaten mail kayıtlı!</span>
                                </div>
                                :
                                null
                            }
                        </form>
                    </div>
                    <div className="footer-nav-links">
                        <div className="footer-left footer-section">
                            <div className="footer-link-title">
                                <h3>Hakkımızda</h3>
                            </div>
                            <div className="footer-links ">
                                <a href="#">Hakkımızda</a>
                                <a href="#">Tarihçemiz</a>
                                <a href="#">İş ortağımız olun</a>
                            </div>
                        </div>
                        <div className="footer-center footer-section">
                            <div className="footer-link-title">
                                    <h3>Ürünler</h3>
                                </div>
                                <div className="footer-links">
                                    <a href="#">Smart Portal</a>
                                    <a href="#">Kimlik Doğrulama</a>
                                </div>
                            </div>
                        <div className="footer-right footer-section">
                            <div className="footer-link-title">
                                    <h3>Çözümler</h3>
                                </div>
                                <div className="footer-links">
                                    <a href="#">A Çözümü</a>
                                    <a href="#">B Çözümü</a>
                                </div>
                        </div>   
                    </div>
                    <div className="footer-contact">
                        <a href="tel:0216 576 54 45">0216 576 54 45</a>
                        <a href="tel: 0850 226 76 78">0850 226 76 78</a>
                        <a href="mailto: destek@smartportal.com.tr">destek@smartportal.com.tr</a>
                        <p>İçerenköy Mah. Huzur Hoca Cad. No:57 D:8 34752 Ataşehir , İstanbul</p>
                    </div>
                </div>
           </div>
       </footer>
    )
}

export default Footer;