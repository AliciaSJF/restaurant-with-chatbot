"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { FaRobot, FaTimes } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

type Message = {
  text: string
  isBot: boolean
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { text: "¡Hola! Soy el asistente virtual de Hotaru Madrid. ¿En qué puedo ayudarte?", isBot: true },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const chatRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const dragStart = useRef({ x: 0, y: 0 })

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, isBot: false }])
      setInputMessage("")
      // Simular respuesta del bot
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "Gracias por tu mensaje. Nuestro equipo lo revisará y te responderá pronto.", isBot: true },
        ])
      }, 1000)
    }
  }

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [chatRef]) //Corrected dependency

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDragging.current = true
    dragStart.current = { x: e.clientX - position.x, y: e.clientY - position.y }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      const newX = e.clientX - dragStart.current.x
      const newY = e.clientY - dragStart.current.y
      setPosition({ x: newX, y: newY })
    }
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp)
    return () => {
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [])

  return (
    <div
      className={`fixed z-50 ${isOpen ? "w-80" : "w-16"}`}
      style={{
        bottom: `${position.y}px`,
        right: `${position.x}px`,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
    >
      {isOpen ? (
        <div className="bg-zinc-900 border border-zinc-700 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-zinc-800 p-2 flex justify-between items-center cursor-move">
            <span className="text-white font-semibold">Chatbot</span>
            <Button variant="ghost" size="icon" onClick={toggleChat} className="text-white">
              <FaTimes />
            </Button>
          </div>
          <ScrollArea className="h-80 p-4" ref={chatRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.isBot ? "text-left" : "text-right"}`}>
                <span
                  className={`inline-block p-2 rounded-lg ${msg.isBot ? "bg-blue-600 text-white" : "bg-gray-200 text-black"}`}
                >
                  {msg.text}
                </span>
              </div>
            ))}
          </ScrollArea>
          <form onSubmit={handleSendMessage} className="p-2 border-t border-zinc-700">
            <div className="flex">
              <Input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Escribe un mensaje..."
                className="flex-grow mr-2 bg-zinc-800 text-white"
              />
              <Button type="submit">Enviar</Button>
            </div>
          </form>
        </div>
      ) : (
        <Button
          onClick={toggleChat}
          className="w-16 h-16 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center"
        >
          <FaRobot size={24} />
        </Button>
      )}
    </div>
  )
}

