import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import NewPostForm from './new-post-form'

const posts = [
  { id: 1, author: 'User1', content: 'This is the first post in this thread.', date: '2023-06-01' },
    { id: 2, author: 'User2', content: 'Great topic! I have some thoughts to share...', date: '2023-06-02' },
    ]

    export default function Thread({ params }: { params: { id: string } }) {
      return (
          <div className="space-y-4">
                <h2 className="text-2xl font-bold">Thread {params.id}</h2>
                      {posts.map((post) => (
                              <Card key={post.id}>
                                        <CardHeader>
                                                    <CardTitle>{post.author}</CardTitle>
                                                                <p className="text-sm text-muted-foreground">{post.date}</p>
                                                                          </CardHeader>
                                                                                    <CardContent>
                                                                                                <p>{post.content}</p>
                                                                                                          </CardContent>
                                                                                                                  </Card>
                                                                                                                        ))}
                                                                                                                              <NewPostForm threadId={params.id} />
                                                                                                                                  </div>
                                                                                                                                    )
                                                                                                                                    }