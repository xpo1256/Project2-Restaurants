const React = require('react');

function contact(){
    return(
        <>
            <header>
                <link rel='stylesheet' href='/style/Contact.css'></link>
            </header>
            <a className='backArrow' href='/dishly/main'>←</a>
            <h1 className='Head'>R</h1>
            <div className='container-1'>
                <p className='Head'>We'do Love to</p>
                <p className='Head'>Hear From you</p>
                <p className='ml'>Let's make something delicious togther.</p>
                <p className='ml'>Drop us a line</p>
            </div>
            <div className='container-2'>
                <form action="/dishly/contact" method="POST">
                    <input className='name' name='nickname' placeholder='Name'></input>
                    <input className='email' name='email' placeholder='Email'></input>
                    <input className='phone' name='phone' placeholder='Phone Number (optional)'></input>
                    <input className='message' name='message'placeholder = {'What\'s on your mind?'}></input>
                    <button type='submit'>Send →</button>
                </form>
            </div>
        </>
    )
}

module.exports = contact;