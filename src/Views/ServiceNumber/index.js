import React, {Component} from 'react'
import { Layout } from './../../Components/Grid'
import styles from './snum.module.scss'

// Components
import Button from './../../Components/Button';
import Steps from './../../Components/Steps'
import Nav from '../../Components/Nav';

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
                                <Layout type="column" columns="4">
                                    <Button disabled>Buscar servicio</Button>
                                </Layout>
                            </Layout>    
                        </Layout>
                        <Steps>Inicio</Steps>
                    </Layout>
                </Layout>
            </section>
        )
    }
}

export default ServiceNumber