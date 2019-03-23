import React from 'react'
import {observer,inject} from 'mobx-react';
import { Link } from 'react-router-dom'
import style from './style.scss'

@inject("counterStore") 
@observer
export default class Counter extends React.Component {
    render() {
        let {num} = this.props.counterStore;
        return <div className={style['page']}>
            <h1 className={style['title']}>计数器</h1>
            <h1 className={style['num']}>{num}</h1>
            <div className={style['box']}>
                <button className={style['btn']} onClick={()=>{this.props.counterStore.add()}}>加1</button>
                <button className={style['btn']} onClick={()=>{this.props.counterStore.minus()}}>减1</button>
            </div>
            <Link to='/TodoList'>
                <div className={style['jump']}>todoList</div>
            </Link>
        </div>
        
    }
}