import { Route, Routes } from 'react-router-dom';
import About from '../pages/About.js';
import Contact from '../pages/Contact.js';
import Home from '../pages/Home.js';
import Profile from '../pages/Profile.js';
import WisataList from '../pages/Wisata.js';
import WisataCreate from '../pages/WisataCreate.js';
import WisataEdit from '../pages/WisataEdit.js';



function MyRouter(){
    return(
        <Routes>
            <Route path="/" element= {<Home/>} />
            <Route path="/about-us" element= {<About/>} />
            <Route path="/contact-us" element= {<Contact/>} />
            <Route path="/wisatas" element= {<WisataList/>} />
            <Route path="/wisatas/create" element= {<WisataCreate/>} />
            <Route path="/wisatas/:id/edit" element= {<WisataEdit/>} />
            <Route path="/profile" element= {<Profile/>} />
        </Routes>
    )
    
}

export default MyRouter;