import React from 'react'

import Logo from '../assets/Logo1.png'

import './styles.css'

export default function Login(){
    return(
        <div id="page-login">
            <div>
                <img src={Logo} alt="logo"/>
            </div>

            <div>
                <form>
                    <fieldset>
                        <label>
                            Usuário
                        </label>
                        <input type="text" id="user"/>
                        <label>
                            Senha
                        </label>
                        <input type="password" id="password"/>
                    </fieldset>
                    
                    <fieldset>
                        <input type="submit" value="ENTRAR" className="btn login"/>
                        <input type="button" value="CADASTRAR" className="btn cad"/>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}