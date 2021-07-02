import React from 'react'
import Container from '@material-ui/core/Container';
import {BeenhereRounded, FingerprintRounded,QueryBuilderRounded} from '@material-ui/icons'
import ReferencesCarousel from './ReferencesCarousel';

const HomeContent = () => {
    
    return (
       <div className="home-content">
            <section className="home-what-we-do"> 
                <Container>
                    <div className="home-desc">
                        <h2>Smartportal Kime Hizmet Verir?</h2>
                        <p>Profesyonel danışmanlar olarak müşterilerimizin karmaşık insan kaynakları ve sosyal güvenlik sorunlarını çözmelerine
                                yardımcı olur ve değer yaratma, risk yönetimi ve performans geliştirme becerilerine katkı sağlamayı hedefleriz.</p>
                    </div>
                    <div className="home-product-attrs">
                        <div className="home-product-attr">                            
                            <div className="home-product-title">
                                <BeenhereRounded  fontSize = "large" color = "primary"  />
                                <h3>Güvenilir ve Onaylı</h3>
                            </div>
                            <div className="home-product-desc">
                                <p>Exercitation ad duis cillum amet tempor consequat magna. Magna culpa qui aute pariatur. Laboris anim duis minim nisi Lorem et. Sint do veniam sunt esse nisi in ut eu ea tempor et adipisicing. Cupidatat duis commodo exercitation nulla dolor adipisicing culpa deserunt sit.</p>
                            </div>
                        </div>
                        <div className="home-product-attr">
                            <div className="home-product-title">
                                <FingerprintRounded fontSize="large" color = "primary"  />
                                <h3>Kişiye Özel Koruma</h3>
                            </div>
                            <div className="home-product-desc">
                                <p>Exercitation ad duis cillum amet tempor consequat magna. Magna culpa qui aute pariatur. Laboris anim duis minim nisi Lorem et. Sint do veniam sunt esse nisi in ut eu ea tempor et adipisicing. Cupidatat duis commodo exercitation nulla dolor adipisicing culpa deserunt sit.</p>
                            </div>
                        </div>
                        <div className="home-product-attr">
                            <div className="home-product-title">
                                <QueryBuilderRounded fontSize="large" color = "primary" />
                                <h3>7/24 Canlı Destek</h3>
                            </div>
                            <div className="home-product-desc">
                                <p>Exercitation ad duis cillum amet tempor consequat magna. Magna culpa qui aute pariatur. Laboris anim duis minim nisi Lorem et. Sint do veniam sunt esse nisi in ut eu ea tempor et adipisicing. Cupidatat duis commodo exercitation nulla dolor adipisicing culpa deserunt sit.</p>
                            </div>
                        </div>
                    </div>

                </Container>
            </section>
            <section className="home-app-in-devices">
                <div className="app-in-devices-img">
                    <img src="./static/img/appindevices.png" style={{maxWidth:"100%", marginTop:"-140px"}}/>
                </div>
                    <div className="app-in-devices-contents">
                    <div className="container-fluid">

                        <div className="app-in-devices-contents-section">
                            <div className="app-in-devices-content">
                                <h4>Kolay Tahsilat ve Nakit Akışı</h4>
                                <p>Paynet, kazancınızın iş dünyasının her geçen gün büyüyen ödeme ağında kaybolmasına engel olur,
                                    kolay tahsilat yapmanızı ve sağlıklı bir nakit akışına ulaşmanızı sağlar.</p>
                            </div>
                            <div className="app-in-devices-content">
                                <h4>Kolay Tahsilat ve Nakit Akışı</h4>
                                <p>Paynet, kazancınızın iş dünyasının her geçen gün büyüyen ödeme ağında kaybolmasına engel olur,
                                    kolay tahsilat yapmanızı ve sağlıklı bir nakit akışına ulaşmanızı sağlar.</p>
                            </div>
                            <div className="app-in-devices-content">
                                <h4>Kolay Tahsilat ve Nakit Akışı</h4>
                                <p>Paynet, kazancınızın iş dünyasının her geçen gün büyüyen ödeme ağında kaybolmasına engel olur,
                                    kolay tahsilat yapmanızı ve sağlıklı bir nakit akışına ulaşmanızı sağlar.</p>
                            </div>
                        </div>    
                        <div>
                            <div className="app-in-devices-content">

                            </div>
                            <div className="app-in-devices-content">
                                
                            </div>
                            <div className="app-in-devices-content">
                                
                            </div>
                        </div>                     
                    </div>
                </div>
            </section>
            <section className="home-references">
                <ReferencesCarousel />
            </section>
            <section></section>
       </div>
    )
}


export default HomeContent;