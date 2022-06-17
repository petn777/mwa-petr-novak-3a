import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="bg-black">
   
      <nav class="bg-black p-4 fixed w-full top-0 shadow-xl shadow-blue-600">
        <div class="container mx-auto flex flex-wrap items-center">
            <div class="flex w-full md:w-1/2 justify-center md:justify-start font-extrabold">
                <a class="mt-1 mr-1" href="#">
                  <img class="h-12" src="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=014" alt="x" />
                </a>
                <a class="mt-1 mr-1" href="#">
                  <img class="h-12" src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="x" />
                </a>
                <a class="text-5xl mt-2 mr-3 font-serif text-blue-600" href="#">
                    MineAll
                </a>
                <a class="mt-1 mr-2" href="#">
                  <img class="h-12" src="https://cryptologos.cc/logos/dogecoin-doge-logo.png" alt="x" />
                </a>
                <a class="mt-1 mr-1" href="#">
                  <img class="h-12" src="https://cryptologos.cc/logos/litecoin-ltc-logo.png?v=014" alt="x" />
                </a>
            </div>
            <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
                  <li class="mr-3">
                    <a class="transition-all duration-300 font-semibold text-2xl inline-block text-blue-600 hover:text-black border-8 border-black hover:border-8 hover:bg-blue-600  hover:border-blue-600 hover:rounded-2xl px-4" href="#">News</a>
                  </li>
                  <li class="mr-3">
                    <a class="transition-all duration-200 font-semibold text-xl inline-block text-gray-500 hover:text-black hover:border-8 border-black hover:bg-blue-600 hover:border-blue-600 hover:rounded-2xl px-4" href="#">What to mine</a>
                  </li>
                  <li class="mr-3">
                    <a class="transition-all duration-200 font-semibold text-xl inline-block text-gray-500 hover:text-black hover:border-8 border-black hover:bg-blue-600 hover:border-blue-600 hover:rounded-2xl px-4" href="#">Installation</a>
                  </li>
                  <li class="mr-3">
                    <a class="transition-all duration-200 font-semibold text-xl inline-block text-gray-500 hover:text-black hover:border-8 border-black hover:bg-blue-600 hover:border-blue-600 hover:rounded-2xl px-4" href="#">F.A.Q</a>
                  </li>
                    <li class="mr-3">
                    <a class="transition-all duration-200 font-semibold text-xl inline-block text-gray-500 hover:text-black hover:border-8 border-black hover:bg-blue-600 hover:border-blue-600 hover:rounded-2xl px-4" href="#">About Us</a>
                  </li>
                </ul>
            </div>
        </div>
      </nav>


    
      <div class="container shadow-2xl shadow-blue-600 mx-auto bg-white rounded-2xl">
        <div class="grid sm:grid-cols-2 justify-items-center">
          <div class="grid justify-items-center text-center mt-48 bg-gray-200 max-w-2xl rounded-3xl font-serif w-4/6 shadow-lg shadow-blue-600">
            <p class="mt-12">• Buy HashRate Now</p>
            <p>• BUY IT, MINE IT, SELL IT</p>
            <p>• Absolutely easy, user friendly, 0 problems</p>
            
            <button class="bg-blue-500 transition-all duration-200 mb-4 mt-10 hover:bg-blue-400 text-white font-bold border-b-4 px-8 border-blue-700 hover:border-blue-500 rounded-2xl">
              Start buying
            </button>
          </div>
          <div class="grid justify-items-center mt-36">
            <img class="border w-11/12 rounded-xl mt-12 shadow-lg shadow-blue-600" src="https://2miners.com/blog/wp-content/uploads/2018/02/what-is-mining-luck-ethereum-pool.png" alt="x" />
          </div>
        </div>

        <div class="grid justify-items-center mt-12">
          <p class="mb-5 font-bold text-5xl underline text-blue-900 text-center">Extreme profitabilty with US</p>
          <img class="justify-items-center border rounded-3xl shadow-lg shadow-blue-600 mb-9" src="https://miro.medium.com/max/1400/1*s8EgntSlYEbaJ1d9lJTADQ.png" alt="x" />
        </div>


        <div class="grid sm:grid-cols-2 justify-items-center">
          <div class="grid justify-items-center mt-12 mb-12">
            <img class="border rounded-xl shadow-lg shadow-blue-600" src="https://m.media-amazon.com/images/I/31Bk3mwBKRL._AC_SX355_.jpg" alt="x" />
          </div>
          <div class="grid justify-items-center text-col text-center mt-12 mb-12 bg-gray-200 max-w-2xl rounded-3xl font-serif w-4/6 shadow-lg shadow-blue-600">
            <p class="mt-12">• Start mining now with cloud hashrate.</p>
            <p>• This hashrate is provided by our EXTREME big crpytomining farm</p>
            <p>• 100% CASHBACK</p>
            <button class="bg-blue-500 transition-all duration-200 mb-4 mt-10 hover:bg-blue-400 text-white font-bold border-b-4 px-8 border-blue-700 hover:border-blue-500 rounded-2xl">
              Learn more
            </button>
          </div>
          
        </div>





      </div>
  






      <div class="container mx-auto px-6">
        <div class="mt-16 border-t-2 border-gray-100 flex flex-col items-center">
            <div class="sm:w-2/3 text-center py-6">
                <p class="text-sm text-blue-600 font-bold">
                    © 2021 by Extreme Mining Solutions
                </p>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
