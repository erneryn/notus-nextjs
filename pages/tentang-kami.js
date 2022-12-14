import React from "react";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";
import { ActivityTable } from "components/table/activityTable";

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
                "url('https://images.unsplash.com/photo-1617153817979-283ffdcd52f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
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
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src="/img/logo.png"
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-24">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    Konservasi Alam Keanekaragaman Hayati Indonesia
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                    Medan, Sumatera Utara
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-justify">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <h3 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                        Pedahuluan
                      </h3>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        Konservasi Keanekaragaman Hayati Indonesia (Kakhi)
                        secara resmi terdaftar di notaris publik “Miqdad
                        Sembiring, S.H., M.Kn, nomor 09 di Medan pada tanggal 08
                        Desember 2020, pada awalnya Yayasan Kakhi bergerak
                        dengan nama Conservation Mentality (Come) yang pada saat
                        itu diresmikan sebagai Lembaga Swadaya Masyarakat (LSM)
                        oleh notaris publik “Susan Widjaja, SH” di Medan pada
                        tanggal 26 Nopember 2009 kemudian dari beberapa kali
                        diskusi dan pertemuan para pendiri memutuskan untuk
                        memperbaharui Come menjadi Kakhi Indonesia. Kakhi
                        Indonesia didirikan untuk memenuhi peran unik - yaitu
                        membangun kesadaran bahwa konservasi sumber daya alam
                        dan penyelamatan lingkungan adalah penyelamatan
                        kehidupan serta membentuk karakter manusia yang
                        menjunjung tinggi keadilan fungsi ekologis dan fungsi
                        ekonomis dalam memenuhi kebutuhan hidup manusia.
                        Strategi operasional dan rencana aksi disusun
                        berdasarkan konsultasi dengan berbagai pihak dan
                        memastikan bahwa strategi terintegrasi sepenuhnya dengan
                        yang ditetapkan dalam MoU, dan Strategi dan Rencana Aksi
                        Konservasi Nasional. Kakhi Indonesia berkeinginan
                        membangun komitmen jangka panjang penduduk desa setempat
                        dalam melestarikan dan memelihara lingkungannya. Kakhi
                        Indonesia sebagai bagian dari pemangku kepentingan lokal
                        hanya memfasilitasi proses implementasi. Perpaduan
                        peningkatan taraf hidup, perlindungan hutan dan
                        rehabilitasi lingkungan secara kultural terkait dengan
                        nilai-nilai keagungan, martabat, kearifan dan kehandalan
                        masyarakat lokal. Semua kegiatan di lapangan akan
                        mengintegrasikan, sejauh mungkin dan sesuai, kapasitas
                        masyarakat dan pemerintah lokal ke dalam konservasi
                        keanekaragaman hayati yang relevan atau ke dalam
                        rencana, program dan kebijakan lintas sektor. Seiring
                        dengan kemajuan Kakhi Indonesia dalam
                        mengimplementasikan strategi ini, setiap upaya akan
                        dilakukan untuk memperkuat kapasitasnya dalam
                        melaksanakan program dan proyek implementasi lapangan
                        yang efektif untuk tujuan mencapai manfaat nyata bagi
                        konservasi lingkungan dan masyarakat lokal dalam
                        kerangka pengelolaan kolaboratif dengan calon mitra.
                        Terakhir, strategi operasional dan rencana tindakan akan
                        ditinjau, direvisi dan diperbarui dengan rekomendasi
                        mitra ketika diperlukan.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 py-10 border-t border-blueGray-200 text-justify">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <h3 className="text-2xl font-semibold leading-normal text-blueGray-700">
                        Susunan Pengurus
                      </h3>
                      <p className=" font-bold text-lg leading-relaxed text-blueGray-700">
                      A. Badan Pembina
                      </p>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      Ketua: 
                      </p>
                      <span className="ml-3 font-bold">DR. Ir Wiratno. MSc</span>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-blueGray-700">
                      Anggota: 
                      </p>
                      <div className="flex flex-col">

                      <span className="ml-3 font-bold">Chandra Sembiring</span>
                      <span className="ml-3 font-bold">Antonius P.Y Djogo</span>
                      <span className="ml-3 font-bold">Oding Affandi, S.Hut</span>

                      </div>
                      <p className=" mt-10 font-bold text-lg leading-relaxed text-blueGray-700">
                      B. Badan Pengurus
                      </p>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      Ketua: 
                      </p>
                      <span className="ml-3 font-bold">Ida Marni</span>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-blueGray-700">
                      Sekretaris: 
                      </p>
                      <span className="ml-3 font-bold">Irian Nijar</span>
                      <p className="mb-4 mt-2 text-lg leading-relaxed text-blueGray-700">
                      Bendahara: 
                      </p>
                      <span className="ml-3 font-bold">Linggom Sari Hutabarat</span>
                      
                      <p className=" mt-10 font-bold text-lg leading-relaxed text-blueGray-700">
                      B. Badan Pengawas
                      </p>
                      <span className="ml-3 font-bold">                    Ratna Hendratmoko</span>

                    </div>
                  </div>
                </div>

                <div className="mt-10 py-10 border-t border-blueGray-200 text-justify">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <h3 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                        Fokus Kegiatan
                      </h3>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        Kakhi Indonesia berinisiatif mengambil peran untuk
                        berkonsentrasi pada kegiatan konservasi dan pemberdayaan
                        masyarakat pada kawasan ekosistem hutan dan ekosistem
                        pantai, beberapa fokus kegiatan yang dilakukan antara
                        lain:
                      </p>
                      <ul>
                        <li>
                          1) Dukungan pengamanan kawasan konservasi, kegiatan
                          berupa pelatihan smart patrol kepada masyarakat lokal,
                          melakukan patroli berkoordinasi dengan
                          multistakeholder khususnya Gakkum
                        </li>
                        <li>2) Dukungan restorasi dan pengkayaan tanaman</li>
                        <li>
                          3) Dukungan pemberdayaan masyarakat lokal melalui
                          peningkatan kapasitas seperti edukasi, pelatihan dan
                          studi banding
                        </li>
                        <li>4) Dukungan terhadap pengembangan habitat alam</li>
                        <li>
                          5) Dukungan peningkatan ekonomi berbasis ekowisata
                        </li>
                        <li>6) Dukungan peningkatan sumber daya manusia;</li>
                        <li>
                          7) Dukungan penanganan konflik satwa liar dan manusia;
                        </li>
                        <li>8) Dukungan sosialisasi dan publikasi</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-10 py-10 border-t border-blueGray-200 text-justify">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <h3 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                        Visi dan Misi
                      </h3>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        Konservasi Keanekaragaman Hayati Indonesia (Kakhi
                        Indonesia) didirikan oleh sekelompok orang yang memiliki
                        kepedulian terhadap pemulihan hutan dan ekosistem yang
                        terdegradasi mencakup wilayah pesisir maupun hutan
                        dataran rendah serta memfasilitasi peningkatan kapasitas
                        masyarakat lokal. Kakhi Indonesia bertujuan untuk
                        memobilisasi pengalaman kami dalam hal konservasi,
                        pemerintahan, bisnis dan hubungan masyarakat untuk
                        memberikan dukungan dan mengkoordinasikan tindakan untuk
                        konservasi . Misi Kakhi Indonesia adalah untuk merawat
                        habitat / lingkungan hutan dan masyarakat lokal yang
                        tinggal bersama di dalam wilayah program. Kakhi
                        Indonesia akan berupaya membangun komunitas
                        konservasionis yang bersemangat yang memiliki visi
                        konservasi yang sama dan budaya kerja sama, inovasi dan
                        profesionalisme, di mana warga negara Indonesia
                        memainkan peran utama. Kakhi Indonesia akan mengejar
                        visi ini melalui kombinasi advokasi, kampanye media, dan
                        proyek lapangan.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 py-10 border-t border-blueGray-200 text-justify">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <h3 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                        Tujuan strategis
                      </h3>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        Mengembangkan kegiatan lapangan tentang kampanye
                        perlindungan hutan, program penyadaran, reboisasi dan
                        rehabilitasi pesisir, pendidikan konservasi dan
                        peningkatan pendapatan bagi masyarakat lokal.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 py-10 border-t border-blueGray-200 text-justify">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <h3 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                        Program strategis
                      </h3>
                      <ul className="list-none mt-6">
                        <h4 className="text-blueGray-500">
                          Mengembangkan kapasitas Kakhi Indonesia dalam
                          mengelola organisasi dan kemitraan.
                        </h4>
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500  mr-3">
                                <i className="fas fa-circle"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-blueGray-500">
                                Mengelola kegiatan inti untuk mendukung proyek
                                dan program yang mencakup pembentukan dan
                                pemeliharaan sekretariat Kakhi Indonesia.
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
                                Mengembangkan kemitraan dan jaringan dengan
                                pemerintah, donor, LSM, dan bisnis swasta.
                              </h4>
                            </div>
                          </div>
                        </li>
                      </ul>

                      <ul className="list-none mt-6">
                        <h4 className="text-blueGray-500">
                          Bekerja sama dengan instansi pemerintah daerah dan LSM
                          dalam melaksanakan kampanye perlindungan hutan,
                          reboisasi dan rehabilitasi lingkungan.
                        </h4>
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500  mr-3">
                                <i className="fas fa-circle"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-blueGray-500">
                                Memfasilitasi peningkatan kapasitas mitra lokal
                                melalui lokakarya, pertemuan, pelatihan dan
                                program studi banding.
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
                                Bekerja sama dengan mitra untuk berpartisipasi
                                dalam kampanye perlindungan hutan, reboisasi dan
                                program rehabilitasi pesisir.
                              </h4>
                            </div>
                          </div>
                        </li>
                      </ul>

                      <ul className="list-none mt-6">
                        <h4 className="text-blueGray-500">
                          Bekerja sama dengan instansi pemerintah daerah dan LSM
                          dalam mengembangkan, mengolah, dan memasarkan produk
                          tradisional lokal dan produk ramah lingkungan.
                        </h4>
                        <li className="py-2">
                          <div className="flex items-center">
                            <div>
                              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500  mr-3">
                                <i className="fas fa-circle"></i>
                              </span>
                            </div>
                            <div>
                              <h4 className="text-blueGray-500">
                                Memfasilitasi peningkatan kapasitas masyarakat
                                lokal melalui pertemuan, pelatihan terintegrasi
                                dan program pertukaran tentang manajemen usaha
                                kecil dan keterampilan teknis proses produksi.
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
                                Melakukan survey pasar terhadap produk-produk
                                yang akan dihasilkan oleh masyarakat lokal.
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
                                Mengembangkan jaringan bisnis lokal, nasional
                                dan internasional untuk mengangkat posisi
                                produsen masyarakat lokal, terutama dengan
                                pengumpul dan eksportir untuk produk ekspor
                                potensial mereka.
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
                                Bekerja sama dengan pemerintah, LSM
                                Internasional dan jaringan bisnis Kakhi
                                Indonesia untuk melakukan promosi seni,
                                lingkungan dan perdagangan untuk berbagai produk
                                ramah lingkungan.
                              </h4>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-10 py-10 border-t border-blueGray-200 text-justify">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <h3 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                        Prinsip Kerja
                      </h3>
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
                                Memberikan penanganan prioritas yang sangat
                                dibutuhkan di lapangan, di mana terdapat
                                kekurangan dukungan dari organisasi lain.
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
                                Menghormati nilai-nilai budaya tradisional dan
                                lokal, dan tetap netral secara politik.
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
                                Bekerja melalui kemitraan dengan individu dan
                                lembaga di tingkat lokal, nasional dan
                                internasional.
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
                                Bekerja sama dengan pemangku kepentingan lokal
                                seperti pemerintah, LSM dan masyarakat lokal,
                                dan membangun kapasitas lokal jika diperlukan.
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
                                Memantau dan mengukur keluaran dari setiap
                                proyek dan kegiatan dan menyesuaikan
                                implementasinya untuk mengoptimalkan hasil.
                              </h4>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-10 py-10 border-t border-blueGray-200 text-justify">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <h3 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                        Kegiatan Yang Sudah Dilakukan
                      </h3>
                      <div>
                        <table className="items-center w-full bg-transparent border-collapse overflow-x-auto block ">
                          <thead>
                            <tr>
                            <th
                                className={
                                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-left " +
                                  "bg-blueGray-50 text-blueGray-500 border-blueGray-100"

                                }
                              >
                                Periode
                              </th>
                              <th
                                className={
                                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-left " +
                                  "bg-blueGray-50 text-blueGray-500 border-blueGray-100"

                                }
                              >
                                Program
                              </th>
                              <th
                                className={
                                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-left " +
                                  "bg-blueGray-50 text-blueGray-500 border-blueGray-100"

                                }
                              >
                                Donor dan Partner
                              </th>
                              <th
                                className={
                                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-left " +
                                  "bg-blueGray-50 text-blueGray-500 border-blueGray-100"

                                }
                              >
                                Hasil
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                          <ActivityTable/>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 py-10 border-t border-blueGray-200 text-justify">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <h3 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                        Strategi Penggalangan Dana
                      </h3>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      Kami menyadari bahwa penggalangan dana butuh kerja keras dan sumber pendanaan seringkali sangat kompetitif. Penting untuk menemukan peluang pendanaan baru setiap saat, terus berkomunikasi dengan orang-orang yang tepat tentang apa yang kami coba lakukan dalam konservasi di Indonesia, menunjukkan bagaimana kami dapat mencapai target. Prinsip penggalangan dana kami adalah bahwa hubungan Kakhi Indonesia dan donor merupakan kemitraan. Seperti semua kemitraan yang baik, itu perlu didasarkan pada rasa saling menghormati, saling percaya, dan saling menguntungkan.
Strategi penggalangan dana Kakhi Indonesia adalah mengumpulkan dana dari individu dan lembaga pendanaan untuk mendukung proyek tertentu. Untuk memilih pendukung dana, penting untuk menjual ide proyek yang disesuaikan dengan berbagai alasan dan motivasi di balik sumber pendanaan selain itu penting juga untuk menciptakan kesan yang baik bahwa Kakhi Indonesia kompeten, memiliki kemampuan dan dedikasi untuk melaksanakan program secara tepat dan efisien.

                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-justify">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <h3 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                        Susunan Pengurus
                      </h3>
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                     
                      </p>
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
