import React, {Component} from 'react'
import styles from './step.module.scss'

class Steps extends Component {
    render() {
        const {children, stage} = this.props
        switch(stage) {
            case 5:
                return(
                    <section className={styles.__bound}>
                        <section className={styles.__tooltip}>
                            <small>{children}</small>
                        </section>
                        <section className={styles.__steps}>
                            <ul className={styles.__line}>
                                    <li className={[styles.__dot, styles._active].join(' ')}></li>
                                    <li className={[styles.__dot, styles._active].join(' ')}></li>
                                    <li className={[styles.__dot, styles._active].join(' ')}></li>
                                    <li className={[styles.__dot, styles._active].join(' ')}></li>
                                    <li className={[styles.__dot, styles._active].join(' ')}></li>
                            </ul>
                        </section>
                    </section>
                )
            case 4:
                return(
                    <section className={styles.__bound}>
                        <section className={styles.__tooltip}>
                            <small>{children}</small>
                        </section>
                        <section className={styles.__steps}>
                            <ul className={styles.__line}>
                                    <li className={[styles.__dot, styles._active].join(' ')}></li>
                                    <li className={[styles.__dot, styles._active].join(' ')}></li>
                                    <li className={[styles.__dot, styles._active].join(' ')}></li>
                                    <li className={[styles.__dot, styles._active].join(' ')}></li>
                                    <li className={styles.__dot}></li>
                            </ul>
                        </section>
                    </section>
                )
            case 3:
                return(
                    <section className={styles.__bound}>
                        <section className={styles.__tooltip}>
                            <small>{children}</small>
                        </section>
                        <section className={styles.__steps}>
                            <ul className={styles.__line}>
                                    <li className={[styles.__dot, styles._active].join(' ')}></li>
                                    <li className={[styles.__dot, styles._active].join(' ')}></li>
                                    <li className={[styles.__dot, styles._active].join(' ')}></li>
                                    <li className={styles.__dot}></li>
                                    <li className={styles.__dot}></li>
                            </ul>
                        </section>
                    </section>
                )
            case 2:
                return(
                    <section className={styles.__bound}>
                        <section className={styles.__tooltip}>
                            <small>{children}</small>
                        </section>
                        <section className={styles.__steps}>
                            <ul className={styles.__line}>
                                    <li className={[styles.__dot, styles._active].join(' ')}></li>
                                    <li className={[styles.__dot, styles._active].join(' ')}></li>
                                    <li className={styles.__dot}></li>
                                    <li className={styles.__dot}></li>
                                    <li className={styles.__dot}></li>
                            </ul>
                        </section>
                    </section>
                )
            default:
                return(
                    <section className={styles.__bound}>
                        <section className={styles.__tooltip}>
                            <small>{children}</small>
                        </section>
                        <section className={styles.__steps}>
                            <ul className={styles.__line}>
                                    <li className={[styles.__dot, styles._active].join(' ')}></li>
                                    <li className={styles.__dot}></li>
                                    <li className={styles.__dot}></li>
                                    <li className={styles.__dot}></li>
                                    <li className={styles.__dot}></li>
                            </ul>
                        </section>
                    </section>
                )
        }
    }
}
export default Steps