import React, {Component} from 'react'
import './../../styles/layout/layout.scss'

export class Layout extends Component {
    render() {
        const {children, columns, type, align} = this.props
        switch(type) {
            case "viewport":
                return <section className='__viewport'>{children}</section>
            case "container":
                return <section className='__container'>{children}</section>
            case "row":
                switch(align) {
                    case "right":
                        return <section className='__row right_lg'>{children}</section>
                    case "center":
                        return <section className='__row center_lg'>{children}</section>
                    default:
                        return <section className='__row start_lg'>{children}</section>
                }
            case "column":
                return <section className={`__lg_${columns}`}>{children}</section>
            default: 
                return null
        }
    }
}

export default Layout