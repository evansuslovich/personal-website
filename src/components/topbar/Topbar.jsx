import "./topbar.scss"


import BoyIcon from '@mui/icons-material/Boy';
import EmailIcon from '@mui/icons-material/Email';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left"> 
                    <a href="#intro" className = "logo" >Genius. </a>
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
                this is right
                </div>

            </div>
        </div>
    )
}

