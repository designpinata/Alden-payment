import React, {Component} from 'react'
import styles from './button.module.scss'

import IconBack from './../../Assets/Icons/back'

class Button extends Component {
    render() {
        const {children, click, type, disabled} = this.props
        switch(type) {
            case "back": 
            return (
                <section className={[styles.__bound, styles.__bound_sm].join(' ')}>
                    <button 
                        className={[styles.__form, styles.__form_sm].join(' ')} 
                        value={children} 
                        onClick={click}
                        disabled={disabled}>
                        <IconBack></IconBack>
                        {children}
                    </button>
                </section>
            )
            default:
                return (
                    <section className={styles.__bound}>
                        <button 
                            className={styles.__form} 
                            value={children} 
                            onClick={click}
                            disabled={disabled}>{children}</button>                            
                    </section>
                )
        }
    }
}

export default Button