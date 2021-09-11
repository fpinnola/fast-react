import './index.css'
import SQUID from './squid.png'
import GEAR from './gear.svg'

export const App = () => {
    return ( 
    <>
        <h1>React Typescript Application</h1>
        <img src={SQUID} alt="SQUID" width="300" height="200" />
        <img src={GEAR} alt="GEAR" width="300" />
    </>
    )
}