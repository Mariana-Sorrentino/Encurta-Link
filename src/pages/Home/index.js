import { useState } from 'react'
import { FiLink } from 'react-icons/fi';
import './home.css';

import Menu from '../../component/Menu'
import LinkItem from '../../component/LinkItem';

import api from '../../services/api';
import{ saveLink} from '../../services/storeLinks'

export default function Home (){
    const [link, setLink] = useState('');
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);


async function handleShortLink(){    
    try{
        const response = await api.post('/shorten', {
            long_url: link
        })

        setData(response.data);
        setShowModal(true);

        saveLink('@encurtaLink', response.data)

        setLink('');

    }catch{
        alert("Ops! Parece que algo deu errado!")
        setLink('');
    }
}

    return(
<div className="containerHome">
    
    <div className="logo">
        <img src="/logo.png" alt="Sujeito Link Logo"/>  
        <h1>EncurtaLink</h1>
        <span>Cole Seu Link Para Encurtar 👇</span>
    </div>


    <div className="areaInput">
        <div>
            <FiLink size={24} color="#fff" />
            <input 
            placeholder='Cole seu link aqui...'
            value={link}
            onChange={ (e) => setLink(e.target.value)}
            />
        </div>

        <button onClick={handleShortLink}>Encurtar Link</button>  
    </div>

    <Menu/>

    { showModal && (
        <LinkItem
            closeModal={ () => setShowModal(false) }
            content={data}
        />
    ) }

</div>
    )
  } 