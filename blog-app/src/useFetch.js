import { useState, useEffect } from "react"

// in order to make a custom hook, we need to create a function with a use keyword in it
const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch data on DB')
                    }
                    return res.json()
                })
                .then((data) => {
                    setData(data)
                    setIsPending(false)
                    setError(null)
                })
                .catch(err => {
                    setError(err.message)
                    setIsPending(false)
                })
        }, 1000)
    }, [url])
    return { data, isPending, error }
}

export default useFetch