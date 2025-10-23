import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

export default function Profile() {
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .required("اسم المستخدم مطلوب")
        .min(3, "يجب أن يكون الاسم أطول من 3 أحرف"),
      email: Yup.string()
        .required("البريد الإلكتروني مطلوب")
        .matches(
          /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}$/,
          "يجب إدخال بريد إلكتروني صالح"
        ),
      phone: Yup.string()
        .required("رقم الهاتف مطلوب")
        .matches(
          /^(\+9665|9665|05)\d{8}$/,
          "رقم الهاتف السعودي غير صالح، يجب أن يبدأ بـ +9665 أو 05 ويحتوي على 9 أرقام بعد ذلك"
        ),
    }),
    onSubmit: (values, { resetForm }) => {
      toast.success("تم حفظ البيانات بنجاح!", {
        position: "top-center",
      });
      console.log("البيانات المرسلة:", values);
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
        {/* Username */}
        <div>
          <label htmlFor="userName" className="block mb-2 text-sm">
            اسم المستخدم
          </label>
          <input
            id="userName"
            name="userName"
            type="text"
            placeholder="admin@reef.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
            className={`w-full p-3 bg-[#0b1622] rounded-md border 
              ${
                formik.touched.userName && formik.errors.userName
                  ? "border-red-500"
                  : "border-gray-700"
              }
              focus:outline-none focus:ring-2 focus:ring-green-600 
              text-gray-200 placeholder-gray-500`}
          />
          {formik.touched.userName && formik.errors.userName && (
            <p className="text-red-500 text-sm mt-2">
              {formik.errors.userName}
            </p>
          )}
        </div>

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

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block mb-2 text-sm">
            رقم الهاتف (السعودي)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+966501234567"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className={`w-full p-3 bg-[#0b1622] rounded-md border 
              ${
                formik.touched.phone && formik.errors.phone
                  ? "border-red-500"
                  : "border-gray-700"
              }
              focus:outline-none focus:ring-2 focus:ring-green-600 
              text-gray-200 placeholder-gray-500 text-right`}
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className="text-red-500 text-sm mt-2">{formik.errors.phone}</p>
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
