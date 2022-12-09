import {useNavigate} from 'react-router-dom'
export default function LandingPage() {
    let navigate = useNavigate()
    return (
      <div className="relative overflow-hidden bg-white my-4">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                What Book Are You Looking For
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Not sure what to ride next? explore our catalog of public domain books with our editors.
              </p>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://static.buku.kemdikbud.go.id/content/image/coverteks/coverkurikulum21/IPA-BS-KLS-VIII-cover.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://pmpk.kemdikbud.go.id/bukudigital/upload/modules/images/1621544917_60a6cfd580326.PNG"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://static.buku.kemdikbud.go.id/content/image/coverteks/coverkurikulum21/IPA-BS-KLS%20X%20COVER.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="http://snd.erlangga.co.id/images/asset_artikel/info_produk/0033000301.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://aplikasibse.com/wp-content/uploads/book-cover/1568_dfa9.jpg"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Gqd6h2hb1Jo-NZFHiyxieaks9n52QbgB0g&usqp=CAU"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB8o9qKOqAcVTyFSC5vvFjkYeHegZ5UqpUKhbH0XaTK1frpSAkGqFa6CqsNHKJpJOTPIE&usqp=CAU"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <p onClick={() => navigate('/sign-in')}
                  className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Sign in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  