const React = require('react');

function about(){
    return(
        <>
            <link rel='stylesheet' href='/style/about.css'></link>
            <a className='back' href='/dishly/main'>←</a>
            <div className='head'>Dishly</div>
            <div className='line'>CRAFTED DINING EXPERIENCE</div>
           <div className='cardsContent'>
                <p className='headCard'>Who We Are</p>
                <p className='firstline'>CRAFTED DINING EXPERIENCES</p>
                <p className='secline'>At Dishly, we don't just serve food we craft experiences. Our story began with a simple idea: to elevate dining with hearfelt flavor and impeccable design.</p>
                <p className='thirdline'>From sea-inspired dishes to warm hospitality,every details is thoughtfully composed</p>
                <p className='lastline'>Whether you're here for a cozoy meal or a grand occasion,Dishly welcomes you with flavor,elegance,and soul.</p>
           </div>
        </>
    )
}

module.exports = about;