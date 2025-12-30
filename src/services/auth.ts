const API_URL = import.meta.env.VITE_API_URL_LOGIN

type LoginProps = {
  email: string
  password: string
}

export async function loginAPI({ email, password }: LoginProps) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ UserName: email, password }),
  })
  
  if (!response.ok) {
    const dataError = await response.json()
    throw new Error(dataError[0].Message)
  }
  
  return await response.text()
}
