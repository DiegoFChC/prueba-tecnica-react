export function parseDate(ISODate: Date) {
  const date = new Date(ISODate)

  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }
  const parsedDate = date.toLocaleDateString('es-ES', options)

  return parsedDate
}
