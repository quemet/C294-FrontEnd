import { def } from '@vue/shared'
import axios from 'axios'

let token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcxNDk4OTI3NywiZXhwIjoxNzQ2NTQ2ODc3fQ.CKwNBrByjqBvnk34TXUWUS8flpm5H4uhbIscXYPIcyU'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api/notes',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  }
})

async function getNotes() {
  return apiClient.get().then((response) => response.data.data)
}

async function getNoteById(id) {
  return apiClient.get('/' + id).then((response) => response.data.data)
}

async function postNote(data) {
  return apiClient.post('', JSON.stringify(data)).then((response) => response.data.data)
}

async function putNote(id, data) {
  return apiClient.put('/' + id, JSON.stringify(data)).then((response) => response.data.data)
}

async function deleteNote(id) {
  return apiClient.delete('/' + id).then((response) => response.data.data)
}

export { getNotes, getNoteById, postNote, putNote, deleteNote }
