import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function HomePicText() {
  return (
    <section className="  sm:px-6 lg:px-8 bg-black-900 border-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <Image
            src="/assets/images/familypic.jpg"
            alt="card image"
            width={3200}
            height={800}
          />
        </div>
        <div className="flex items-center py-20 px-4 ">
          <div>
            <h2 className=" text-3xl pb-5">
              Start touring homes, no strings attached
            </h2>
            <p className="pb-5">
              Unlike many other agents, Redfin agents wont ask you to sign an
              exclusive commitment before theyll take you on a first tour.
            </p>

            <Button className="cursor-pointer bg-blue-600">
              Search for homes
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
