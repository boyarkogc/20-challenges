import { useState } from "react"
import quoteloading from "../assets/quoteloading.png"

export default function QuoteGenerator() {
  const [quote, setQuote] = useState<null | {author: string, id: number, quote: string}>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchQuote = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("https://qapi.vercel.app/api/random")

      if (!response.ok) {
        throw new Error(`Error fetching quote. Status: ${response.status}`)
      }

      const result = await response.json()
      setQuote(result)
    } catch(err) {
      if (err instanceof Error) {
        setError(err.message)
        console.log(error)
      }
      setQuote(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col max-w-3xl mx-auto">
      {error ? <strong className="text-center text-accent text-2xl">Error: {error}</strong> : null}
      <div className="text-2xl bg-light-primary text-dark-primary dark:bg-dark-primary dark:text-light-primary
      py-6 px-8 mb-6 shadow-inner w-full flex justify-center">
        {loading ? 
        <img src={quoteloading} /> : 
        quote ? <div>
          <p>{quote.quote}</p>
          <br></br>
          <p>- {quote.author}</p>
        </div> : null
        }
      </div>
      <button className="min-w-[120px] bg-main-primary hover:bg-main-secondary text-dark-primary 
      cursor-pointer font-bold py-2 px-4 rounded max-w-1/5 mx-auto" onClick={fetchQuote}>Get new quote</button>
    </div>
  )
}