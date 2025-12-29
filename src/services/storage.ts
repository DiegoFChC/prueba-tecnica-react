export function getToken(): string | null {
  return localStorage.getItem('user_token') ?? null
}

export function saveToken(token: string) {
  localStorage.setItem('user_token', token)
}

export function deleteToken() {
  localStorage.removeItem('user_token')
}