import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MGIxMjllMmRiYTQ1ZWY5YTU1OTM3ZDc2MDI5Y2ZkOCIsIm5iZiI6MTc0MTg4MjQwOS4yNCwic3ViIjoiNjdkMzA0MjkyNTc1ZjAxYjNhNjBhMGNjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.-XL7XAO2UczVIqfI0Jf8mNLPLhr3UTdotI31GmCtzM0'
  }
})

export default instance