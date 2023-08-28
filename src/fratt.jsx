/* eslint-disable react/prop-types */
import './fratt.css'
import Icon from '@mdi/react'
import { mdiMessageOutline, mdiHeartBoxOutline, mdiShareVariant, mdiBookPlus, mdiPackageUp, mdiBird, mdiHeartBox } from '@mdi/js'
import { useState } from 'react'

export function Fratt ({avatarImg, userName, idUser, msg, inicialLike}){
    const [isLike, setIsLike] = useState (inicialLike)

    const iconLike = isLike
    ? {icon:mdiHeartBox, style:'fratt-with-like' }
    : {icon:mdiHeartBoxOutline, style:'fratt-without-like' }

    const handleClick = () =>{
        setIsLike(!isLike)
    }

    return (    
        <>
            <div className='fratt-frame'>
                <div className='fratt-frame-user'>
                    <img className='fratt-img' alt="avatar usuario 1" src={avatarImg}/>
                    <div className='fratt-user-name'>{userName}</div>
                    <div className='fratt-id-user'>{idUser}</div>
                    <a href='#modal_carrito'>  
                        <Icon className='fratt-icon' path={mdiBird} size={1.2}/> 
                    </a>
                </div>
                
                <div className='fratt-frame-msg'>
                    <p>{msg}</p>
                </div>
                <div className='fratt-frame-actions'>
                    <a href='#modal_carrito'>  
                        <Icon className='fratt-icon' path={mdiMessageOutline } size={1.2}/> 
                    </a>
                    <Icon onClick={handleClick} className={iconLike.style} path={iconLike.icon} size={1.2}/> 
                    <a href='#modal_carrito'>  
                        <Icon className='fratt-icon' path={mdiShareVariant } size={1.2}/> 
                    </a>
                    <a href='#modal_carrito'>  
                        <Icon className='fratt-icon' path={mdiBookPlus } size={1.2}/> 
                    </a>
                    <a href='#modal_carrito'>  
                        <Icon className='fratt-icon' path={mdiPackageUp } size={1.2}/> 
                    </a>
                </div>
            </div> 
        </>
    )
}
