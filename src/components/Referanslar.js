import React, { Component }     from "react";
import angular                  from "./../logolar/angular.png";
import bootstrap                from "./../logolar/bootstrap.png";
import css                      from "./../logolar/css.png";
import es6                      from "./../logolar/es6.png";
import github                   from "./../logolar/github.png";
import grunt                    from "./../logolar/grunt.png";
import gulp                     from "./../logolar/gulp.png";
import html                     from "./../logolar/html.png";
import javascript               from "./../logolar/javascript.png";
import jquery                   from "./../logolar/jquery.png";
import materialize              from "./../logolar/materialize.png";
import react                    from "./../logolar/react.png";
import redux                    from "./../logolar/redux.png";
import router                   from "./../logolar/router.png";
import sass                     from "./../logolar/sass.png";
import turkuazcss               from "./../logolar/turkuazcss.png";
import vue                      from "./../logolar/vue.png";
import webpack                  from "./../logolar/webpack.png";
import diger                    from "./../logolar/diger.png";

export default class Referanslar extends Component {
    selectImg(logo) {
        let sonuc = "";
        switch (logo.toLowerCase().trim()) {
          case "angular":     sonuc = angular;      break;
          case "bootstrap":   sonuc = bootstrap;    break;
          case "css":         sonuc = css;          break;
          case "es6":         sonuc = es6;          break;
          case "github":      sonuc = github;       break;
          case "grunt":       sonuc = grunt;        break;
          case "gulp":        sonuc = gulp;         break;
          case "html":        sonuc = html;         break;
          case "javascript":  sonuc = javascript;   break;
          case "jquery":      sonuc = jquery;       break;
          case "materialize": sonuc = materialize;  break;
          case "react":       sonuc = react;        break;
          case "redux":       sonuc = redux;        break;
          case "router":      sonuc = router;       break;
          case "sass":        sonuc = sass;         break;
          case "turkuaz css":  sonuc = turkuazcss;   break;
          case "vue":         sonuc = vue;          break;
          case "webpack":     sonuc = webpack;      break;
          default:            sonuc = diger;        break;
        }
        return sonuc;
    }
    render() {
        const { referanslar } = this.props;
        const referanslarListesi = referanslar.map((e, i) =>
            <div className="ck12 o6 b4" key={i}>
                <div className="referans">
                    <div className="yil">
                        <span>{e.ay}</span> {e.yil}
                    </div>
                    <div className="resim">
                        <img src={e.resim} alt="referans görsel" />
                    </div>
                    <div className="aciklama">
                        <h4>{e.ad}</h4>
                        <a href={e.link}>{e.link}</a>
                        <div className="detay">
                            <p>
                                {e.aciklama}
                            </p>
                            <p>
                                {e.teknolojiler.map((e,i) =>
                                    <img src={this.selectImg(e)} alt={e} title={e + " kullanılmıştır."} height="24" key={i} />
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
        return (
            <section>
                <div className="referanslar">
                    <div className="container">
                        <div className="flex">
                            <div className="ck12">
                                <h2>Referanslar</h2>
                                <div className="flex">
                                    { referanslarListesi }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
