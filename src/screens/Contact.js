import React, {useState, useEffect} from 'react';
import Layout from '../layout/index'
import Helmet from 'react-helmet'
import { TextField,Paper,Button } from '@material-ui/core';
import {LocationOn, PhoneInTalkRounded, MailRounded
} from '@material-ui/icons';
import axios from 'axios';
import dotenv from 'dotenv';
import * as EmailValidator from 'email-validator';


const Contact = () => {
    dotenv.config();

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [phone, setPhone] = useState("");
    const [msg, setMsg] = useState("");

    const [response, setResponse] = useState();

    const sendContactMessage = (e) => {
        e.preventDefault();
       if(mail != "" && name !="" && phone !="" && msg !=""){
            if(EmailValidator.validate(mail)){
                axios.post(process.env.REACT_APP_API_ADDRESS + "/user/sendmessage",{
                    name: name,
                    mail: mail,
                    phone: phone,
                    msg: msg
                })
                .then((response) => {
                    setResponse(response.status)
                    if(response.status === 200){
                        setName("");
                        setMail("");
                        setPhone("");
                        setMsg("");
                    }
                })
            }
            else{
                setResponse(201)
            }
        }
        else{
            setResponse(101);
        }
       }
    useEffect(() => {
    setTimeout(() => {
        setResponse(null)
    }, 3000);
}, [response])
    return (
       <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>İletişim: Smart Portal</title>           
        </Helmet>
        <Layout>
            <div className="contact-container">
               <div className="container-fluid">
                    <div className="contact-title">
                    <h1>İletişim</h1>
                    </div>
                    <Paper elevation="1" style={{padding:"0px 0px 30px 0px"}}>
                    <div className="contact-main">
                        <div className="contact-form">
                            <form>
                                <h2>Bize ulaşın.</h2>
                                <TextField value={name} variant="outlined"  label="Ad Soyad" style={{marginBottom:15}} onChange = {(e) => setName(e.target.value)} required  />
                                <TextField value={mail} variant="outlined" label="E posta" type="mail" style={{marginBottom:15}} onChange = {(e) => setMail(e.target.value)} required  />
                                <TextField value={phone} variant="outlined" label="Telefon" style={{marginBottom:15}} onChange = {(e) => setPhone(e.target.value)} required  />
                                <TextField
                                label="Mesaj"
                                value = {msg}
                                multiline
                                style={{marginTop:15}}
                                rows={5}
                                variant="outlined"
                                onChange = {(e) => setMsg(e.target.value)}
                                />
                                {
                                response === 200
                                ?
                                <div className="success-alert">
                                    <span>Mesajınız alındı!</span>
                                </div>
                                :
                                response === 101
                                ?
                                <div className="error-alert">
                                    <span>Boş bırakılan yerleri doldurun!</span>
                                </div>
                                :
                                response === 201
                                ?
                                <div className="error-alert">
                                    <span>Mailinizi kontrol ediniz!</span>
                                </div>
                                :
                                null
                            }
                                <Button type="submit" style={{marginTop:20}} color="secondary" variant="contained" onClick = {(e) => sendContactMessage(e)}>Gönder</Button>
                            </form>
                            
                        </div>
                        <div className="contact-info">
                            <div className="contact-map-img">
                                <img src="./static/img/page-content/map.jpg" width="100%" />
                                <Button  variant="outlined" style={{width:"100%", maxWidth:"240px", marginTop:15}}>
                                    <a href="https://goo.gl/maps/YQBzsemuyWMavKVE9">Yol Tarifi Al</a>
                                </Button>
                                <div class="info">
                                    <div class="info-icon">
                                        <PhoneInTalkRounded  />
                                    </div>
                                    <div class="info-text">
                                    +90 216 576 54 45
                                    </div>
                                </div>
                                <div class="info">
                                    <div class="info-icon">
                                        <MailRounded  />
                                    </div>
                                    <div class="info-text">
                                    smartrpatech@ddo.com.tr
                                    </div>
                                </div>
                                <div class="info">
                                    <div class="info-icon">
                                        <LocationOn  />
                                    </div>
                                    <div class="info-text">
                                    İçerenköy Mah. Huzur Hoca Cad. No:57 D:8 34752 Ataşehir , İstanbul
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Paper>
               </div>
            </div>
        </Layout>
        </>
    )
}

export default Contact;