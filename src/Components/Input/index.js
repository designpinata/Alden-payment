import React, {Component} from 'react'
import styles from './input.module.scss'


class Input extends Component {
    render() {
        const {type, children, id, placeholder, value, helper, label, align, disabled} = this.props
        return (
            <section className={styles.__bound}>
                <label 
                    className={label ? styles.__label : styles.__label_no} htmlFor={id}>{children}</label>
                <input
                    className={styles.__input}
                    style={align ? {textAlign: 'left'} : {textAlign: 'center'} }
                    type={type} 
                    id={id} 
                    placeholder={placeholder} 
                    value={value}
                    disabled={disabled}/>
                <small>{helper}</small>
            </section>
        )
    }
}

export default Input