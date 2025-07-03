import { Input } from '@/components/ui/input'
// import { SearchIcon } from 'lucide-react'

export default function HeroBanner() {
  return (
    <section>
      <div
        className="w-full h-screen  flex flex-col items-center justify-center gap-4 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/images/prop3.webp)' }}
      >
        <div className=" inline-block max-w-xl text-center pt-16 text-2xl text-white ">
          <h2>
            Find the right home at the right{' '}
            <span className=" text-orange-400 ">price&nbsp;</span>
          </h2>

          <button type="submit">Click</button>
        </div>
        <div className="mt-8 rounded-xl">
          <Input
            type="search"
            placeholder="Search..."
            className="bg-white text-sm border-none "
          />
          {/* <SearchIcon className="" /> */}
        </div>
      </div>
    </section>
  )
}
