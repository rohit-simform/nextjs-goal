import { options } from '../api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

export default async function ServerPage() {
  const session = await getServerSession(options)

  console.log(session)

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/blogs')
  }

  return (
    <section className="flex flex-col gap-6">
      <p>Blog</p>
    </section>
  )
}
