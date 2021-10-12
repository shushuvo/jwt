import './style.css'
import Manue from './manue.js'

function Header(){


    return(
        <>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet"/>
        </head>
        <section class="header">
        <div class="icon"><Manue/></div>
        <nav id="manue">
        <ul> 
            <li>Home</li>
            <li>Items</li>
            <li>Office</li>
            <li>Deals</li>
            <li>Offers</li>
            <li>Locations</li>
        </ul>
        </nav>
        <div className="src">
        <input placeholder="sceacrch..."/>
        <i class="fa fa-search"></i>
        </div>
    </section>
        </>
    )
}

export default Header;