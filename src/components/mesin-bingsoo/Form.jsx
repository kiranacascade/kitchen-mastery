import { AiOutlineWhatsApp } from "react-icons/ai";
import { ClockIcon, EnvelopeOpenIcon } from "@heroicons/react/24/outline";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getDatabase, ref, set, serverTimestamp } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import firebaseApp from "../../../services/firebase";
import toast, { Toaster } from "react-hot-toast";

export default function Form() {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().min(3, "Nama lengkap harus terdiri dari minimal 3 karakter").required("Nama lengkap harus diisi"),
    email: Yup.string().email("Alamat email tidak valid").required("Alamat email harus diisi"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10,13}$/, "Nomor telepon tidak valid")
      .required("Nomor Telepon harus diisi"),
    message: Yup.string().required("Pesan Anda harus diisi").max(400, "Pesan maksimal terdiri dari 400 karakter."),
  });

  async function writeUserData(userId, fullName, email, phoneNumber, message, resetForm) {
    const db = getDatabase(firebaseApp);
    const userRef = ref(db, "contacts/" + userId);

    try {
      await set(userRef, {
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        message: message,
        timestamp: serverTimestamp(),
      });
      toast.success("Pesan berhasil terkirim!");
      resetForm();
    } catch (error) {
      toast.error("Terjadi kesalahan. Mohon kirim ulang pesan Anda!");
    }
  }

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      const userId = uuidv4();
      writeUserData(userId, values.fullName, values.email, values.phoneNumber, values.message, resetForm);
    },
  });

  return (
    <div>
      {/* Contact */}
      <section className="relative bg-white lg:mb-32" aria-labelledby="join-heading">
        <div className="absolute inset-x-0 hidden h-1/2 bg-blue-gray-50 lg:block" aria-hidden="true" />
        <div className="mx-auto max-w-7xl bg-red-700 lg:bg-transparent lg:px-8">
          <div className="lg:grid lg:grid-cols-12">
            {/* FORM */}
            <div className="relative bg-neutral-800 lg:col-span-10 lg:col-start-1 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl py-12">
              <div className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block" aria-hidden="true">
                <svg className="absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0" width={404} height={384} fill="none" viewBox="0 0 404 384" aria-hidden="true">
                  <defs>
                    <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                      <rect x={0} y={0} width={4} height={4} className="text-neutral-700" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                </svg>
                <svg className="absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2" width={404} height={384} fill="none" viewBox="0 0 404 384" aria-hidden="true">
                  <defs>
                    <pattern id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                      <rect x={0} y={0} width={4} height={4} className="text-red-500" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
                </svg>
              </div>
              <div className="relative mx-auto max-w-md space-y-6 py-12 px-6 sm:max-w-3xl sm:py-16 lg:col-span-6 lg:col-start-2 lg:max-w-none lg:w-full lg:p-0">
                {/* <h2 className="text-4xl font-bold tracking-tight text-red-500" id="join-heading">
                  Contact
                </h2> */}
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-red-500 sm:text-4xl">Ingin Konsultasi?</h2>
                  <p className="mt-2 text-lg leading-8 text-neutral-300">Isi Form untuk terhubung dengan kami, tim kami akan langsung menghubungi Anda dan membantu Anda!</p>
                </div>
                <form onSubmit={formik.handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                  <div className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <div className="mt-2.5">
                        <input
                          type="text"
                          name="fullName"
                          id="fullName"
                          placeholder="Nama Lengkap"
                          autoComplete="given-name"
                          className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 ${
                            formik.errors.fullName && formik.touched.fullName ? "border-red-500" : ""
                          }`}
                          {...formik.getFieldProps("fullName")}
                        />
                        {formik.errors.firstName && formik.touched.firstName && <div className="text-red-500 text-sm mt-1">{formik.errors.firstName}</div>}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <div className="mt-2.5">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Alamat Email"
                          autoComplete="email"
                          className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 ${
                            formik.errors.email && formik.touched.email ? "ring-red-500" : ""
                          }`}
                          {...formik.getFieldProps("email")}
                        />
                        {formik.errors.email && formik.touched.email && <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <div className="relative mt-2.5">
                        <input
                          type="tel"
                          name="phoneNumber"
                          id="phoneNumber"
                          placeholder="Nomor Telepon"
                          autoComplete="tel"
                          className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 ${
                            formik.errors.phoneNumber && formik.touched.phoneNumber ? "border-red-500" : ""
                          }`}
                          {...formik.getFieldProps("phoneNumber")}
                        />
                        {formik.errors.phoneNumber && formik.touched.phoneNumber && <div className="text-red-500 text-sm mt-1">{formik.errors.phoneNumber}</div>}
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <div className="mt-2.5">
                        <textarea
                          name="message"
                          id="message"
                          rows={3}
                          placeholder="Pesan Anda"
                          className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6 ${
                            formik.errors.message && formik.touched.message ? "border-red-500" : ""
                          }`}
                          {...formik.getFieldProps("message")}
                        />
                        {formik.errors.message && formik.touched.message && <div className="text-red-500 text-sm mt-1">{formik.errors.message}</div>}
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <button
                      type="submit"
                      className="block w-full rounded-md bg-red-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                      Kirim Pesan
                    </button>
                    <Toaster />
                  </div>
                </form>
              </div>
            </div>

            {/* GAMBAR */}
            <div className="relative z-10 lg:col-span-4 lg:col-start-9 lg:row-start-1 lg:bg-transparent lg:py-16 justify-center items-center lg:my-auto">
              <div className="absolute inset-x-0 h-1/2 bg-blue-gray-50 lg:hidden" aria-hidden="true" />
              <div className="mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:p-0">
                {/* <div className="flex flex-row aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-3 lg:aspect-h-4 bg-red-700"> */}
                <div className="bg-red-700 md:px-8 py-12 md:py-12 rounded-lg">
                  <h3 className="text-3xl font-bold text-white mb-2">Hubungi Kami</h3>
                  <p className="text-base text-neutral-200 mb-8">Anda bisa langsung menghubungi kami pada:</p>
                  <div className="flex items-center space-x-3 mb-3">
                    <ClockIcon className="h-6 w-6 text-white" />
                    <p className="text-base font-semibold text-white">Senin - Jumat (08.00 - 16.00)</p>
                  </div>
                  <div className="flex items-center space-x-3 mb-3">
                    <EnvelopeOpenIcon className="h-6 w-6 text-white" />
                    <a className="text-base font-semibold text-white">kitchenmastery.id@gmail.com</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <AiOutlineWhatsApp className="h-6 w-6 text-white" />
                    <a href="https://api.whatsapp.com/send?phone=6285600570000" className="text-base font-semibold text-white">
                      0856-0057-0000
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
