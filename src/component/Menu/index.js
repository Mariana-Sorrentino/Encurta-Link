import './menu.css';
import { BsYoutube, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom'

export default function Menu(){
    return(
        <div className='menu'>
            <a className='social' href='https://youtube.com/c/sujeitoprogramador'>
                <BsYoutube color='#fff' size={24} />
            </a>

            <a className='social' href='https://intagram.com/sijeitoprogramador'>
                <BsInstagram color='#fff' size={24} />
            </a>

            <Link className='menuItem' to="/links">
                Meus Links
            </Link>

        </div>
    )
}