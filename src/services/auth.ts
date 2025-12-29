const API_URL: string =
  'https://dev.apinetbo.bekindnetwork.com/api/Authentication/Login'

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
