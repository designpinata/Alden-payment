import React from 'react'
import styles from './foot.module.scss'

import Layout from './../Grid'

const Footer = () =>
    <footer className={styles.__shape}>
        <Layout type="container">
            <Layout type="row" align="center">
                <Layout type="column" columns="12">
                    <small className={styles.__white}>Morcom International, Inc</small>
                </Layout>
                <Layout type="column" columns={12}>
                    <small className={styles.__white}>Alden Weather Systems Division</small>
                </Layout>
            </Layout>
        </Layout>
    </footer>

export default Footer