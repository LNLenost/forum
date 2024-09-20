'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function NewThread({ params }: { params: { id: string } }) {
  const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
      const router = useRouter()

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault()
                // Here you would typically send the data to your backend
                    console.log('New thread:', { categoryId: params.id, title, content })
                        // Redirect to the category page after submission
                            router.push(`/category/${params.id}`)
                              }

                                return (
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                          <h2 className="text-2xl font-bold">New Thread</h2>
                                                <Input
                                                        placeholder="Thread Title"
                                                                value={title}
                                                                        onChange={(e) => setTitle(e.target.value)}
                                                                                required
                                                                                      />
                                                                                            <Textarea
                                                                                                    placeholder="Thread Content"
                                                                                                            value={content}
                                                                                                                    onChange={(e) => setContent(e.target.value)}
                                                                                                                            required
                                                                                                                                  />
                                                                                                                                        <Button type="submit">Create Thread</Button>
                                                                                                                                            </form>
                                                                                                                                              )
                                                                                                                                              }