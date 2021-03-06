import React, {Component} from 'react'
import { Layout } from './../../Components/Grid'
import styles from './snum.module.scss'

// Components
import Button from './../../Components/Button';
import Steps from './../../Components/Steps'
import Nav from './../../Components/Nav';
import Input from './../../Components/Input';
import Results from './../../Components/Results'

class ServiceNumber extends Component {
    render() {
        return(
            <section className={styles.__view}>
                <Nav back={true}><h3>BUSQUEDA POR NUMERO DE SERVICIO</h3></Nav>
                <Layout type="container">
                    <Layout type="row" align="center">
                        <Layout type="column" columns="12">
                            <h3>Ingresa tu numero de servicio para continuar</h3>
                        </Layout>
                        <Layout type="column" columns="12">
                            <Layout type="row" align="center">
                                <Layout type="column" columns="6">
                                    <Input 
                                        type="number"
                                        id="serviceNumber"
                                        placeholder="Numero de servicio"
                                        helper="Su numero de servicio se encuentra en la parte superior de su recibo."
                                        label={false}>Numero de servicio</Input>
                                </Layout>
                            </Layout>
                            <Layout type="row" align="center">
                                <Layout type="column" columns="6">
                                    <Button disabled>Buscar servicio</Button>
                                </Layout>
                            </Layout>
                            <Layout type="row" align="center">
                                <Layout type="column" columns="6">
                                    <Results type="error">No hay servicios registrados a ese folio, intente de nuevo.</Results>
                                </Layout>
                            </Layout>    
                        </Layout>
                        <Steps stage={2}>Búsqueda de servicio</Steps>
                    </Layout>
                </Layout>
            </section>
        )
    }
}

export default ServiceNumber