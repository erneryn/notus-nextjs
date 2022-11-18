export const ActivityTable = () => {
  const dataTable = [
    {
      "Periode": "2008",
      "Program": "Green Campaign",
      "Donor dan Partner": "BBKSDA Sumut",
      "Hasil": "100 orang pelajar berpartisipasi dalam kegiatan ini"
    },
    {
      "Periode": "2009",
      "Program": "Conservation and environmental awareness campaign for students in Pakpak Barat Regency",
      "Donor dan Partner": "Pemerintah Kabupaten Pakpak Barat",
      "Hasil": "500 orang pelajar berpartisipasi dalam kegiatan ini"
    },
    {
      "Periode": "2009",
      "Program": "Restoration of Mangrove habitat in Langkat, Sumut",
      "Donor dan Partner": "Sipef, PT. Tolan Tiga",
      "Hasil": "5000 batang pohon mangrove tertanam"
    },
    {
      "Periode": "2010",
      "Program": "Green Festival 2010",
      "Donor dan Partner": "Unilever Foundation dan Fakultas Pertanian USU",
      "Hasil": "300 mahasiswa terlibat dalam kegiatan "
    },
    {
      "Periode": "2011",
      "Program": "Garbage campaign for a kindergarten students in Medan",
      "Donor dan Partner": "PTPN IV, PTPN II, PT. Djanur Sari",
      "Hasil": "500 kindergarten students berpartisipasi "
    },
    {
      "Periode": "2011",
      "Program": "Environmental volunteer training 2011",
      "Donor dan Partner": "Internal Kakhi Indonesia",
      "Hasil": "18 volunteer bergabung dlam kegiatan ini"
    },
    {
      "Periode": "2011",
      "Program": "Environmental Fair and Expo 2011",
      "Donor dan Partner": "Badan Lingkungan Hidup Propinsi Sumatera Utara",
      "Hasil": "1500 pelajar dan 23 private sector dan Pemerintah Daerah terlibat di kegiatan ini"
    },
    {
      "Periode": "2011",
      "Program": "Program of Conservation and Environment awareness for workers and communities across North Sumatera Plantation Sipef",
      "Donor dan Partner": "Sipef, PT. Tolan Tiga",
      "Hasil": "50 wanita terlibat aktif menjadi pelaku konservasi "
    },
    {
      "Periode": "2011",
      "Program": "Fundamentals training of environmental education for conservation in the scope of the company cadre 2011",
      "Donor dan Partner": "Sipef, PT. Tolan Tiga",
      "Hasil": "40 karyawan PT Sipef menjadi kader konservasi"
    },
    {
      "Periode": "2011",
      "Program": "Green school program supports the restoration of watershed areas Deli",
      "Donor dan Partner": "GAPKI",
      "Hasil": "150 pelajar dan 5 sekolah terlibat dalam kegiatan ini"
    },
    {
      "Periode": "2012",
      "Program": "Campaign clean and hygiene life and clean sanitation in the two regions emplasment",
      "Donor dan Partner": "Sipef, PT. Tolan Tiga",
      "Hasil": ""
    },
    {
      "Periode": "2013",
      "Program": "Establishment of 3 homee reading (rumah baca) in 3 villages in Kec. Sicanggang Langkat",
      "Donor dan Partner": "Internal Kakhi Indonesia",
      "Hasil": "Terbagunnya 3 rumah baca di Kec. Sicanggang"
    },
    {
      "Periode": "2014",
      "Program": "Mangrove rehabilitation program and the development of marine ecotourism un SM Karang Gading",
      "Donor dan Partner": "BBKSDA Sumut",
      "Hasil": "100 volunteer terlibat dalam aksi ini"
    },
    {
      "Periode": "2014",
      "Program": "City scale waste bank program",
      "Donor dan Partner": "BLH Kota Medan",
      "Hasil": "Terbentuk 55 bank sampah "
    },
    {
      "Periode": "2013-2014",
      "Program": "Medan green and clean program",
      "Donor dan Partner": "Unilever foundation",
      "Hasil": "Terbentuk 55 bank sampah di desa, 2  di sekolah, 1397 nasabah, 8 ton sampah dengan turnover Rp 6.000.000"
    },
    {
      "Periode": "2010-2015",
      "Program": "Program pendampingan, penggalian potensi mangrove dan pengamatan ikan Pesut di SM Langkat Timur Laut",
      "Donor dan Partner": "BBKSDA Sumut",
      "Hasil": "Melibatkan kader konservasi dan masyarakat lokal"
    }
  ]

  return (
    <>
    {
      dataTable.map((el) => 
      <tr className="border"> 
      <td className="border-t-0 px-6 align-middle border-l-0 text-xs whitespace-nowrap p-4">
        <span>{el.Periode}</span>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 text-xs  p-4">
        <span>{el.Program}</span>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 text-xs  p-4">
        <span>{el["Donor dan Partner"]}</span>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 text-xs  p-4">
        <span>{el.Hasil}</span>
      </td>
      
    </tr>
      )
    }
    </>
  );
}