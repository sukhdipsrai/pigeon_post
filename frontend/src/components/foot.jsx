import React from 'react';
import { Link } from 'react-router-dom';
import github from '../images/25231.png'

export default class Footer extends React.Component {
    render() {
        return (
            <div className="div-foot">
                <ul className='account-link'>
                    <li><a href="https://github.com/sukhdipsrai/pigeon_post"><img src= {github}/></a></li>
                </ul>
                <ul className='account-link'>Sukhdip Rai
                    <li><a href="https://github.com/sukhdipsrai">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/sukhdip-rai-14766016b/">LinkedIn</a></li>
                </ul>
                <ul className='account-link'>Juan Sanchez
                    <li><a href="https://github.com/juansanchez721">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/juan-sanchez-24a68b113/">LinkedIn</a></li>
                </ul>
                <ul className='account-link'>Zihao Li
                    <li><a href="https://github.com/pockyhao518">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/zihao-li-6281b913b/">LinkedIn</a></li>
                </ul>
            </div>
        )}}