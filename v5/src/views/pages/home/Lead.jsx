import React, {Component} from "react";
import styled from "styled-components";
import "./Lead.css"

class Lead extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      aboutEng: {
        "hi": "Hi, I'm Ömer Gülçiçek.",
        "skills": [
          "HTML5", "CSS", "SASS", "JavaScript", "ES6", "React", "Redux"
        ],
        "description": [
          "I am a Frontend Developer; I am the founder of <a href='https://turkuazcss.com/' class='turkuaz' target='_blank' rel='noopener noreferrer'>Turkuaz</a> and <a href='https://turkcedokuman.com/' class='turkcedokuman' target='_blank' rel='noopener noreferrer'>Türkçe Doküman</a>. Most of my work is open source and publicly available on <a href='https://github.com/omergulcicek' class='github' target='_blank' rel='noopener noreferrer'>GitHub</a>.","If you want to work together, please send an e-mail to <a href='mailto:iletisim@omergulcicek.com?subject=Freelance&nbsp;Job&nbsp;Offer&amp;body=Hi&nbsp;Omer,&nbsp;I&nbsp;have&nbsp;a&nbsp;project&nbsp;and&nbsp;I&nbsp;want&nbsp;to&nbsp;work&nbsp;with&nbsp;you.&nbsp;Details&nbsp;are&nbsp;as&nbsp;follows;' class='mail'>iletisim@omergulcicek.com</a>.",
          "Apart from the software, chess, swimming, football, rubik's cube, ney instrument and games to spend time."
        ]
      },

      about: {
        "hi": "Merhaba, ben Ömer Gülçiçek.",
        "skills": [
          "HTML5", "CSS", "SASS", "JavaScript", "ES6", "React", "Redux"
        ],
        "description": [
          "Frontend Developer'ım; <a href='https://turkuazcss.com/' class='turkuaz' target='_blank' rel='noopener noreferrer'>Turkuaz</a> ve <a href='https://turkcedokuman.com/' class='turkcedokuman' target='_blank' rel='noopener noreferrer'>Türkçe Doküman</a>'ın kurucusuyum. Çalışmalarımın çoğu açık kaynak ve <a href='https://github.com/omergulcicek' class='github' target='_blank' rel='noopener noreferrer'>GitHub</a>'dan ulaşabilirsiniz.",
          "Birlikte çalışmak isterseniz <a href='mailto:iletisim@omergulcicek.com?subject=Freelance&nbsp;İş&nbsp;Teklifi&amp;body=Merhaba&nbsp;Ömer,&nbsp;benim&nbsp;bir&nbsp;projem&nbsp;var&nbsp;ve&nbsp;seninle&nbsp;çalışmak&nbsp;istiyorum.&nbsp;Detaylar&nbsp;şu&nbsp;şekilde;' class='mail'>iletisim@omergulcicek.com</a> adresine mail atabilirsiniz.",
          "Yazılım dışında satranç, yüzme, futbol, rubik küp, ney enstrümanı ve oyunlara vakit ayırıyorum."
        ]
      }
    };
  }
  render() {
    const html = document.getElementsByTagName("html")[0],
          url = new URL(window.location.href),
          lang = url.searchParams.get("lang") || html.getAttribute("lang");

    let me = [];

    lang === "en" ?
      me = this.state.aboutEng
    : 
      me = this.state.about;
    
    return (
      <Section className="lead">
        <Title>
          <Hi><span role="img" aria-label="👋🏻">👋🏻</span></Hi>
          {me.hi}
        </Title>

        <Subtitle>
          {
          // Son özellik hariç hepsinin sonuna virgül ekler
          me.skills.map((e,i) => `${e}${i !== me.skills.length -1 ? ", " : ""}`)
          }
        </Subtitle>

        {
          me.description.map((e,i) => <p dangerouslySetInnerHTML={{__html: e}} key={i}></p>)
          }


      </Section>
    );
  }
}

export default Lead;

const Section = styled.section`
  animation-duration: .75s;
  animation-name: fadeInUp;
`;

const Hi = styled.div`
  animation-delay: 2s;
  animation-duration: 2.5s;
  animation-name: wave;
  display: none;
  position: absolute;
  right: calc(100% + 8px);
  transform-origin: 70% 70%

  @media (min-width: 1024px) {
    display: block;
    right: calc(100% + 16px);
  }
`;

const Title = styled.h1`
  color: var(--text-color);
  font-weight: 700;
  font-size: 19px;
  line-height: 1.75;
  margin: 0;
  position: relative;

  @media (min-width: 1024px) {
    font-size: 40px;
  }
`;

const Subtitle = styled.em`
  color: #999;
  display: inline-block;
  font-size: 1rem;
  font-style: italic;
  font-weight: 100;
  margin-bottom: 16px;
  margin-top: 0;

  @media (min-width: 1024px) {
    font-size: 1.2rem;
    margin-bottom: 24px;
  }
`;