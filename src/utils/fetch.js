export async function post(request = {}) {
  let { body = {}, options = {}, url } = request

  try {
    const response = await fetch(url, {
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      ...options,
    })

    if (response.ok) {
      return response.json()
    } else {
      throw 'ERROR_NOT_2XX'
    }
  } catch(error) {
    throw error
  }
}