import { useRef, useState } from 'react'

const NewsletterForm = () => {
  const inputEl = useRef(null)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const subscribe = async (e) => {
    e.preventDefault()

    const res = await fetch(`/api/convertkit`, {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      setError(true)
      setMessage('Your e-mail address is invalid or you are already subscribed!')
      return
    }

    inputEl.current.value = ''
    setError(false)
    setSubscribed(true)
    setMessage('Successfully! 🎉 You are now subscribed.')
  }

  return (
    <div>
      <form className="mt-3 sm:flex" onSubmit={subscribe}>
        <div>
          <label className="sr-only" htmlFor="email-input">
            Email
          </label>
          <input
            autoComplete="email"
            className="block w-full md:w-96 py-3 text-base rounded-md placeholder-gray-500 shadow-sm focus:ring-rose-800 focus:border-rose-800 sm:flex-1 border-gray-300"
            id="email-input"
            name="email"
            placeholder={subscribed ? "Sei iscritto !  🎉" : 'Inserisci il tuo indirizzo e-mail'}
            ref={inputEl}
            required
            type="email"
            disabled={subscribed}
          />
        </div>
        <button
          className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-800 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
          type="submit"
          disabled={subscribed}
        >
          {subscribed ? 'Grazie!' : 'Avvisami'}
        </button>
      </form>
      {error && (
        <div className="w-72 pt-2 text-sm text-red-500 dark:text-red-400 sm:w-96">{message}</div>
      )}
    </div>
  )
}

export default NewsletterForm
