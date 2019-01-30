import React, {Component} from 'react'
import styles from './nav.module.scss'

// Components
import Button from './../Button'

class Nav extends Component {
    render() {
        const {back, children} = this.props
        switch (back) {
            case true:
             return(
                <nav className={styles.__shape}>
                    <Button type="back">Regresar</Button>
                    {children}
                </nav>
             )
            default:
                return (
                    <nav className={styles.__shape}>
                        {children}
                    </nav>
                )
        }
    }
}

export default Nav