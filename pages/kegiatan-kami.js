import React from "react";
import Image from 'next/image'

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Profile() {
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1578142880638-9fc9aba285c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    Kegiatan Kami
                  </h3>
                </div>

                <div className="mt-10 py-10 border-t border-blueGray-200 text-left">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <h3 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                        Sejarah data Orang Utan di Garunggang
                      </h3>
                      <div className="my-4">
                        <Image
                          src="https://erynimage.s3.ap-southeast-1.amazonaws.com/KAKHI/WhatsApp+Image+2022-11-11+at+10.52.29+AM+(1).jpeg"
                          height={400}
                          width={350}
                          alt="Orang Utan Garunggu"
                        />
                      </div>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700 text-justify">
                        Pada tahun 2005 ada kami temukan 5 individu orang utan
                        di bantaran sungai kulap Desa Telagah dan Desa
                        Garunggang ( sungai kulab adalah batas desa Telagah dan
                        desa Garunggang) dan masuk dalam kawasan Hutan Produksi
                        Terbatas ( HPT ) ada pun luas hutan bantaran sungai yng
                        menjadi tempat orang hutan tersebut lebih kurang 50 - 75
                        Ha yang di kelilingi perladangan masyarakat dan di
                        kelilingi beberapa perkampungan seperti sebelah Barat
                        ada Dusun Perteguhen Desa Telagah, sebelah selatan Dusun
                        Pamah Simelir Desa Telagah, Sebelah Timur Dusun Tanjung
                        Bunga Desa Garunggang dan sebelah Utara Dusun Adin
                        Tengah Desa Adin tengah. Yang menjadi makanan orang
                        hutan tersebut 80% adalah tanaman masyarakat dan 20% nya
                        buah dan dedaunan hutan, namun masyarakat tidak pernah
                        mengganggu keberadaan orang hutan tersebut walau pun
                        tanaman masyarakat sudah sangat terganggu, pernah ada
                        pihak pihak yang tidak bertanggung jawap mencoba
                        mengganggu orang hutan tersebut tapi masyarakat sekitar
                        langsung marah dan melindungi orang hutan tersebut dan
                        sampai sekarang Tahun 2022 keberadaan orang hutan
                        tersebut tetap aman dan sudah bertambah menjadi 7
                        individu Kami tidak tau persis tahun berapa orang hutan
                        tersebut telah melahirkan. Demikian kronologi keberadaan
                        orang hutan yang berada di bantaran sei kulap desa
                        garunggang dan desa telagah
                      </p>
                      <div className="flex flex-wrap items-center w-full">
                        <div className="w-full lg:w-4/12  relative p-3">
                          <div className="bg-white p-5 relative h-350-px">
                            <Image
                              className="p-1"
                              src="https://erynimage.s3.ap-southeast-1.amazonaws.com/KAKHI/WhatsApp+Image+2022-11-11+at+10.52.29+AM+(2).jpeg"
                              layout="fill"
                              objectFit="cover"
                              objectPosition="top"
                              alt="Orang Utan Garunggu"
                            />
                          </div>
                        </div>
                        <div className="w-full lg:w-4/12  relative p-3">
                          <div className="bg-white p-5 relative h-350-px">
                            <Image
                              src="https://erynimage.s3.ap-southeast-1.amazonaws.com/KAKHI/WhatsApp+Image+2022-11-11+at+10.52.30+AM.jpeg"
                              layout="fill"
                              objectFit="cover"
                              objectPosition="center"
                              alt="Orang Utan Garunggu"
                            />
                          </div>
                        </div>
                        <div className="w-full lg:w-4/12  relative p-3">
                          <div className="bg-white p-5 relative h-350-px">
                            <Image
                              src="https://erynimage.s3.ap-southeast-1.amazonaws.com/KAKHI/WhatsApp Image 2022-11-11 at 10.52.31 AM (1).jpeg"
                              layout="fill"
                              objectFit="cover"
                              objectPosition="center"
                              alt="Orang Utan Garunggu"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 py-10 border-t border-blueGray-200 text-left">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <h3 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                       Kegiatan Lainnya Terkait aktivitas Konservasi
                      </h3>
                       <div className="flex flex-wrap items-center w-full">
                        <div className="w-full lg:w-4/12  relative p-3">
                          <div className="bg-white p-5 relative h-350-px">
                            <Image
                              className="p-1"
                              src="https://erynimage.s3.ap-southeast-1.amazonaws.com/KAKHI/image002.jpg"
                              layout="fill"
                              objectFit="cover"
                              objectPosition="top"
                              alt="Orang Utan Garunggu"
                            />
                          </div>
                        </div>
                        <div className="w-full lg:w-4/12  relative p-3">
                          <div className="bg-white p-5 relative h-350-px">
                            <Image
                              src="https://erynimage.s3.ap-southeast-1.amazonaws.com/KAKHI/image003.jpg"
                              layout="fill"
                              objectFit="cover"
                              objectPosition="center"
                              alt="Orang Utan Garunggu"
                            />
                          </div>
                        </div>
                        <div className="w-full lg:w-4/12  relative p-3">
                          <div className="bg-white p-5 relative h-350-px">
                            <Image
                              src="https://erynimage.s3.ap-southeast-1.amazonaws.com/KAKHI/image004.jpg"
                              layout="fill"
                              objectFit="cover"
                              objectPosition="center"
                              alt="Orang Utan Garunggu"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
