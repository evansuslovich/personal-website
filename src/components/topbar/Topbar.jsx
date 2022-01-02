import "./topbar.scss"


import BoyIcon from '@mui/icons-material/Boy';
import EmailIcon from '@mui/icons-material/Email';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper"> 
                <div className="left"> 
                    <a href="#intro" className = "logo" >Coder. </a>
                    <div className="itemContainer">
                        <BoyIcon className = "icon" />
                        <span>(401)-428-4140</span>
                    </div>
                    <div className="itemContainer">
                        <EmailIcon className="icon"/>
                        <span>suslovich.e@northeastern.edu</span>
                    </div>
                </div>
                <div className="right"> 
                    <div className="hamburger" onClick = {()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>

            </div>
        </div>
    )
}

