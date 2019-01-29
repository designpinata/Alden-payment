import React, {Component} from 'react'
import { Layout } from './../../Components/Grid'
import styles from './method.module.scss'

// Components
import Button from '../../Components/Button';

class Method extends Component {
    render() {
        return(
            <section className={styles.__view}>
                <Layout type="container">
                    <Layout type="row" align="center">
                        <Layout type="column" columns="12">
                            <h1>Bienvenido</h1>
                            <h3>Seleccione un metodo de búsqueda para consultar su orden de compra:</h3>
                        </Layout>
                        <Layout type="column" columns="12">
                            <Layout type="row" align="center">
                                <Layout type="column" columns="4">
                                    <Button>Numero de servicio</Button>
                                </Layout>
                                <Layout type="column" columns="4">
                                    <Button>Nombre de consumidor</Button>
                                </Layout>
                            </Layout>    
                        </Layout>
                    </Layout>
                </Layout>
            </section>
        )
    }
}

export default Method