/* eslint-disable react/prop-types */
import './fratt.css'
import './crear-fratt.css'
import Icon from '@mdi/react'
import { mdiBird,mdiPictureInPictureBottomRightOutline } from '@mdi/js'

export function CrearFratt ({avatarImg, msg, multimedia}) {

  return (
  <>
    <div className='fratt-frame'>
                <div className='fratt-frame-user'>
                    <img className='fratt-img' alt="avatar usuario 1" src={avatarImg}/>
                </div>
                
                <div className='fratt-frame-msg'>
                    <p>¿Qué estás pensando?</p>
                </div>

                <div className='frame-botton+adds'>
                    <div className='fratt-frame-adds'>
                      <Icon className='fratt-icon' path={mdiPictureInPictureBottomRightOutline} size={1.2}/> 
                    </div>
                    <div className="frame-botton-send">
                        <button className='botton-send'>
                        <Icon className='fratt-icon' path={mdiBird} size={1.2}/> 
                        </button>
                    </div>
                </div>

            </div> 
  </>
 )
}