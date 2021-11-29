import logo from './logo.svg';
import './App.css';
import cart from './images/cart.jpg';

function App() {
  return (

<div>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-12 w-12" src="https://image.similarpng.com/very-thumbnail/2020/11/Bitcoin-with-golden-coin-on-transparent-background-PNG.png"
                  alt="x"/>
              </div>
              <div className="md:block">
                <div className="flex items-baseline space-x-20">
                  <a href="#" className="ml-4 text-2xl font-bold">NoCryptoScam</a>

                  <a href="#" className="text-green-500 hover:bg-green-500 hover:text-white px-3 py-2 rounded-md">Home</a>

                  <a href="#" className="hover:bg-green-500 hover:text-white px-3 py-2 rounded-md">Functions</a>

                  <a href="#" className="hover:bg-green-500 hover:text-white px-3 py-2 rounded-md">List of Crypto</a>

                  <a href="#" className="hover:bg-green-500 hover:text-white px-3 py-2 rounded-md">FAQ</a>

                  <a class="inline-block border border-green-500 rounded-3xl py-3 px-10 hover:bg-green-500 text-green-500 hover:text-white" href="#">Get Started</a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </nav>
      <main>
        <div className="mt-32 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex flex-col items-center justify-center font-sans">
            <p className="text-7xl text-gray-800 font-semibold ">Top Quality Web xx</p>
            <p className="text-col text-gray-800 text-7xl font-semibold">To Trade Your Own Crypto</p>
            <div className="mt-8 text-col text-gray-800 text-xl text-center">
              <p>Get your your crypto ready</p>
              <p className="mt-2">Multiply your money stogreen in cryptocurrencies</p>
              <p className="mt-2">Leave with the greatest profit that is not offegreen anywhere</p>
            </div>          
            <a class="mt-5 border border-green-500 hover:border-green-500 hover:bg-white hover:text-green-500 rounded-3xl py-3 px-10 bg-green-500 text-white font-medium" href="#">Explore</a>
            <img className="mt-16 border rounded-3xl" src="https://www.globalbankingandfinance.com/wp-content/uploads/2019/08/crypto.jpg"
                  alt="x"/>
            <p className="mt-8 text-3xl text-green-500 font-semibold">Our functions</p>
            <div className="mt-6 grid grid-cols-4">
              <div className="">
              <img className="h-16 w-16" src={cart}
                  alt="x"/>
                <p className="mt-2">Duis condimentum augue id magna semper rutrum. Duis risus. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam.</p>

              </div>
              <div className="">
              <img className="h-16 w-16 border border-white rounded-3xl" src="https://www.nicepng.com/png/detail/381-3819392_selling-png-png-sell-icon.png"
                  alt="x"/>
                <p className="mt-2">Duis condimentum augue id magna semper rutrum. Duis risus. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam</p>
                
              </div>
              <div className="">
              <img className="h-16 w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE1pgh9W9EF1LajQ1_6at-KawpLmD62tTsbZoOX2mHudTmRd0CC-1e3SQZolmbpkpaBF0&usqp=CAU"
                  alt="x"/>
                <p className="mt-2">Duis condimentum augue id magna semper rutrum. Duis risus. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam.</p>

              </div>
              <div className="">
              <img className="h-16 w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqob9HkgCzmajro5a_nHSfNBKQ19swF7QhA&usqp=CAU"
                  alt="x"/>
                <p className="mt-2">Duis condimentum augue id magna semper rutrum. Duis risus. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam.</p>

              </div>
            </div>



            <div className="mt-40 grid grid-cols-2">
              <div className="">
              <img className="ml-5 h-64 border borde-white rounded-3xl" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202110/bitc.jpg?YSbR7Gqu27j4An6ruCgz_GbcD4GbEuUf&size=770:433"
                  alt="x"/>

              </div>
              <div className="">
              <p className="text-3xl text-green-500 font-semibold">Our functions</p>
              <img className="mt-4 h-16 w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE1pgh9W9EF1LajQ1_6at-KawpLmD62tTsbZoOX2mHudTmRd0CC-1e3SQZolmbpkpaBF0&usqp=CAU"
                  alt="x"/>
                <p className="mt-2">Duis condimentum augue id magna semper rutrum. Duis risus. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam.</p>


              <img className="mt-4 h-16 w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqob9HkgCzmajro5a_nHSfNBKQ19swF7QhA&usqp=CAU"
                  alt="x"/>
                <p className="mt-2">Duis condimentum augue id magna semper rutrum. Duis risus. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam.</p>

              </div>
              
            </div>



            <p className="mt-48 text-3xl text-green-500 font-semibold">Our functions</p>
            <p className="mt-5 text-5xl font-semibold">Everything is possible</p>
            <div className="mt-10 grid grid-cols-2 grid-rows-2">

              
              <div className="">
              <img className="h-16 w-16" src={cart}
                  alt="x"/>
                <p className="mt-2">Duis condimentum augue id magna semper rutrum. Duis risus. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam.</p>

              </div>
              <div className="">
              <img className="h-16 w-16 border border-white rounded-3xl" src="https://www.nicepng.com/png/detail/381-3819392_selling-png-png-sell-icon.png"
                  alt="x"/>
                <p className="mt-2">Duis condimentum augue id magna semper rutrum. Duis risus. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam</p>
                
              </div>
              <div className="">
              <img className="h-16 w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE1pgh9W9EF1LajQ1_6at-KawpLmD62tTsbZoOX2mHudTmRd0CC-1e3SQZolmbpkpaBF0&usqp=CAU"
                  alt="x"/>
                <p className="mt-2">Duis condimentum augue id magna semper rutrum. Duis risus. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam.</p>

              </div>
              <div className="">
              <img className="h-16 w-16" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhqob9HkgCzmajro5a_nHSfNBKQ19swF7QhA&usqp=CAU"
                  alt="x"/>
                <p className="mt-2 mb-5">Duis condimentum augue id magna semper rutrum. Duis risus. Etiam dui sem, fermentum vitae, sagittis id, malesuada in, quam.</p>

              </div>
            </div>
        </div>

      </main>
    </div>














  );
}

export default App;
