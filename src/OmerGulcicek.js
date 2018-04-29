import React, { Component, Fragment }               from "react";
import { BrowserRouter as Router, Route, Switch }   from "react-router-dom";
import Header                                       from "./components/Header.js";
import KisiselBilgiler                              from "./components/KisiselBilgiler.js";
import SosyalAglar                                  from "./components/SosyalAglar.js";
import Hakkinda                                     from "./components/Hakkinda.js";
import Hedefler                                     from "./components/Hedefler.js";
import Projeler                                     from "./components/Projeler.js";
import Referanslar                                  from "./components/Referanslar.js";
import Blog                                         from "./components/Blog.js";
import Iletisim                                     from "./components/Iletisim.js";
import Footer                                       from "./components/Footer.js";
import SayfaYok                                     from "./components/SayfaYok.js";
import Img                                          from "./img_avatar.png";
import "./App.css";

export default class OmerGulcicek extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aciklamaListesi: [
                {
                    adres: "İstanbul, Türkiye",
                },
                {
                    yaş: new Date().getFullYear() - 1993,
                },
                {
                    eposta: "iletisim@omergulcicek.com",
                },
                {
                    telefon: "0(554) 350 98 06"
                }
            ],
            kisiselBilgiler: {
                name: "Ömer Gülçiçek",
                company: "Ziraat Teknoloji",
                image: Img,
                job: "Frontend Developer",
            },
            hakkindaBaslik: "Merhaba,",
            cvButon: "CV Görüntüle",
            hakkinda: [
                "Şubat 93'te İstanbul Gaziosmanpaşa'da doğdum, aslen Trabzon'luyum. İngilizce hazırlık eğitimi ile başladığım Yazılım Mühendisliği bölümünden 2017 yılında mezun oldum.",
                "Frontend Developer'ım, bir web sitesini sıfırdan oluşturabiliyorum. Web geliştirmede mevcut en iyi dilleri kullanarak iyi tasarlanmış, temiz ve verimli kod yazma konusunda yetenekliyim. Frontend dünyasının hızlı gelişimine ayak uydurabilen, yeni şeyler öğrenmeyi ve öğretmeyi seven, çalışkan bir takım oyuncusuyum.",
                "HTML5, CSS3, SASS, JavaScript, jQuery, JSON, AJAX, React, Router, Gulp, Kendo UI, Bootstrap, Semantic UI, Materialize CSS'te tecrübem var.",
                "Projeler ve referanslar linklerinden daha önce yapmış olduğum çalışmaları inceleyebilir; freelance işler için iletişim sayfasından detaylı bilgiye ulaşabilirsiniz. İletişim için e-posta'yı tercih edin. (Genellikle gün içerisinde dönüş yapıyorum.)",
                "Hayallerimin ve hedeflerimin arkasından koşmaya devam edeceğim. Sevdiğim işi yapıyorum, bu sayede hayatımın sonuna kadar bir gün bile çalışmam gerekmiyor; tutkunuzu bulun ve işiniz iş olmaktan çıksın.",
                "Detaylı ve güncel özgeçmişim için aşağıdaki butonu kullanabilirsiniz.",
            ],
            hedefler: [
                {
                    hedef: "Amasra'yı (Bartın) gezmek",
                    yapildiMi: false
                },
                {
                    hedef: "Cumalıkızık'ı (Bursa) gezmek",
                    yapildiMi: false
                },
                {
                    hedef: "Çocuk esirgeme kurumunu ziyaret etmek",
                    yapildiMi: false
                },
                {
                    hedef: "Çömlek yapmak",
                    yapildiMi: false
                },
                {
                    hedef: "Darülaceze ziyareti",
                    yapildiMi: true,
                },
                {
                    hedef: "Ehliyet almak (B Sınıfı)",
                    yapildiMi: false
                },
                {
                    hedef: "Enstrüman çalmayı öğrenmek",
                    yapildiMi: true
                },
                {
                    hedef: "Gönüllü olarak projelerde yer almak",
                    yapildiMi: true
                },
                {
                    hedef: "İlk yardım sertifikası",
                    yapildiMi: false
                },
                {
                    hedef: "İngilizce",
                    yapildiMi: true
                },
                {
                    hedef: "İş bulmak",
                    yapildiMi: true,
                    detay: "Eylül 2017'de Ziraat Teknoloji şirketinde işe başladım."
                },
                {
                    hedef: "Kamp yapmak",
                    yapildiMi: false
                },
                {
                    hedef: "Kan bağışlamak (0/10 - Bronz Madalya)",
                    yapildiMi: false
                },
                {
                    hedef: "Kapadokya'yı (Nevşehir) gezmek",
                    yapildiMi: false
                },
                {
                    hedef: "Karadeniz Turu",
                    yapildiMi: false
                },
                {
                    hedef: "Kitap okumak (14/100 tane)",
                    yapildiMi: false
                },
                {
                    hedef: "Maraton koşmak",
                    yapildiMi: false
                },
                {
                    hedef: "Mektup yazmak",
                    yapildiMi: false
                },
                {
                    hedef: "Milli takımın maçına gitmek",
                    yapildiMi: false
                },
                {
                    hedef: "Pamukkale Traverten'lerini (Denizli) gezmek",
                    yapildiMi: false
                },
                {
                    hedef: "Puzzle bitirmek (1000 parçalı)",
                    yapildiMi: false
                },
                {
                    hedef: "Rafting yapmak",
                    yapildiMi: false
                },
                {
                    hedef: "Rubik küpü çözmek",
                    yapildiMi: true
                },
                {
                    hedef: "Sahilde sabahlamak",
                    yapildiMi: false
                },
                {
                    hedef: "Silikon Vadisi'ni (Amerika) gezmek",
                    yapildiMi: false
                },
                {
                    hedef: "Söğüt'ü (Bilecik) gezmek",
                    yapildiMi: false
                },
                {
                    hedef: "Trabzon'u gezmek",
                    yapildiMi: false
                },
                {
                    hedef: "Üniversiteden mezun olmak",
                    yapildiMi: false
                },
                {
                    hedef: "Yurt dışına çıkmak",
                    yapildiMi: false
                }
            ],
            hedeflerYazilim: [
                {
                    hedef: "HTML5/CSS3",
                    yapildiMi: true
                },
                {
                    hedef: "SASS",
                    yapildiMi: true
                },
                {
                    hedef: "JavaScript",
                    yapildiMi: true
                },
                {
                    hedef: "jQuery",
                    yapildiMi: true
                },
                {
                    hedef: "React",
                    yapildiMi: true
                },
                {
                    hedef: "React Router",
                    yapildiMi: true
                },
                {
                    hedef: "Redux",
                    yapildiMi: false
                },
                {
                    hedef: "Gulp",
                    yapildiMi: true
                },
                {
                    hedef: "Webpack",
                    yapildiMi: false
                },
                {
                    hedef: "Türkçe doküman hazırla (4/10)",
                    yapildiMi: false
                },
                {
                    hedef: "Turkuaz Css",
                    yapildiMi: false
                },
                {
                    hedef: "Turkuaz React",
                    yapildiMi: false
                },
                {
                    hedef: "Turkuaz Snippet",
                    yapildiMi: false
                },
                {
                    hedef: "Frontend eğitim sitesi aç",
                    yapildiMi: false
                },
                {
                    hedef: "Freelance iş yap (2/25)",
                    yapildiMi: false
                },
                {
                    hedef: "Kurumsal bir firmada 1 seneni doldur",
                    yapildiMi: false
                },
                {
                    hedef: "Gençlere kodlama eğitimi ver",
                    yapildiMi: false
                },
                {
                    hedef: "Şirket aç",
                    yapildiMi: false
                }
            ],
            referanslar: [
                {
                    ad: "Yeşilçam Sokağı",
                    link: "https://yesilcamsokagi.com.tr/",
                    aciklama: "Yeşilçam'ın izlerini taşıyan harika konseptli kafeler",
                    resim: "http://cdn2.tstatic.net/tribunnews/foto/bank/images/kafe-batan-waru-di-ubud-bali_20170306_130951.jpg",
                    ay: "Mayıs",
                    yil: 2018,
                    teknolojiler: ["HTML", "CSS", "JavaScript", "Turkuaz Css"]
                },
                {
                    ad: "Toroslar Kapitone",
                    link: "https://toroslarkapitone.com/",
                    aciklama: "İstanbul'un en kaliteli, büyük ve köklü kapitone fabrikası",
                    resim: "http://www.teksmomak.com/wp-content/uploads/2016/09/IMG-20160825-WA0006.jpg",
                    ay: "Eylül",
                    yil: 2017,
                    teknolojiler: ["HTML", "CSS", "jQuery", "Materialize"]
                }
            ],
            sonGuncellenmeTarihi: "28 Nisan 2018"
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
        const { aciklamaListesi, kisiselBilgiler, hakkinda, hakkindaBaslik, hedefler, hedeflerYazilim, referanslar, cvButon, sonGuncellenmeTarihi } = this.state;

        return (
            <Router>
                <Fragment>
                    <Header onClick={this.mobilMenu} />
                    <main>
                        <KisiselBilgiler aciklamaListesi={aciklamaListesi} kisiselBilgiler={kisiselBilgiler} >
                            <SosyalAglar />
                        </KisiselBilgiler>
                        <Switch>
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
                            <Route path="/referanslar"  render={()=>
                                <Referanslar
                                    referanslar={referanslar}
                                />}/>
                            <Route path="/blog"         component={Blog} />
                            <Route path="/iletisim"     component={Iletisim} />
                            <Route                            component={SayfaYok} />
                        </Switch>
                    </main>
                    <Footer sonGuncellenmeTarihi={sonGuncellenmeTarihi} />
                </Fragment>
            </Router>
        );
    }
}
