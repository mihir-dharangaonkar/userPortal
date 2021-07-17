import { useState, useEffect } from "react"
import Axios from "axios"

const useRest = (request, skip) => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request
        setData(response.data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    if (skip) {
      setData({})
      setError(false)
      setLoading(false)
    } else {
      fetchData()
    }
  }, [request, skip])

  return { data, error, loading }
}

export const useGet = (url, skip = false) => useRest(Axios.get(url), skip)

const usePost = (url, payload, skip = false) =>
  useRest(Axios.post(url, payload, skip))

export default { useGet, usePost, useRest }
