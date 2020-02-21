import React from "react"

import { SEO } from "./../components"
import { AboutTitle, Turkuaz, TurkceDokuman, GitHub, Mail } from "./../utility/styled"


const AboutPage = () => {
  return (
    <section>
      <SEO title="Hakkında" />

      <AboutTitle>
        <span role="img" aria-label="👋🏻">👋🏻</span>

        Merhaba, Ben Ömer Gülçiçek.
      </AboutTitle>

      <p>
        { new Date().getFullYear() - 1993 } yaşındayım. Yazılım mühendisiyim. İstanbul'da yaşıyorum.
      </p>

      <p>
        Frontend Developer'ım; <Turkuaz href="https://turkuazcss.com/"  target="_blank" rel="noopener noreferrer" className="aboutTurkuaz">Turkuaz</Turkuaz> ve <TurkceDokuman href="https://turkcedokuman.com/" target="_blank" rel="noopener noreferrer" className="aboutTurkcedokuman">Türkçe Doküman</TurkceDokuman>'ın kurucusuyum. Çalışmalarımın çoğu açık kaynak ve <GitHub href="https://github.com/omergulcicek" target="_blank" rel="noopener noreferrer" className="aboutGithub">GitHub</GitHub>'dan ulaşabilirsiniz.
      </p>

      <p>
        Birlikte çalışmak isterseniz <Mail href="mailto:iletisim@omergulcicek.com?subject=Freelance&nbsp;İş&nbsp;Teklifi&amp;body=Merhaba&nbsp;Ömer,&nbsp;benim&nbsp;bir&nbsp;projem&nbsp;var&nbsp;ve&nbsp;seninle&nbsp;çalışmak&nbsp;istiyorum.&nbsp;Detaylar&nbsp;şu&nbsp;şekilde; ">iletisim@omergulcicek.com</Mail> adresine mail atabilirsiniz.
      </p>

      <p>
        Yazılım dışında satranç, yüzme, futbol, rubik küp, ney enstrümanı ve oyunlara vakit ayırıyorum.
      </p>
      
      <p>
        Özgeçmiş: <a href='https://omergulcicek.com/cv.pdf' target='_blank' rel='noopener noreferrer'>cv.pdf</a>
      </p>
    </section>
  )
}

export default AboutPage