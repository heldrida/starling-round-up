/**
 * The dotenv allows me to import environment variables
 * check the README.md for instructions regarding need to set your own ACCESS_TOKEN
 * as this is not available in the repository as it's sensitive or private data
 * For example, in production we'd have AWS Secrets Manager or Hashicorp Vault
 */
require('dotenv').config()

const express = require('express')
const axios = require('axios')
const { DEFAULT_SERVER_PORT, RESOURCES_ENDPOINT } = require('../src/Utils/constants')
const app = express()

/**
 * Creates an reusable Axios instance that includes the required headers,
 * for example the `Authorization` paired ACCESS TOKEN
 */
const axiosInstance = axios.create({
  baseURL: RESOURCES_ENDPOINT,
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer  ${process.env.ACCESS_TOKEN}`
  },
  timeout: 5000,
})

/**
 * A reusable GET method that takes the original request path and query
 * making a request to the target resources endpoint(s)
 * @param `originalUrl` is value we pick from the clients original request
 */
const get = async (originalUrl) => {
  try {
    const { data } = await axiosInstance.get(originalUrl)
    return data
  } catch (e) {
    throw new Error(e)
  }
}

/**
 * Middleware that sets header for the responses (called everytime)
 */
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json')
  next()
})

/**
 * Listens to any request functioning as a reverse proxy service
 * hidding the target resource endpoint location and the ACCESS_TOKEN
 * that is passed in each request or call
 */
app.use('*', async (req, res) => {
  const { originalUrl } = req
  try {
    const data = await get(`${originalUrl}`)
    res.send(data)
  } catch (e) {
    res.status(500).send(e)    
  }
})

app.listen(DEFAULT_SERVER_PORT)

console.log(`[Server] Running a GraphQL API server at http://localhost:${DEFAULT_SERVER_PORT}`)
console.log(`[Server] This process is pid ${process.pid}`);
