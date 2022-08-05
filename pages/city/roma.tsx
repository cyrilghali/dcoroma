import React from 'react'
import { Card } from '../../components/Card';
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { HomeTitle } from '../../components/Title';


export default function Roma() {  
    return (
        <div>
            <Header />
            <div className="pb-20">
                <HomeTitle title="Chiese di Roma" />
                <div className="flex flex-row flex-wrap justify-evenly">
                    <Card title="San Giorgio Megalomartire" imageUrl="/photos/SanGiorgioTH.jpg" href="/city/roma/sangiorgio"/>
                    <Card title="San Mina Megalomartire" imageUrl="/photos/sanMina.jpg" href="/city/roma/sanmina"/>
                    <Card title="Vergine Maria" imageUrl="/photos/torino.avif" href="/city/roma/verginemaria"/>
                    <Card title="San Marco Apostolo" imageUrl="/photos/sanmarco.jpg" href="/city/roma/sanmarco"/>
                </div>
            </div>
            <Footer />
        </div>
    )
}