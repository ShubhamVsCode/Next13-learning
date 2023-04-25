import Image from 'next/image'
import { auth } from '@clerk/nextjs/app-beta';
import GetUser from '@/components/GetUser';

export default function Home() {
  const { userId } = auth();

  return (
    <main className="text-center space-y-10 mt-5">
      <h1>Nextjs</h1>
      <GetUser />
    </main>
  )
}
