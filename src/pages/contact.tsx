import type { NextPage } from 'next'
import fathers from 'data/contact'
import Header from '~/components/Header'
import { HomeTitle } from '~/components/Title'
import ContactCard from '~/components/ContactCard'
import Footer from '~/components/Footer'

const Contact: NextPage = () => {
  return (
    <div>
      <Header />
      <HomeTitle title={'Contatti'} />
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {fathers.map((person) => (
          <li
            key={person.id}
            className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
          >
            <ContactCard person={person} />
          </li>
        ))}
      </ul>

      <Footer />
    </div>
  )
}

export default Contact
