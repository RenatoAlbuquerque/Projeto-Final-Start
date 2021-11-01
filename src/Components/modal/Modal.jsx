import './style.css';


export default function Modal({id = 'modal',onClose = () =>{}, children }){

    const outSideClick = (e =>{
        if(e.target.id === id) onClose();
    })
    return(
            <div id="modal" className="modal-overlay" onClick={outSideClick}>
                <div className="modal">
                    <button className="btn-close" type="button" onClick={onClose}>X</button>

                    <div className="content">
                    </div>
                    
                </div>
                    {children }
            </div>
           
        );
}