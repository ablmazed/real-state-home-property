'use client'
import { ChevronUp, FacebookIcon, Instagram, Twitter } from 'lucide-react'
import { Button } from '../ui/button'
import { Separator } from '@/components/ui/separator'
import data from '@/lib/data'

export default function Footer() {
  return (
    <footer>
      <div className="w-full py-20 px-20">
        <div className="mx-auto max-w-7xl ">
          <div className="w-full">
            <Button
              variant="ghost"
              className=" w-full hidden lg:flex items-center gap-2 py-4  px-7 rounded-full shadow-md font-semibold bg-blue-500 hover:bg-blue-700 hover:shadow-xl cursor-pointer "
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <ChevronUp className="mr-2 h-4 w-4" />
              Back to top
            </Button>
          </div>

          <div className="flex justify-between  items-center py-5">
            <div>
              <h2>Xiro-Homes</h2>
            </div>
            <div>
              <Button
                variant="ghost"
                className="hidden lg:flex items-center gap-2 py-4  px-7 rounded-full shadow-md font-semibold hover:shadow-xl bg-blue-500 hover:bg-blue-700"
              >
                <a href="/contact-us">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
        <Separator className="bg-gray-300  " />
        <div className="flex justify-between flex-col py-8 min-[500px]:py-14 gap-8 min-[500px]:gap-16 lg:gap-0 lg:flex-row">
          {data.footerMenu.map((fmenu, index) => (
            <div key={index} className="block">
              <h2 className="text-lg font-medium mb-4 min-[500px]:mb-7 text-center min-[500px]:text-left">
                {fmenu.title}
              </h2>
              <ul>
                {fmenu.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center"></div>

        {/* Newsletter Section */}
        <div className="block lg:max-w-md lg:py-6">
          <h3 className="font-manrope font-semibold text-2xl leading-9 mb-8 text-center lg:text-left">
            Join the newsletter and read the new posts first
          </h3>
          <div className="lg:bg-gray-100 lg:rounded-full pb-4 lg:h-16   lg:p-1.5 lg:flex-row gap-6 lg:gap-0 flex-col flex items-center justify-between">
            <input
              type="text"
              name="email"
              className="py-3 px-6 rounded-full text-black focus:outline-none flex-1 w-full max-w-xl mx-auto lg:w-auto lg:py-5 lg:px-7 lg:bg-transparent  "
              placeholder="Your email here..."
            />
            <button
              type="submit"
              className="py-3.5 px-7   bg-indigo-500 shadow-md rounded-full font-semibold hover:bg-indigo-700 cursor-pointer"
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <Separator className="bg-gray-300 " />

        <div className="py-9 border-t border-gray-200">
          <div className="flex items-center justify-center flex-col gap-8 lg:gap-0 lg:flex-row lg:justify-between">
            <div className="flex">
              <h4>Xiro-Homes 2025, All rights reserved.</h4>
            </div>
            <div className="flex">
              <h4>
                Updated January 2025: By searching, you agree to the Terms of
                Use and Privacy Policy.
              </h4>
            </div>
            <div className="flex gap-3">
              <h4>
                <a href="https://facebook.com">
                  <FacebookIcon />
                </a>
              </h4>
              <h4>
                <a href="https://twitter.com">
                  <Twitter />
                </a>
              </h4>
              <h4>
                <a href="https://facebook.com">
                  {' '}
                  <Instagram />
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
