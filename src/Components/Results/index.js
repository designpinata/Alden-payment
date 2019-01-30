import React, {Component} from 'react'
import styles from './results.module.scss'
import Service from './../../Assets/Icons/service'

class Results extends Component {
    render() {
        const {type, children, list} = this.props
            switch(type) {
                case "error":
                    return (
                        <section className={styles.__error}>
                            <h3>{children}</h3>
                        </section>
                    )
                case "name":
                    return (
                        <section className={styles.__results}>
                            <header>
                                <ul className={styles.__head}>
                                    <li className={styles.__name}>
                                        <h3>Servicios a su nombre</h3>
                                    </li>
                                    <li className={styles.__price}>
                                        <h3>Anticipo</h3>
                                    </li>
                                    <li className={styles.__price}>
                                        <h3>Total</h3>
                                    </li>
                                </ul>
                            </header>
                            <ul className={styles.__queries}>
                            {list.map((item) =>
                                <li className={styles.__query} key={item.id}>
                                    <div className={styles.__name}>
                                        <div className={styles.__icon}>
                                            <Service />
                                        </div>
                                        <h3>{item.serviceNum}</h3>
                                    </div>
                                    <h3 className={styles.__price}>{item.paid}</h3>
                                    <h3 className={styles.__price}>{item.pending}</h3>
                                </li>
                            )}
                            </ul>
                        </section>
                    )
                case "service":
                    return (
                        <section className={styles.__error}>
                            <h3>{children}</h3>
                        </section>
                    )
                default:
                    return null
            }
    }
}

export default Results;