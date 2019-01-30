import React, {Component} from 'react'
import { Layout } from './../../Components/Grid'
import styles from './method.module.scss'

// Components
import Button from './../../Components/Button';
import Steps from './../../Components/Steps'

class SuccessPayment extends Component {
    render() {
        return(
            <section className={styles.__view}>
                <Layout type="container">
                    <Layout type="row" align="center">
                        <Layout type="column" columns="12">
                            <h1>Pago realizado exitosamente</h1>
                            <h3>¿Qué dese hacer a continuación?</h3>
                        </Layout>
                        <Layout type="column" columns="12">
                            <Layout type="row" align="center">
                                <Layout type="column" columns="4">
                                    <Button>Tramitar factura</Button>
                                </Layout>
                                <Layout type="column" columns="4">
                                    <Button>Terminar operación</Button>
                                </Layout>
                            </Layout>    
                        </Layout>
                        <Steps stage={4}>Pago exitoso</Steps>
                    </Layout>
                </Layout>
            </section>
        )
    }
}

export default SuccessPayment