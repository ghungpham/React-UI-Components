import React from 'react';
import './Header.css';
import App from '../../App';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';


const HeaderContainer = () => {
 return (
     <div className = "HeaderContainer">
     <div className = "Logo">
     <ImageThumbnail />
     </div>
     <div className = "TitleContent">
     <HeaderTitle />
     <HeaderContent />
     </div>
     </div>
 );
};

export default HeaderContainer;