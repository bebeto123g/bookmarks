fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({ name: 'Alex' }),
  headers: {
    'Content-type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))


const getResourse = async (url) => {
  const res = await fetch(url)

  if (!res.ok) throw new Error(`Оказия, статус ${res.status}`)

  return await res.json()
}
