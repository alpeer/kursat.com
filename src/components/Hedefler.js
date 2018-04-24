import React, { Component } from "react";

export default class Hedefler extends Component {
    render() {
        const { hedefler, hedeflerYazilim } = this.props;
        const hedeflerListesi = hedefler.map(function(e, i) {
            if (e.yapildiMi && typeof(e.detay) === "string") {
                return <details key={i} className="bitti link"><summary>{ e.hedef }</summary><p>{e.detay}</p></details>
            }
            else if (e.yapildiMi) {
                return <li key={i} className="bitti"> { e.hedef } </li>
            }
            else {
                return <li key={i}> { e.hedef } </li>
            }
        })
        const hedeflerYazilimListesi = hedeflerYazilim.map(function(e, i) {
            if (e.yapildiMi) {
                return <li key={i} className="bitti"> { e.hedef } </li>
            }
            else {
                return <li key={i}> { e.hedef } </li>
            }
        })
        return (
            <section>
                <div className="hedefler">
                    <div className="container">
                        <div className="flex">
                            <div className="ck12 o6">
                                <h2>Hedefler</h2>
                                <p>

                                </p>

                                <ul>
                                    { hedeflerListesi }
                                </ul>
                            </div>
                            <div className="ck12 o6">
                                <h2>Yazılım Hedefleri</h2>
                                <p>
                                
                                </p>

                                <ul>
                                    { hedeflerYazilimListesi }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
