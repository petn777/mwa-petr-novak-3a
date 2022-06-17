import Navbar from "./nav";
import FooterPage from "./footer";

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
            Contacts
          </p>
          <p class="-mt-20 md:ml-0 ml-4 w-9/12 break-all md:-mt-20 text-lg">
            Te aliquam noluisse his. Et vel epicuri detracto indoctum, et
            fierent pericula vim, veniam.
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

      <div class="font-mono grid sm:grid-cols-2 justify-items-center">
        <div class="grid w-9/12 md:ml-28 mt-0 md:mt-24">
          <div class="grid md:grid-cols-2 justify-items-center">
            <div class="grid grid-cols-2 w-full md:w-9/12 shadow-2xl md:mt-0 mt-8 rounded-md">
              <img
                class="w-4/12 ml-4 mt-6 mb-4"
                src="https://i.pinimg.com/564x/a6/53/06/a65306911aa1c33387242e8567792982--phone-icon-phones.jpg"
                alt="x"
              />
              <div>
                <p class="font-bold font-mono text-xl -ml-12 md:-ml-10 mt-4 md:mt-4">
                  Call us
                </p>
                <p class="font-mono text-md -ml-12 md:-ml-10">
                  +1 234 567 89 00
                </p>
              </div>
            </div>
            <div class="grid grid-cols-2 w-full md:w-9/12 shadow-2xl md:mt-0 mt-8 rounded-md">
              <img
                class="w-4/12 ml-4 mt-6 mb-4"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbHK9bnu1bYzS00qiE9wQC6NmxMaPw6rbUpw&usqp=CAU"
                alt="x"
              />
              <div>
                <p class="font-bold font-mono text-xl -ml-12 md:-ml-10 mt-4 md:mt-4">
                  Write us
                </p>
                <p class="font-mono text-md -ml-12 md:-ml-10">info@gmail.com</p>
              </div>
            </div>
          </div>

          <p className="text-gray-800 text-xl md:ml-6 mt-4 break-all w-11/12 font-serif">
            Cum ea debitis maluisset gubergren, at mea essent splendide. Vix
            dicam dolore cu. Mel erat timeam scriptorem an. Sit alii tantas
            viderer no. An mel nostrum appareat.
          </p>
          <p className="text-gray-500 text-md md:ml-6 mt-4 break-all w-11/12 font-serif">
            Vix habeo scaevola percipitur ne, qui noster abhorreant ne, mea in
            dicant eligendi evertitur. Ad falli aliquid menandri his. Usu vocent
            copiosae ut. No nihil munere eum.
          </p>

          <div class="grid md:grid-cols-2 md:mt-0 mt-8 rounded-md md:w-11/12 md:ml-6">
            <input
              class="rounded-md border h-12 mt-4"
              placeholder="Your name"
              type="text"
              name="XD"
              id="xd"
            />
            <input
              class="rounded-md border h-12 mt-4 md:ml-8"
              placeholder="Your email"
              type="email"
              name="XD"
              id="xd"
            />
          </div>

          <input
            class="rounded-md border h-40 mt-4 pb-32 pl-2"
            placeholder="Message"
            type="text"
            name="XD"
            id="xd"
          />
          <button class="h-12 md:mb-20 mt-2 md:mt-12 rounded-sm w-1/2 md:w-1/4 text-white transition-all duration-200 hover:bg-red-500 bg-red-700 font-mono px-2">
            Submit
          </button>
        </div>
        <div class="mb-2 grid justify-center mt-8 md:mt-24 md:max-w-6xl md:w-7/12 md:mr-12 w-10/12">
          <img
            class="w-screen md:mt-0"
            src="https://media.istockphoto.com/vectors/abstract-city-map-vector-id1074952328?k=20&m=1074952328&s=612x612&w=0&h=EcOUgaWECPeHBwWEfzSocY08S9dyiuQ5HuVHfkd1Irc="
            alt="x"
          />
        </div>
      </div>

      <FooterPage />
    </div>
  );
}
