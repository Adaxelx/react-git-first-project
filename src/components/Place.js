import React from 'react';

class Place extends React.Component {
    state = {  }
    render() { 
        return ( 
            <section className="place">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2755.3035818382623!2d23.145927369669682!3d52.02703867803654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xceda46e5f60ef5a8!2sPracownia+Fryzjerska+Beata+Patejuk!5e0!3m2!1spl!2spl!4v1553897983975!5m2!1spl!2spl"  style={{
                    border: 0,
                    width: 600,
                    height: 450,
                    frameborder: 0,
                }}
                allowfullscreen></iframe>
            </section>
         );
    }
}
 
export default Place;