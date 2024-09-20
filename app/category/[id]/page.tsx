import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const threads = [
  { id: 1, title: 'Welcome to the forum!', author: 'Admin', replies: 5, lastPost: '2023-06-01' },
    { id: 2, title: 'How to use the forum', author: 'Moderator', replies: 3, lastPost: '2023-06-02' },
    ]

    export default function Category({ params }: { params: { id: string } }) {
      return (
          <div className="space-y-4">
                <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold">Category {params.id}</h2>
                                <Link href={`/category/${params.id}/new-thread`}>
                                          <Button>New Thread</Button>
                                                  </Link>
                                                        </div>
                                                              {threads.map((thread) => (
                                                                      <Link key={thread.id} href={`/thread/${thread.id}`}>
                                                                                <Card>
                                                                                            <CardHeader>
                                                                                                          <CardTitle>{thread.title}</CardTitle>
                                                                                                                        <CardDescription>
                                                                                                                                        By {thread.author} | Replies: {thread.replies} | Last post: {thread.lastPost}
                                                                                                                                                      </CardDescription>
                                                                                                                                                                  </CardHeader>
                                                                                                                                                                            </Card>
                                                                                                                                                                                    </Link>
                                                                                                                                                                                          ))}
                                                                                                                                                                                              </div>
                                                                                                                                                                                                )
                                                                                                                                                                                                }