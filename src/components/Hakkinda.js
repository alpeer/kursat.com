import React, { Component }     from "react";
import CV                       from "./../cv.pdf";

export default class Hakkinda extends Component {
    render() {
        const { hakkindaBaslik, hakkinda, cvButon } = this.props;
        return (
            <section>
                <div className="hakkinda">
                    <div className="container">
                        <div className="flex">
                            <div className="ck12">
                                <h2>{ hakkindaBaslik }</h2>
                                { hakkinda.map((p, i) => <p key={i} dangerouslySetInnerHTML={{__html: p}}></p> ) }

                                <a href={CV} className="buton" target="_blank" rel="noopener noreferrer">{cvButon}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
