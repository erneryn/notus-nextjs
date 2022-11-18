import React from "react";
import Link from "next/link";
import Image from 'next/image'
// components

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://erynimage.s3.ap-southeast-1.amazonaws.com/KAKHI/noah-buscher-x8ZStukS2PM-unsplash.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute bg-black opacity-50"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">KAKHI</h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    KONSERVASI ALAM KEANEKARAGAMAN HAYATI INDONESIA
                  </p>
                </div>
              </div>
            </div>
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
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Komunitas</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Membangun dan mendukung komunitas Konservasionis
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Konservasi</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Mendukung dan mengkoordinir tindakan Konservasi
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Rehabilitasi</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Pemeliharann/Perawatan terhadap habitat dan lingkungan
                      hutan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-26">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <Image src="/img/logo.png" height={100} width={100} />
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Konservasi Alam Keanekaragaman Hayati Indonesia (KAKHI)
                </h3>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  Kakhi Indonesia bertujuan untuk memobilisasi pengalaman kami
                  dalam hal konservasi, pemerintahan, bisnis dan hubungan
                  masyarakat untuk memberikan dukungan dan mengkoordinasikan
                  tindakan untuk konservasi
                </p>
                <Link href="/">
                  <a href="#pablo" className="font-bold text-blueGray-700 mt-8">
                    Selengkapnya.
                  </a>
                </Link>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto sm:mt-10 mt-10">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                  <div className="relative w-full align-middle rounded-t-lg text-white h-350-px">
                    <Image
                      className="rounded-t-lg"
                      layout="fill"
                      objectPosition="center"
                      objectFit="cover"
                      alt="..."
                      src="https://erynimage.s3.ap-southeast-1.amazonaws.com/KAKHI/aldino-hartan-putra-vtvwsA82aJE-unsplash.jpg"
                    />
                  </div>
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-blueGray-700 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Hutan Manggrove
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      Indonesia mempunyai hutan mangrove terbesar di dunia.
                      Fungsi hutan mangrove tidak hanya mencegah abrasi, tapi
                      bermanfaat untuk kehidupan sosial-ekonomi masyarakat.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://erynimage.s3.ap-southeast-1.amazonaws.com/KAKHI/jonathan-kemper-CbZh3kaPxrE-unsplash.jpg"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200 sm:mt-0 mt-10">
                    <i className="fas fa-expand text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">Fokus Kegiatan</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    Kakhi Indonesia berinisiatif mengambil peran untuk
                    berkonsentrasi pada kegiatan konservasi dan pemberdayaan
                    masyarakat pada kawasan ekosistem hutan dan ekosistem
                    pantai, beberapa fokus kegiatan yang dilakukan dalam bentuk
                    Dukungan:
                  </p>
                  <div className="flex">
                    <div>
                      <ul className="list-none mt-6">
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500  mr-3">
                                <i className="fas fa-circle"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-blueGray-500">
                                Pengamanan Kawasan Konservasi{" "}
                              </h4>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500  mr-3">
                                <i className="fas fa-circle"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-blueGray-500">
                                Restorasi Pengkayaan Tanaman
                              </h4>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500  mr-3">
                                <i className="fas fa-circle"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-blueGray-500">
                                Peningkatan Ekonomi Berbasis Ekowisata
                              </h4>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500  mr-3">
                                <i className="fas fa-circle"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-blueGray-500">
                                Peningkatan Sumberdaya Manusia
                              </h4>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="list-none mt-6">
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500  mr-3">
                                <i className="fas fa-circle"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-blueGray-500">
                                Pemberdayaan Masyarakan Lokal
                              </h4>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500  mr-3">
                                <i className="fas fa-circle"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-blueGray-500">
                                Pengembangan Habitat Alam
                              </h4>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500  mr-3">
                                <i className="fas fa-circle"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-blueGray-500">
                                Penanganan Konflik Satwa Liar dan Manusia
                              </h4>
                            </div>
                          </div>
                        </li>
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500  mr-3">
                                <i className="fas fa-circle"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-blueGray-500">
                                Sosialiasi Dan Publikasi
                              </h4>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-8/12 px-4">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                  <i className="fas fa-rocket text-xl"></i>
                </div>
                <h2 className="text-4xl font-semibold">Tujuan Strategis</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  Mengembangkan kegiatan lapangan tentang kampanye perlindungan
                  hutan, program penyadaran, reboisasi dan rehabilitasi pesisir,
                  pendidikan konservasi dan peningkatan pendapatan bagi
                  masyarakat lokal.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
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
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-36">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Program Strategis
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  KAKHI Memiliki program - program strategis diantaranya adalah
                  :
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-bullhorn text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Green Campaign
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Bekerja sama dengan instansi pemerintah daerah dan LSM dalam
                  melaksanakan kampanye perlindungan hutan, reboisasi dan
                  rehabilitasi lingkungan
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Grow Capacity
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Mengembangkan kapasitas KAKHI Indonesia dalam mengelola
                  organisasi dan kemitraan
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-handshake text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Work Together
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Bekerja sama dengan instansi pemerintah daerah dan LSM dalam
                  mengembangkan, mengolah, dan memasarkan produk tradisional
                  lokal dan produk ramah lingkungan
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-32">
          <div className="container mx-auto px-12">
            <div className="flex flex-wrap justify-center text-center mb-4">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Kegiatan Kami</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                  KAKHI Telah banyak melakukan kontribusi terhadap Konservasi
                  dengan melakukan berbagai kegiatan seperti :
                </p>
              </div>
            </div>
            <div className="flex flex-wrap px-12">
              <div className="relative w-full md:w-4/12  text-center px-2">
                <div className="relative w-full align-middle rounded-t-lg text-white h-350-px">
                  <Image
                    className="rounded-t-lg"
                    layout="fill"
                    objectPosition="top center"
                    objectFit="cover"
                    alt="..."
                    src="https://erynimage.s3.ap-southeast-1.amazonaws.com/KAKHI/WhatsApp+Image+2022-11-11+at+10.52.31+AM.jpeg"
                  />
                </div>
                <blockquote className="relative p-4 pb-6 rounded-b-lg bg-blueGray-700 shadow-lg">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Orang Utan Desa Garunggang
                  </h4>
                  <p className="text-md font-light mt-2 text-white line-clamp-5">
                    Pada tahun 2005 ada kami temukan 5 individu orang utan di
                    bantaran sungai kulap Desa Telagah dan Desa Garunggang dan
                    masuk dalam kawasan Hutan Produksi Terbatas
                  </p>
                </blockquote>
              </div>

              <div className="relative w-full md:w-4/12  text-center px-2">
                <div className="relative w-full align-middle rounded-t-lg text-white h-350-px">
                  <Image
                    className="rounded-t-lg"
                    layout="fill"
                    objectPosition="left center"
                    objectFit="cover"
                    alt="..."
                    src="https://erynimage.s3.ap-southeast-1.amazonaws.com/KAKHI/image005.jpg"
                  />
                </div>
                <blockquote className="relative p-4 pb-6 rounded-b-lg bg-blueGray-700 shadow-lg">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Conservation and Environment Awareness
                  </h4>
                  <p className="text-md font-light mt-2 text-white line-clamp-5">
                    Kegiatan Pelatihan tentang konservasi. melibatkan
                    masyarakat,komunitas, atau karyawan agar nantinya menjadi
                    pelaku konservasi
                  </p>
                </blockquote>
              </div>

              <div className="relative w-full md:w-4/12  text-center px-2">
                <div className="relative w-full align-middle rounded-t-lg text-white h-350-px">
                  <Image
                    className="rounded-t-lg"
                    layout="fill"
                    objectPosition="top center"
                    objectFit="cover"
                    alt="..."
                    src="https://erynimage.s3.ap-southeast-1.amazonaws.com/KAKHI/image002.jpg"
                  />
                </div>
                <blockquote className="relative p-4 pb-6 rounded-b-lg bg-blueGray-700 shadow-lg">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Pendampingan Penggalian Potensi Manggrove{" "}
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Kami melakukan Pendampingan dan Pelatihan bagaimana hutan
                    mangrove seharusnya di rehabilitasi, dan menggali potensi
                    yang ada.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-8/12 px-4">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                  <i className="fas fa-coins text-xl"></i>
                </div>
                <h2 className="text-4xl font-semibold">Strategi Penggalangan Dana</h2>
                <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                Kami menyadari bahwa penggalangan dana butuh kerja keras dan sumber pendanaan seringkali sangat kompetitif. Penting untuk menemukan peluang pendanaan baru setiap saat, terus berkomunikasi dengan orang-orang yang tepat tentang apa yang kami coba lakukan dalam konservasi di Indonesia, menunjukkan bagaimana kami dapat mencapai target. Prinsip penggalangan dana kami adalah bahwa hubungan Kakhi Indonesia dan donor merupakan kemitraan. Seperti semua kemitraan yang baik, itu perlu didasarkan pada rasa saling menghormati, saling percaya, dan saling menguntungkan.
Strategi penggalangan dana Kakhi Indonesia adalah mengumpulkan dana dari individu dan lembaga pendanaan untuk mendukung proyek tertentu. Untuk memilih pendukung dana, penting untuk menjual ide proyek yang disesuaikan dengan berbagai alasan dan motivasi di balik sumber pendanaan selain itu penting juga untuk menciptakan kesan yang baik bahwa Kakhi Indonesia kompeten, memiliki kemampuan dan dedikasi untuk melaksanakan program secara tepat dan efisien.

                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
