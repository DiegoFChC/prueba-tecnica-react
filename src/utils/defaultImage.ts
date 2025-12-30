export async function defaultImage() {
  const defaultImageUrl =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
  const responseImage = await fetch(defaultImageUrl)
  return await responseImage.blob()
}
