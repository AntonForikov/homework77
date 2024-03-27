export interface Message {
  author: string,
  message: string,
  image: File | null
}

export interface MessageWithId extends Message {
  id: string
}