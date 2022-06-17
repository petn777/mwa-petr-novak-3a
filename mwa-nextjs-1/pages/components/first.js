export default function FirstPage() {
  return (
    <div class="font-mono grid sm:grid-cols-2 justify-items-center bg-[#FF8482]">
      <div class="grid grid-rows-3 w-10/12 md:ml-28 lg:h-80 text-white mt-40 md:mt-44">
        <p class="-mt-40 md:mt-0 text-lg">Delectus instructior</p>
        <p className=" font-extrabold break-all text-7xl w-10/12 font-serif -mt-56 lg:-mt-12">
          Vide legimus consectetuer
        </p>
        <div className="grid-rows-2 lg:grid-rows-1 grid lg:grid-cols-2 md:mt-0">
          <input
            class="rounded-sm h-12 md:mt-12"
            placeholder="Email"
            type="email"
            name="XD"
            id="xd"
          />
          <button class="h-12 mt-2 md:mt-12 lg:ml-16 rounded-sm bg-white w-1/2 md:w-2/3 text-black transition-all duration-200 hover:bg-gray-400 font-mono border-black border-2 px-2">
            Submit
          </button>
        </div>
      </div>
      <div class=" grid justify-center mt-0 md:mt-2 md:max-w-6xl md:w-11/12 md:mr-12 w-full">
        <img
          class="w-full md:mt-0"
          src="https://freewebillustrations.com/static/images/preview/ouch-marginalia-productive-work.png"
          alt="x"
        />
      </div>
    </div>
  );
}
