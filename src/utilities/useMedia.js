// Code from https://usehooks.com/useMedia

import { useEffect, useState } from "react"

export default function useMedia(queries, defaultValue) {
  const [value, setValue] = useState(defaultValue)

  const getValue = () => {
    const query = queries[0]
    return query ? queries[0] : defaultValue
  }

  useEffect(() => {
    setValue(getValue)
    return () => setValue()
  }, [])

  return value
}
