import { BiMenuAltRight } from "react-icons/bi";
import Link from "next/link";



export default function Navbar() {



  return (
    <div>
































      <nav class="font-mono  bg-[#FF8482] px-2 sm:px-4 py-2.5">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
          <a href="#" class="flex">
            <p class="self-center lg:ml-24 ml text-4xl font-semibold py-3 dark:text-white">
              LOGO
            </p>
          </a>
          <div class="flex md:order-2">
            <button
              type="button"
              class="hidden sm:flex text-white text-lg border-2 hover:bg-red-400 border-white font-medium rounded-sm px-16 py-3 text-center lg:mr-24"
            >
              Sign up
            </button>
            <button
              type="button"
              class="md:hidden inline-flex items-center p-2 text-4xl text-white hover:bg-red-400 hover:rounded-xl"
            >
              <BiMenuAltRight />
            </button>
          </div>
          <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1">
            <ul class="flex flex-col ml-32 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link href="/components/portfolio">
                  <a class="block text-lg py-2 px-2 text-white hover:bg-red-400 hover:rounded-xl">
                    Portfolio
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/components/contactp">
                  <a class="block text-lg py-2 px-2 text-white hover:bg-red-400 hover:rounded-xl">
                    Contacts
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
