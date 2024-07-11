import "../Styles/contact.css";
import NavBar from "./NavBar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from 'sweetalert2'
import Footer from "./Footer";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      text: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .required("Required")
        .min(3, "Firstname must be at least 3 characters"),
      lastname: Yup.string()
        .required("Required")
        .min(3, "Lastname must be at least 3 characters"),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      text: Yup.string()
        .required("Required")
        .min(5, "Text must be at least 5 characters"),
    }),
    onSubmit: (values) => {
      Swal.fire({
        title: "Good job!",
        html: `<p>Name: ${values.firstname} ${values.lastname}</p>
               <p>Email: ${values.email}</p>`,
        icon: "success"
      });
      formik.resetForm();
    },
  });

  return (
    <div className="contactParent_div bg-gray-900">
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="max-w-5xl w-full p-8 rounded">
          <h1 className="lg:text-7xl md:text-6xl text-5xl font-bold mb-20 mt-20 text-center text-white">
            Contact
          </h1>
          <div className="flex flex-col md:flex-row md:justify-between lg:items-center md:items-center mb-8">
            <div className="flex flex-col items-start md:items-start md:text-left space-y-4">
              <h2 className="text-5xl font-bold text-white">Get in touch</h2>
              <p className="text-[0.9rem] text-[#D8C6B8]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper.
              </p>
              <div className="space-y-2 text-white">
                <div className="flex items-center space-x-2">
                  <i className="fas fa-phone-alt"></i>
                  <span>929-242-6868</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-envelope"></i>
                  <span>contact@info.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>123 Fifth Avenue, New York, NY 10160</span>
                </div>
              </div>
              <div className="flex justify-center items-center mt-8 space-x-4">
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 border-2 border-white text-white rounded-full"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 border-2 border-white text-white rounded-full"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-10 h-10 border-2 border-white text-white rounded-full"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 mt-8 md:mt-0">
              <form onSubmit={formik.handleSubmit} className="space-y-4 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
                  <div className="flex flex-col w-full">
                    <input
                      id="firstname"
                      name="firstname"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstname}
                      placeholder="First Name"
                      className="p-4 border rounded-md w-full"
                    />
                    {formik.touched.firstname && formik.errors.firstname ? (
                      <div className="text-[#CAB79F] mt-1">{formik.errors.firstname}</div>
                    ) : null}
                  </div>
                  <div className="flex flex-col w-full">
                    <input
                      id="lastname"
                      name="lastname"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastname}
                      placeholder="Last Name"
                      className="p-4 border rounded-md w-full"
                    />
                    {formik.touched.lastname && formik.errors.lastname ? (
                      <div className="text-[#CAB79F] mt-1">{formik.errors.lastname}</div>
                    ) : null}
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    placeholder="Email Address"
                    className="w-full p-4 border rounded-md"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-[#CAB79F] mt-1">{formik.errors.email}</div>
                  ) : null}
                </div>
                <div className="flex flex-col w-full">
                  <textarea
                    id="text"
                    name="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.text}
                    placeholder="Your Message"
                    className="w-full p-4 border rounded-md h-32"
                  ></textarea>
                  {formik.touched.text && formik.errors.text ? (
                    <div className="text-[#CAB79F] mt-1">{formik.errors.text}</div>
                  ) : null}
                </div>
                <button
                  type="submit"
                  className="w-40 p-4 bg-white text-black border rounded-md hover:bg-gray-200 mx-auto block"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
       <Footer/>
    </div>
  );
};

export default Contact;
