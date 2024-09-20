import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const categories = [
  { id: 1, name: 'General Discussion', description: 'Talk about anything and everything' },
    { id: 2, name: 'Technology', description: 'Discuss the latest in tech' },
      { id: 3, name: 'Gaming', description: 'Share your gaming experiences' },
      ]

      export default function Home() {
        return (
            <div className="space-y-4">
                  <h2 className="text-2xl font-bold">Categories</h2>
                        {categories.map((category) => (
                                <Link key={category.id} href={`/category/${category.id}`}>
                                          <Card>
                                                      <CardHeader>
                                                                    <CardTitle>{category.name}</CardTitle>
                                                                                  <CardDescription>{category.description}</CardDescription>
                                                                                              </CardHeader>
                                                                                                        </Card>
                                                                                                                </Link>
                                                                                                                      ))}
                                                                                                                          </div>
                                                                                                                            )
                                                                                                                            }