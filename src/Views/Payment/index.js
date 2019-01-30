import React, {Component} from 'react'
import { Layout } from './../../Components/Grid'
import styles from './snum.module.scss'

// Components
import Button from './../../Components/Button';
import Steps from './../../Components/Steps'
import Nav from './../../Components/Nav';
import Input from './../../Components/Input';

class Payment extends Component {
    render() {
        return(
            <section className={styles.__view}>
                <Nav back={true}><h3>FORMATO DE PAGO</h3></Nav>
                <Layout type="container">
                    <Layout type="row" align="center">
                        <Layout type="column" columns="6">
                            <Layout type="row">
                                <Layout type="column" columns="12">
                                    <Input 
                                        type="text"
                                        id="clientName"
                                        placeholder="Nombre completo"
                                        value="César Chávez"
                                        align="left"
                                        label={true}
                                        disabled={true}>Nombre de cliente</Input>
                                </Layout>
                                <Layout type="column" columns="12">
                                    <Input 
                                        type="email"
                                        id="clientMail"
                                        placeholder="Correo electrónico"
                                        value="cesarchavezcal@gmail.com"
                                        align="left"
                                        label={true}
                                        disabled={true}>Correo electrónico</Input>
                                </Layout>
                                <Layout type="row">
                                    <Layout type="column" columns="6">
                                        <Input 
                                            type="text"
                                            id="clientOrder"
                                            placeholder="Numero de orden"
                                            value="223872987"
                                            align="left"
                                            label={true}
                                            disabled={true}>Nº de orden</Input>
                                    </Layout>
                                    <Layout type="column" columns="6">
                                        <Input 
                                            type="text"
                                            id="servicePrice"
                                            placeholder="Total"
                                            value={`1650$`}
                                            align="left"
                                            label={true}
                                            disabled={true}>Total</Input>
                                    </Layout>
                                </Layout>
                                <Layout type="column" columns="12">
                                    <Input 
                                        type="number"
                                        id="cardNumber"
                                        placeholder="XXXX XXXX XXXX XXXX"
                                        align="left"
                                        label={true}>Numero de tarjeta</Input>
                                </Layout>
                                <Layout type="row">
                                    <Layout type="column" columns="6">
                                        <Input 
                                            type="text"
                                            id="expDate"
                                            placeholder="MM / YY"
                                            align="left"
                                            label={true}>Fecha de expiración</Input>
                                    </Layout>
                                    <Layout type="column" columns="6">
                                        <Input 
                                            type="text"
                                            id="ccv"
                                            placeholder="XXX"
                                            align="left"
                                            label={true}>Código CCV</Input>
                                    </Layout>
                                </Layout>
                                <Layout type="column" columns="12">
                                    <Button disabled>Pagar servicio</Button>
                                </Layout>
                            </Layout>
                        </Layout>
                        <Steps stage={3}>Pago de servicio</Steps>
                    </Layout>
                </Layout>
            </section>
        )
    }
}

export default Payment