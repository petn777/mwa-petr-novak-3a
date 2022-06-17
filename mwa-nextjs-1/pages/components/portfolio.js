import Navbar from "./nav";
import Image from "next/image";
import FooterPage from "./footer";

import fir from "../images/fir.png";
import sec from "../images/sec.png";
import thi from "../images/thi.png";
import fou from "../images/fou.png";
import fif from "../images/fif.png";
import six from "../images/six.png";
import sev from "../images/sev.png";

export default function ContactPage() {
  return (
    <div>
      <Navbar />

      <div class="font-mono grid sm:grid-cols-2 justify-items-center bg-[#FF8482]">
        <div class="grid w-10/12 md:ml-28 lg:h-80 text-white mt-40 md:mt-44 justify-items-start">
          <p
            className=" font-extrabold break-all md:ml-0 ml-2
                     text-7xl w-11/12 font-serif -mt-40 lg:mt-0"
          >
            Porfolio
          </p>
          <p class="-mt-20 md:ml-0 ml-4 w-9/12 break-all md:-mt-20 text-lg">
            Eu minim movet quodsi eum. Et vim dolore epicurei, ut aeque postea
            nam, at posse dicta est.
          </p>
        </div>
        <div class=" grid justify-center mt-0 md:mt-2 md:max-w-6xl md:w-7/12 md:mr-12 w-full">
          <img
            class="w-full md:mt-0"
            src="https://freewebillustrations.com/static/images/preview/ouch-marginalia-productive-work.png"
            alt="x"
          />
        </div>
      </div>

      <div class="grid h-20 justify-items-center bg-[#FFF2DD]">
        <div class="font-mono grid justify-items-center grid-cols-5 sm:w-5/12">
          <button class="font-bold text-lg">Vivendo</button>
          <button class="text-lg text-gray-400">Omnesque</button>
          <button class="text-lg text-gray-400">Lobortis</button>
          <button class="text-lg text-gray-400">Inimicus</button>
          <button class="text-lg text-gray-400">Mediocritatem</button>
        </div>
      </div>

      <div class="grid justify-items-center sm:py-20">
        <div class="grid sm:grid-cols-3 grid-rows-3 w-10/12 justify-items-start">
          <div class="grid h-fit justify-items-center box py-6">
            <Image src={fir}></Image>
            <div className="h-28 bg-white shadow-xl w-11/12 sm:w-4/6 relative -mt-10 rounded-sm">
              <p className="font-bold ml-8 mt-6 text-2xl">Ubique erroribus</p>
              <p class="ml-8 mt-2 text-gray-400">Modo mutat</p>
            </div>
          </div>

          <div class="grid h-fit justify-items-center box py-6 sm:mt-0 -mt-36">
            <Image src={sec}></Image>
            <div className="h-28 bg-white shadow-xl  w-11/12 sm:w-4/6 relative -mt-10 rounded-sm">
              <p className="font-bold ml-8 mt-6 text-2xl">Ubique erroribus</p>
              <p class="ml-8 mt-2 text-gray-400">Modo mutat</p>
            </div>
          </div>

          <div class="grid h-fit justify-items-center box py-6 sm:mt-0 -mt-40">
            <Image src={thi}></Image>
            <div className="h-28 bg-white shadow-xl  w-11/12 sm:w-4/6 relative -mt-10 rounded-sm">
              <p className="font-bold ml-8 mt-6 text-2xl">Ubique erroribus</p>
              <p class="ml-8 mt-2 text-gray-400">Modo mutat</p>
            </div>
          </div>

          <div class="grid h-fit justify-items-center box py-6 sm:-mt-80">
            <Image src={fou}></Image>
            <div className="h-28 bg-white shadow-xl  w-11/12 sm:w-4/6 relative -mt-10 rounded-sm">
              <p className="font-bold ml-8 mt-6 text-2xl">Ubique erroribus</p>
              <p class="ml-8 mt-2 text-gray-400">Modo mutat</p>
            </div>
          </div>

          <div class="grid h-fit justify-items-center box py-6 sm:-mt-48">
            <Image src={fif}></Image>
            <div className="h-28 bg-white shadow-xl  w-11/12 sm:w-4/6 relative -mt-10 rounded-sm">
              <p className="font-bold ml-8 mt-6 text-2xl">Ubique erroribus</p>
              <p class="ml-8 mt-2 text-gray-400">Modo mutat</p>
            </div>
          </div>

          <div class="grid h-fit justify-items-center box py-6">
            <Image src={six}></Image>
            <div className="h-28 bg-white shadow-xl  w-11/12 sm:w-4/6 relative -mt-10 rounded-sm">
              <p className="font-bold ml-8 mt-6 text-2xl">Ubique erroribus</p>
              <p class="ml-8 mt-2 text-gray-400">Modo mutat</p>
            </div>
          </div>

          <div class="grid h-fit justify-items-center box py-6 sm:-mt-[620px]">
            <Image src={sev}></Image>
            <div className="h-28 bg-white shadow-xl  w-11/12 sm:w-4/6 relative -mt-10 rounded-sm">
              <p className="font-bold ml-8 mt-6 text-2xl">Ubique erroribus</p>
              <p class="ml-8 mt-2 text-gray-400">Modo mutat</p>
            </div>
          </div>
        </div>
      </div>

      <div class="sm:-mt-[1000px]">
        <div class="grid justify-items-center">
          <button class="h-12 mt-8 mb-10 md:mt-4 md:mb-8 rounded-sm w-1/3 md:w-1/12 text-white transition-all duration-200 hover:bg-red-500 bg-red-700 font-mono px-2">
            Learn More
          </button>
        </div>

        <FooterPage />
      </div>
    </div>
  );
}
