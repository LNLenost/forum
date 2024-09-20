'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function NewPostForm({ threadId }: { threadId: string }) {
  const [content, setContent] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
            // Here you would typically send the data to your backend
                console.log('New post:', { threadId, content })
                    // Clear the form after submission
                        setContent('')
                          }

                            return (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                      <h3 className="text-xl font-bold">Reply to this thread</h3>
                                            <Textarea
                                                    placeholder="Your reply"
                                                            value={content}
                                                                    onChange={(e) => setContent(e.target.value)}
                                                                            required
                                                                                  />
                                                                                        <Button type="submit">Post Reply</Button>
                                                                                            </form>
                                                                                              )
                                                                                              }