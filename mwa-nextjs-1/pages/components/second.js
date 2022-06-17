export default function SecondPage() {
  return (
    <div class="font-mono grid sm:grid-cols-2 justify-items-center bg-[#FFF2DD] md:h-screen">
      <div class=" grid justify-center mt-0 md:mt-2 md:max-w-6xl md:w-11/12 md:mr-12 w-full">
        <img
          class="w-screen md:mt-0"
          src="https://freewebillustrations.com/static/images/preview/thumb/ouch-marginalia-unsubscribed.png"
          alt="x"
        />
      </div>
      <div class="grid justify-start w-10/12 md:ml-12 md:mr-32 h-96 mt-40 md:mt-44">
        <div class="-mt-44 md:mt-0">
          <p class="text-lg font-bold text-red-800">Dico nullam</p>
          <p className="mt-4 text-gray-800 font-extrabold break-all text-7xl w-10/12 font-serif ">
            Vim graeco principes
          </p>
          <p className="text-gray-800 text-2xl mt-8 break-all w-10/12 font-sans">
            Quo ex ocurreret quaerendum. Mel cu ancillae similique. Mei no
            ubique persecuti, at sit iusto aliquam interpretaris.
          </p>
        </div>

        <div className="md:mt-0">
          <button class="h-12 mt-2 md:mt-12 rounded-md bg-rose-700 w-1/4 text-white transition-all duration-200 hover:bg-rose-400 font-mono px-2">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}
