require('dotenv').config()

const express = require('express')
const axios = require('axios')
const { DEFAULT_SERVER_PORT, RESOURCES_ENDPOINT } = require('../src/Utils/constants')

const axiosInstance = axios.create({
  baseURL: RESOURCES_ENDPOINT,
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer  ${process.env.ACCESS_TOKEN}`
  },
  timeout: 5000,
})

const get = async (originalUrl) => {
  try {
    const { data } = await axiosInstance.get(originalUrl)
    return data
  } catch (e) {
    throw new Error(e)
  }
}

const app = express()

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json')
  next()
})

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
