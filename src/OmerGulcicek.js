import React, { Component, Fragment }       from "react";
import { BrowserRouter as Router, Route }   from "react-router-dom";
import Header                               from "./components/Header.js";
import KisiselBilgiler                      from "./components/KisiselBilgiler.js";
import SosyalAglar                          from "./components/SosyalAglar.js";
import Hakkinda                             from "./components/Hakkinda.js";
import Hedefler                             from "./components/Hedefler.js";
import Projeler                             from "./components/Projeler.js";
import Referanslar                          from "./components/Referanslar.js";
import Blog                                 from "./components/Blog.js";
import Iletisim                             from "./components/Iletisim.js";
import Footer                               from "./components/Footer.js";
import Img                                  from "./img_avatar.png";
import "./App.css";

export default class OmerGulcicek extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aciklamaListesi: [
                {
                    adres: "",
                },
                {
                    yaş: "",
                },
                {
                    eposta: "",
                },
                {
                    telefon: ""
                }
            ],
            kisiselBilgiler: {
                name: "",
                company: "",
                image: Img,
                job: "",
            },
            hakkindaBaslik: "Merhaba,",
            cvButon: "CV Görüntüle",
            hakkinda: [
                "-",
            ],
            hedefler: [
                {
                    hedef: "",
                    yapildiMi: false
                }
            ],
            hedeflerYazilim: [
                {
                    hedef: "",
                    yapildiMi: false
                }
            ],
            sonGuncellenmeTarihi: ""
        }
        this.mobilMenu = this.mobilMenu.bind(this);
    }
    mobilMenu(e) {
        if (document.body.offsetWidth < 1024) {
            const header = document.getElementsByTagName("header")["0"];
            if (!header.classList.contains("active")) {
                header.classList.add("active");
            }
            else {
                header.classList.remove("active");
            }
        }
    }
    componentDidMount() {
        window.addEventListener("scroll", function(e) {
            if (document.body.offsetWidth >= 1024) {
                const header = document.getElementsByTagName("header")["0"];
                let scroolPosition = window.scrollY;
                if(scroolPosition > 50) {
                    header.classList.add("active");
                }
                else {
                    header.classList.remove("active");
                }
            }
        });
    }
    render() {
        const { aciklamaListesi, kisiselBilgiler, hakkinda, hakkindaBaslik, hedefler, hedeflerYazilim, cvButon, sonGuncellenmeTarihi } = this.state;

        return (
            <Router>
                <Fragment>
                    <Header onClick={this.mobilMenu} />
                    <main>
                        <KisiselBilgiler aciklamaListesi={aciklamaListesi} kisiselBilgiler={kisiselBilgiler} >
                            <SosyalAglar />
                        </KisiselBilgiler>

                        <Route exact path="/" render={()=>
                            <Hakkinda
                                hakkinda={hakkinda}
                                hakkindaBaslik={hakkindaBaslik}
                                cvButon={cvButon}
                            />}
                        />

                        <Route path="/hedefler"      render={()=>
                            <Hedefler
                                hedefler={hedefler}
                                hedeflerYazilim={hedeflerYazilim}
                            />}/>
                        <Route path="/projeler"     component={Projeler} />
                        <Route path="/referanslar"  component={Referanslar} />
                        <Route path="/blog"         component={Blog} />
                        <Route path="/iletisim"     component={Iletisim} />
                    </main>
                    <Footer sonGuncellenmeTarihi={sonGuncellenmeTarihi} />
                </Fragment>
            </Router>
        );
    }
}
