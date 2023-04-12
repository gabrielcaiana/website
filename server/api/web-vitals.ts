export default eventHandler(async (event) => {
  const body = await readBody(event)
  return body
})
