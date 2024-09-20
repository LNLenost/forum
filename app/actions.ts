'use server'

import fs from 'fs/promises'
import path from 'path'

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string
    const content = formData.get('content') as string

      if (!title || !content) {
          return { error: 'Title and content are required' }
            }

              const timestamp = Date.now()
                const fileName = `${timestamp}-${title.toLowerCase().replace(/\s+/g, '-')}.txt`
                  const filePath = path.join(process.cwd(), 'posts', fileName)

                    const fileContent = `${title}\n${content}`

                      try {
                          await fs.writeFile(filePath, fileContent, 'utf8')
                              return { success: true }
                                } catch (error) {
                                    console.error('Error writing file:', error)
                                        return { error: 'Failed to create post' }
                                          }
                                          }