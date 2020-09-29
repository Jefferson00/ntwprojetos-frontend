import React from 'react'
import Logo from '../assets/Logo-w.png'

export default function Home() {
    return (
        <div>
            <header>
                <div>
                    <img src={Logo} alt='Logo' />
                </div>
                <div class='user-info'>
                    <div id="userName">
                        <p>Usuário</p>
                    </div>
                    <div id="logout">
                        <p>Sair</p>
                    </div>
                </div>
            </header>

            <section class="editais">
                <div class="editais-title">
                    <p>Editais</p>
                </div>

                <div class="editais-list">
                    <div class="editais-list-item">
                        <div class="editais-description">
                            <p>Edital 20/2020 TRTFT15 - Computadores</p>
                            <p>20/09</p>
                        </div>
                        <div class="editais-description editais-status">
                            <p>Agendado</p>
                        </div>
                        <div class="editais-description editais-plus-button">
                            <p>+</p>
                        </div>
                    </div>
                    <div class="itens">
                        <div class="itens-list-header">
                            <p>Item</p>
                            <p>Produto</p>
                            <p>Fabricante</p>
                            <p>Quantidade</p>
                            <p>Valor estimado</p>
                            <p>Responsável</p>
                            <p>Status</p>
                        </div>
                        <div class="itens-list-item">
                            <p>Item 1</p>
                            <p>Computador</p>
                            <p>Lenovo</p>
                            <p>500</p>
                            <p>R$ 5.000,00</p>
                            <p>Fulano</p>
                            <p>Em análise</p>
                        </div>
                        <div class="itens-list-item">
                            <p>Item 1</p>
                            <p>Notebook</p>
                            <p>Lenovo</p>
                            <p>200</p>
                            <p>R$ 5.000,00</p>
                            <p>Fulano</p>
                            <p>Em análise</p>
                        </div>
                        <div class="itens-list-item">
                            <p>Item 1</p>
                            <p>Scanner</p>
                            <p>Fujtsu</p>
                            <p>20</p>
                            <p>R$ 1.000,00</p>
                            <p>Otario</p>
                            <p>Desistência</p>
                        </div>
                    </div>

                    <div class="button-close">
                        <span>X</span>
                    </div>

                    <div class="editais-list-item">
                        <div class="editais-description">
                            <p>Edital 20/2020 TRTFT15 - Computadores</p>
                            <p>20/09</p>
                        </div>
                        <div class="editais-description editais-status">
                            <p>Agendado</p>
                        </div>
                        <div class="editais-description editais-plus-button">
                            <p>+</p>
                        </div>
                    </div>
                    <div class="itens">
                        <div class="itens-list-header">
                            <p>Item</p>
                            <p>Produto</p>
                            <p>Fabricante</p>
                            <p>Quantidade</p>
                            <p>Valor estimado</p>
                            <p>Responsável</p>
                            <p>Status</p>
                        </div>
                        <div class="itens-list-item">
                            <p>Item 1</p>
                            <p>Computador</p>
                            <p>Lenovo</p>
                            <p>500</p>
                            <p>R$ 5.000,00</p>
                            <p>Fulano</p>
                            <p>Em análise</p>
                        </div>
                        <div class="itens-list-item">
                            <p>Item 1</p>
                            <p>Notebook</p>
                            <p>Lenovo</p>
                            <p>200</p>
                            <p>R$ 5.000,00</p>
                            <p>Fulano</p>
                            <p>Em análise</p>
                        </div>
                        <div class="itens-list-item">
                            <p>Item 1</p>
                            <p>Scanner</p>
                            <p>Fujtsu</p>
                            <p>20</p>
                            <p>R$ 1.000,00</p>
                            <p>Otario</p>
                            <p>Desistência</p>
                        </div>
                    </div>

                    <div class="button-close">
                        <span>X</span>
                    </div>

                    <div class="editais-list-item">
                        <div class="editais-description">
                            <p>Edital 20/2020 TRTFT15 - Computadores</p>
                            <p>20/09</p>
                        </div>
                        <div class="editais-description editais-status">
                            <p>Agendado</p>
                        </div>
                        <div class="editais-description editais-plus-button">
                            <p>+</p>
                        </div>
                    </div>
                    <div class="itens">
                        <div class="itens-list-header">
                            <p>Item</p>
                            <p>Produto</p>
                            <p>Fabricante</p>
                            <p>Quantidade</p>
                            <p>Valor estimado</p>
                            <p>Responsável</p>
                            <p>Status</p>
                        </div>
                        <div class="itens-list-item">
                            <p>Item 1</p>
                            <p>Computador</p>
                            <p>Lenovo</p>
                            <p>500</p>
                            <p>R$ 5.000,00</p>
                            <p>Fulano</p>
                            <p>Em análise</p>
                        </div>
                        <div class="itens-list-item">
                            <p>Item 1</p>
                            <p>Notebook</p>
                            <p>Lenovo</p>
                            <p>200</p>
                            <p>R$ 5.000,00</p>
                            <p>Fulano</p>
                            <p>Em análise</p>
                        </div>
                        <div class="itens-list-item">
                            <p>Item 1</p>
                            <p>Scanner</p>
                            <p>Fujtsu</p>
                            <p>20</p>
                            <p>R$ 1.000,00</p>
                            <p>Otario</p>
                            <p>Desistência</p>
                        </div>
                    </div>

                    <div class="button-close">
                        <span>X</span>
                    </div>
                </div>
            </section>
        </div>
    )
}