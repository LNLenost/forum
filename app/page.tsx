import fs from 'fs/promises'
import path from 'path'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import NewPostForm from './new-post-form'

async function getPosts() {
  const postsDirectory = path.join(process.cwd(), 'posts')
    const fileNames = await fs.readdir(postsDirectory)
      
        const posts = await Promise.all(fileNames.map(async (fileName) => {
            const filePath = path.join(postsDirectory, fileName)
                const content = await fs.readFile(filePath, 'utf8')
                    const [title, ...bodyLines] = content.split('\n')
                        return {
                              id: fileName.replace(/\.txt$/, ''),
                                    title: title,
                                          content: bodyLines.join('\n'),
                                                date: new Date(parseInt(fileName.split('-')[0])).toLocaleString()
                                                    }
                                                      }))

                                                        return posts.sort((a, b) => parseInt(b.id.split('-')[0]) - parseInt(a.id.split('-')[0]))
                                                        }

                                                        export default async function Home() {
                                                          const posts = await getPosts()

                                                            return (
                                                                <div className="space-y-4">
                                                                      <h1 className="text-2xl font-bold">Forum Posts</h1>
                                                                            {posts.map((post) => (
                                                                                    <Card key={post.id}>
                                                                                              <CardHeader>
                                                                                                          <CardTitle>{post.title}</CardTitle>
                                                                                                                      <p className="text-sm text-muted-foreground">{post.date}</p>
                                                                                                                                </CardHeader>
                                                                                                                                          <CardContent>
                                                                                                                                                      <p>{post.content}</p>
                                                                                                                                                                </CardContent>
                                                                                                                                                                        </Card>
                                                                                                                                                                              ))}
                                                                                                                                                                                    <NewPostForm />
                                                                                                                                                                                        </div>
                                                                                                                                                                                          )
                                                                                                                                                                                          }