import React, {Component} from 'react'
import { Layout } from './../../Components/Grid'
import styles from './method.module.scss'

// Components
import Button from './../../Components/Button';

class SuccessRFC extends Component {
    render() {
        return(
            <section className={styles.__view}>
                <Layout type="container">
                    <Layout type="row" align="center">
                        <Layout type="column" columns="12">
                            <h1>¡Muchas gracias!</h1>
                            <h3>¿Desea realizar alguna otra operación?</h3>
                        </Layout>
                        <Layout type="column" columns="12">
                            <Layout type="row" align="center">
                                <Layout type="column" columns="4">
                                    <Button>Si</Button>
                                </Layout>
                                <Layout type="column" columns="4">
                                    <Button>No</Button>
                                </Layout>
                            </Layout>    
                        </Layout>
                    </Layout>
                </Layout>
            </section>
        )
    }
}

export default SuccessRFC