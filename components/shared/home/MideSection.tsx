import { useTheme } from 'next-themes' // Import useTheme from next-themes

import HomeContactForm from './HomeContactForm'
import HomePicText from './HomePicText'
import HomeService from './HomeService'

export default function MideSection() {
  const { theme } = useTheme() // Get the current theme (light or dark)
  return (
    <div
      className={`sm:px-6 lg:px-8 ${
        theme === 'dark'
          ? 'bg-black-900 text-white border-white'
          : 'bg-gray-100 text-black border-black'
      }`}
    >
      <HomeService />
      <HomePicText />
      <HomeContactForm />
    </div>
  )
}
