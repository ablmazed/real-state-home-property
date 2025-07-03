import data from '@/lib/data'
import HomeCard from './HomeCard'

export default function HomeService() {
  return (
    <section className="px-20">
      <div className="flex py-10 items-center justify-center">
        <h2 className="font-bold text-4xl ">Our Service</h2>
      </div>
      <div className="flex gap-3 items-center justify-center md:p-4 md:space-y-4 ">
        <HomeCard cards={data.homeCard} />
      </div>
    </section>
  )
}
