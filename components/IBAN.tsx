import CopyButton from '@/components/Buttons/CopyButton'

const InfoBlock = ({ label, text }) => (
  <div className='flex flex-col items-center py-4 mx-5 justify-center text-lg'>
    <span className='underline mr-2'>{label}</span>
    <div className='flex flex-row justify-center items-center'>
      {text} <CopyButton text={text} />
    </div>
  </div>
)

const IBAN = () => {
  return (
    <>
      <h1 className='flex py-4 mx-5 justify-center font-black text-3xl'>
        Bonifico
      </h1>
      <InfoBlock label='IBAN :' text='IT 82 W 02008 05001 000401308210' />
      <InfoBlock label='BIC / SWIFT :' text='UNCRITM1B86' />
      <InfoBlock
        label='Indirizzo della banca :'
        text='Via del Corso, 307 Roma - 00186'
      />
      <InfoBlock
        label="Indirizzo dell'associazione"
        text='Via laurentina, 1571 Roma - 00143'
      />
      <InfoBlock
        label='Intestato a :'
        text='Diocesi Copto Ortodossa di San Giorgio'
      />
    </>
  )
}

export default IBAN
