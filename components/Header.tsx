import React from "react"
import { DiGithubBadge } from "react-icons/di"
import Link from "next/link"

const Header = () => {
  return (
    <div className="relative z-10">
      <div className="w-full h-auto bg-white">
        <div className="container mx-auto px-2 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="text-3xl font-black cursor-pointer hover:text-blue-600">Shtonks</h1>
            </Link>

            <a
              href="https://github.com/kitharvey/shtonks"
              target="_blank"
              rel="noreferrer"
              className="text-3xl font-black cursor-pointer ml-4 hover:text-blue-600"
            >
              <DiGithubBadge />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
