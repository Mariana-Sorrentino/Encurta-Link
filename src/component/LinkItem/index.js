
import './linkItem.css';
import { FiX, FiClipboard} from 'react-icons/fi'

export default function LinkItem({ closeModal, content }){

    async function copyLink (){
        await navigator.clipboard.writeText(content.link)
        alert("URL Copiada com sucesso!")
    }

    
    return(
        <div className="modalContainer" id='cor'>           

            <div className="modalHeader">
                <h2>Link Encurtado</h2>
                <button onClick={closeModal}>
                    <FiX size={28} color="#000" />
                </button>
            </div> 

                <span>
                    {content.long_url}
                </span>

                <button className="modalLink" onClick={copyLink}>
                   {content.link}
                    <FiClipboard size={20} color="#fff" /> 
                </button>
               
    
        </div>
    )
}