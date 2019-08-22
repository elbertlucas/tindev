import React from 'react';
import './Main.css';
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

import './Main.css';

export default function Main({ match }) {
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />

            <ul>
                <li>
                    <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt="" />
                    <footer>
                        <strong>Felipe Deschamps </strong>
                        <p>Programador e cantor sertanejo nos tempos livres</p>
                        <div className="buttons">
                            <button type="button">
                                <img src={dislike} alt="Like" />
                                <img src={like} alt="Like" />
                            </button>
                        </div>
                    </footer>
                </li>

                <li>
                    <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt="" />
                    <footer>
                        <strong>Felipe Deschamps </strong>
                        <p>Programador e cantor sertanejo nos tempos livres</p>
                        <div className="buttons">
                            <button type="button">
                                <img src={dislike} alt="Like" />
                                <img src={like} alt="Like" />
                            </button>
                        </div>
                    </footer>
                </li>

                <li>
                    <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt="" />
                    <footer>
                        <strong>Felipe Deschamps </strong>
                        <p>Programador e cantor sertanejo nos tempos livres</p>
                        <div className="buttons">
                            <button type="button">
                                <img src={dislike} alt="Like" />
                                <img src={like} alt="Like" />
                            </button>
                        </div>
                    </footer>
                </li>
            </ul>
        </div>
    )
}