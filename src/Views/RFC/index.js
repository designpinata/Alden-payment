import React, {Component} from 'react'
import { Layout } from './../../Components/Grid'
import styles from './snum.module.scss'

// Components
import Button from './../../Components/Button';
import Steps from './../../Components/Steps'
import Nav from './../../Components/Nav';
import Input from './../../Components/Input';

class RFC extends Component {
    render() {
        return(
            <section className={styles.__view}>
                <Nav back={true}><h3>FORMATO PARA FACTURAR</h3></Nav>
                <Layout type="container">
                    <Layout type="row" align="center">
                        <Layout type="column" columns="6">
                            <Layout type="row">
                                <Layout type="column" columns="12">
                                    <Input 
                                        type="email"
                                        id="rfcClientMail"
                                        placeholder="Correo electrónico"
                                        align="left"
                                        label={true}
                                        >Correo electrónico</Input>
                                </Layout>
                                <Layout type="column" columns="12">
                                    <Input 
                                        type="text"
                                        id="rfcClientName"
                                        placeholder="Nombre completo"
                                        value="César Chávez"
                                        align="left"
                                        label={true}
                                        disabled={true}>Nombre de cliente</Input>
                                </Layout>
                                <Layout type="row">
                                    <Layout type="column" columns="6">
                                        <Input 
                                            type="text"
                                            id="rfcClient"
                                            placeholder="RFC"
                                            align="left"
                                            label={true}>RFC</Input>
                                    </Layout>
                                    <Layout type="column" columns="6">
                                        <Input 
                                            type="text"
                                            id="rfcCardType"
                                            placeholder="Tipo de tarjeta"
                                            align="left"
                                            label={true}
                                            disabled={true}>Tipo de tarjeta</Input>
                                    </Layout>
                                </Layout>
                                <Layout type="column" columns="12">
                                    <Input 
                                        type="number"
                                        id="rfcCFI"
                                        placeholder="G01 - Adquisición de mercancias"
                                        align="left"
                                        label={true}>CFI</Input>
                                </Layout>
                                <Layout type="column" columns="12">
                                    <Button disabled>Facturar</Button>
                                </Layout>
                            </Layout>
                        </Layout>
                        <Steps stage={5}>Facturar</Steps>
                    </Layout>
                </Layout>
            </section>
        )
    }
}

export default RFC