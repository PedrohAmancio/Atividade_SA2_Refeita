import React from 'react'
const Footer = () => {
    return (
        <footer style={{
            width: '100vw',
            height: '500px', // Altura reduzida
            overflow: 'hidden',
            margin: 0,
            padding: 0,
            position: 'relative',
            left: 0,
            bottom: 0,
            background: '#e3e8fd'
        }}>
            <img 
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1nXLHWsBo2L5O0M1oVjld693GmqWBY50RNcEQFl1dYCpfkc6hGZKj7eMIv1yYoQ5bVciX_wQCjokE2WiljtULfHDZKoWGDfVIkf9e4mMHRHxnZJx2paTDZ12nOktllCXI7tuJz3DdfkDn/s1600/senai.jpg" 
            alt="Footer da página"  style={{
                    width: "100vw",
                    height: "560px", // Mesma altura do footer
                    objectFit: "cover",
                    display: "block"
                }}  />
        </footer>
    )
}

export default Footer