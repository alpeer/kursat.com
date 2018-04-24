import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        const { sonGuncellenmeTarihi } = this.props;
        return (
            <footer>
                <div className="container">
                    <p>
                        Copyright © {new Date().getFullYear()}
                    </p>
                    <span>
                        Son Güncellenme Tarihi: { sonGuncellenmeTarihi }
                    </span>
                </div>
            </footer>
        );
    }
}
