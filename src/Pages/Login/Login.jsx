import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("البريد الإلكتروني مطلوب")
        .matches(
          /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}$/,
          "يجب إدخال بريد إلكتروني صالح"
        ),
      password: Yup.string().required("كلمة السر مطلوبة"),
    }),
    onSubmit: (values, { resetForm }) => {
      toast.success("تم تسجيل الدخول بنجاح!", {
        position: "top-center",
      });
      console.log("البيانات المرسلة:", values);
      resetForm();
    },
  });

  return (
    <div className="max-w-4xl mx-auto text-right bg-linear-to-tl from-[#0f2230] to-[#273b50] rounded-xl shadow-lg text-gray-200">
      {/* Header */}
      <div className="border-b border-gray-600 px-4 py-5 rounded-t-2xl">
        <h2 className="text-xl font-semibold">الملف الشخصي الأساسي</h2>
      </div>

      {/* Form */}
      <form onSubmit={formik.handleSubmit} className="space-y-6 p-6">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block mb-2 text-sm">
            البريد الإلكتروني
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="admin@reef.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`w-full p-3 bg-[#0b1622] rounded-md border 
              ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "border-gray-700"
              }
              focus:outline-none focus:ring-2 focus:ring-green-600 
              text-gray-200 placeholder-gray-500`}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm mt-2">{formik.errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block mb-2 text-sm">
            البريد الإلكتروني
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="*******"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={`w-full p-3 bg-[#0b1622] rounded-md border 
              ${
                formik.touched.password && formik.errors.password
                  ? "border-red-500"
                  : "border-gray-700"
              }
              focus:outline-none focus:ring-2 focus:ring-green-600 
              text-gray-200 placeholder-gray-500`}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-sm mt-2">
              {formik.errors.password}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-3 cursor-pointer 
            bg-linear-to-tl from-green-800 to-green-500 
            hover:from-green-700 hover:to-green-400 
            text-white font-semibold rounded-md 
            transition-all duration-300 shadow-md hover:shadow-lg"
        >
          حفظ
        </button>
      </form>
    </div>
  );
}
