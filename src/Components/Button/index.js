import React from 'react'
import styles from './button.module.scss'

const Button = ({ children, clic }) =>
    <section className={styles.__bound}>
        <button className={styles.__form} onClick={clic}>{children}</button>
    </section>

export default Button