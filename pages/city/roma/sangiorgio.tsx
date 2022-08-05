import React, { useState } from 'react'
import { NextPage } from 'next';
import Footer from '../../../components/Footer';
import { RomaDetail } from '../roma';
import Header from '../../../components/Header';

export default function Sangiorgio () {
  console.log('Hai cliccato Invia. Sangiorgio');
  return (
    <div>
    <Header />
    <RomaDetail />
    <DetailSangiorgio />
    <Footer />
    </div>
  )

  function DetailSangiorgio(){
  console.log('Hai cliccato Invia. DetailSangiorgio');

    return (
      <div>
        chiesa san giorgio
      </div>
    );
    
  }
}
