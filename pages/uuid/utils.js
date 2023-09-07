import { v4 as uuidv4 } from 'uuid'
import { nanoid } from 'nanoid'

export function getUUID() {
  return uuidv4()
}

export function getNanoId() {
  return nanoid()
}

export function getRandomString() {
  return Math.random().toString(36).slice(2)
}
