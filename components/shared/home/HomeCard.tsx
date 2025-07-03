import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

type CardItem = {
  icon: string
  title: string
  description: string
  btnTitle: string
  btnColor: string
}[]

export default function HomeCard({ cards }: { cards: CardItem }) {
  return (
    <div>
      <div className="gap-3 justify-center items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 py-16 px-4 sm:px-6 lg:px-8 ">
        {cards.map((card) => (
          <Card
            key={card.title}
            className=" border-solid border-gray-200 border-2 shadow-2xl rounded-lg p-6 flex flex-col items-center text-center   "
          >
            <CardContent className="p-4 flex flex-col items-center justify-center">
              <Link key={card.title} href={'/'} className="pb-4">
                <Image
                  src={card.icon}
                  alt={card.title}
                  className="aspect-square object-scale-down max-w-full h-auto mx-auto"
                  height={40}
                  width={40}
                />
              </Link>
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-center text-sm  overflow-hidden text-ellipsis">
                {card.description}
              </p>
            </CardContent>

            <Button
              type="submit"
              variant="ghost"
              className={`w-40 h-10 ${card.btnColor} cursor-pointer`}
            >
              {card.btnTitle}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}
