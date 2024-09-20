'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { createPost } from './actions'

export default function NewPostForm() {
  const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
      const router = useRouter()

        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault()
                const formData = new FormData()
                    formData.append('title', title)
                        formData.append('content', content)
                            
                                const result = await createPost(formData)
                                    
                                        if (result.success) {
                                              setTitle('')
                                                    setContent('')
                                                          router.refresh()
                                                              } else {
                                                                    alert(result.error)
                                                                        }
                                                                          }

                                                                            return (
                                                                                <form onSubmit={handleSubmit} className="space-y-4">
                                                                                      <h2 className="text-2xl font-bold">Create New Post</h2>
                                                                                            <Input
                                                                                                    placeholder="Post Title"
                                                                                                            value={title}
                                                                                                                    onChange={(e) => setTitle(e.target.value)}
                                                                                                                            required
                                                                                                                                  />
                                                                                                                                        <Textarea
                                                                                                                                                placeholder="Post Content"
                                                                                                                                                        value={content}
                                                                                                                                                                onChange={(e) => setContent(e.target.value)}
                                                                                                                                                                        required
                                                                                                                                                                              />
                                                                                                                                                                                    <Button type="submit">Create Post</Button>
                                                                                                                                                                                        </form>
                                                                                                                                                                                          )
                                                                                                                                                                                          }