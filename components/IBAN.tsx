import CopyButton from '@/components/Buttons/CopyButton'

const IBAN = () => {
  return (
    <>
      <h1 className='flex py-4 mx-5 justify-center font-black text-3xl'>
        Bonifico
      </h1>
      <div className='flex flex-col items-center py-4 mx-5 justify-center text-lg'>
        <span className='underline mr-2'>{'IBAN :'}</span>{' '}
        <div className='flex flex-row justify-center items-center'>
          IT 82 W 02008 05001 000401308210
          <CopyButton text='IT 82 W 02008 05001 000401308210' />
        </div>
      </div>
      <div className='flex flex-col items-center py-4 mx-5 justify-center text-lg'>
        <span className='underline mr-2'>{'BIC / SWIFT :'}</span>{' '}
        <div className='flex flex-row justify-center items-center'>
          UNCRITM1B86 <CopyButton text='UNCRITM1B86' />
        </div>
      </div>

      <div className='flex flex-col items-center py-4 mx-5 justify-center text-lg'>
        <span className='underline mr-2'>{' Indirizzo della banca :'}</span>
        <div className='flex flex-row justify-center items-center'>
          Via del Corso, 307 Roma - 00186
          <CopyButton text='Via del Corso, 307 Roma - 00186' />
        </div>
      </div>
      <div className='flex flex-col items-center py-4 mx-5 justify-center text-lg'>
        <span className='underline mr-2'>Indirizzo dell&apos;associazione</span>
        <div className='flex flex-row justify-center items-center'>
          Via laurentina, 1571 Roma - 00143
          <CopyButton text='Via laurentina, 1571 Roma - 00143' />
        </div>
      </div>
      <div className='flex flex-col items-center py-4 mx-5 justify-center text-lg'>
        <span className='underline mr-2'>{' Intestato a :'}</span>
        <div className='flex flex-row justify-center items-center'>
          Diocesi Copto Ortodossa di San Giorgio
          <CopyButton text='Diocesi Copto Ortodossa di San Giorgio' />
        </div>
      </div>
    </>
  )
}

export default IBAN
