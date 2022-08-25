import { useState, useEffect } from 'react';
import './links.css';
import { FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi'
import { Link } from 'react-router-dom'

import{ getLinksSaves, deleteLink } from '../../services/storeLinks'
import LinkItem from '../../component/LinkItem'

export default function Links (){
  const [myLinks, setMyLinks] = useState([]);

  const[data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [emptyList, setEmptyList] = useState(false);


  useEffect(() => {
    async function getLinks(){
      const result = await getLinksSaves('@encurtaLink')

      if(result.length === 0){
        // a lida está vazia...
        setEmptyList(true);
      }

      setMyLinks(result);
    }

    getLinks();

  }, [])


  function handleOpenLink(link){
    setData(link)
    setShowModal(true);
  }

  async function handleDelete(id){
    const result = await deleteLink(myLinks, id);

    if(result.length === 0){
      setShowModal(true);
    }

    setMyLinks(result)

  }

    return(
      <div className="linksContainer">

        <div className="linksHeader">
          <Link to="/">
          <FiArrowLeft size={38} color="#fff"/>
          </Link>          
          <h1>Meus Links</h1>
        </div>

        { emptyList && (
          <div className='linkItem'>
            <h2 className='emptyText'>SUA LISTA ESTÁ VAZIA...</h2>

          </div>
        )}

     {myLinks.map( link => (
          <div key={link.id} className="linksItem">
            <button className="link" onClick={() => handleOpenLink(link)}>
              <FiLink size={18} color="#fff" />
              {link.long_url}
            </button>
            <button className='linkDelet' onClick={ () => handleDelete(link.id) }>
              <FiTrash size={24} color="#FF5454" />
            </button> 
        </div> 
     ))} 

     { showModal && (
       <LinkItem
          closeModal={ () => setShowModal (false) }
          content={data}
          />
     )}    

      </div>
    )
  }