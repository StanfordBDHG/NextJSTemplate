import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <Image
        src="/stanfordbiodesign.png"
        alt="Stanford Biodesign Logo"
        width={200}
        height={200}
      />
      <h1>Welcome to the Stanford Biodesign Digital Health TypeScript Template</h1>
    </div>
  )
}
