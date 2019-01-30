import React, {Component} from 'react'
import { Layout } from './../../Components/Grid'
import styles from './sname.module.scss'

// Components
import Button from './../../Components/Button';
import Steps from './../../Components/Steps'
import Nav from './../../Components/Nav';
import Input from './../../Components/Input';
import Results from './../../Components/Results'

const results = [
    {
        id: 0,
        serviceNum: 878798787,
        paid: 100,
        pending: 300,
        total: 400
    }, {
        id: 1,
        serviceNum: 878798787,
        paid: 200,
        pending: 200, 
        total: 400
    }, {
        id: 2,
        serviceNum: 878798787,
        paid: 200,
        pending: 200, 
        total: 400
    }, 
]; 

class ServiceName extends Component {
    render() {
        return(
            <section className={styles.__view}>
                <Nav back={true}><h3>BÚSQUEDA POR NOMBRE</h3></Nav>
                <Layout type="container">
                    <Layout type="row" align="center">
                        <Layout type="column" columns="12">
                            <h3>Ingresa tu nombre para poder continuar</h3>
                        </Layout>
                        <Layout type="column" columns="12">
                            <Layout type="row" align="center">
                                <Layout type="column" columns="6">
                                    <Input 
                                        type="text"
                                        id="serviceName"
                                        placeholder="Nombre completo"
                                        label={false}>Nombre de cliente</Input>
                                </Layout>
                            </Layout>
                            <Layout type="row" align="center">
                                <Layout type="column" columns="6">
                                    <Button disabled>Buscar servicio</Button>
                                </Layout>
                            </Layout>
                            <Layout type="row" align="center">
                                <Layout type="column" columns="6">
                                    <Results type="name" list={results}></Results>
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

export default ServiceName