import './App.css'
import { Fratt } from './fratt'
import { CrearFratt } from './crear-fratt'
// import Fratt from './fratt'

export function App (){
    return(
    <>
    <CrearFratt avatarImg="https://unavatar.io/sindresorhus@gmail.com/"/>
    <Fratt 
        avatarImg="https://unavatar.io/sindresorhus@gmail.com"
        msg="These people want to be able to read and censor your private text messages. This seminar is part of a well-funded influence operation to brainwash the public into accepting totalitarianism. I’ll be attending their propaganda session and hope other defenders of freedom will too"
        userName="Fulano Perez"
        idUser="@fulanoPerez01"
        inicialLike={false}/>
    
    <Fratt
        avatarImg="https://unavatar.io/kikobeats"
        msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam ad adipisci et reiciendis mollitia perspiciatis veniam incidunt voluptatum vitae distinctio, necessitatibus voluptas asperiores praesentium, @loquendo dolore labore sunt nostrum architecto. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nam ad adipisci et reiciendis mollitia $15897461 perspiciatis veniam incidunt voluptatum vitae distinctio, necessitatibus voluptas asperiores praesentium, dolore labore sunt nostrum architecto."
        userName="Fulano Perez"
        idUser="@fulanoPerez01"
        inicialLike={true}/>
    </>
    );
    }

    
