import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Eye, EyeOff, Shield, CheckCircle, Globe } from "lucide-react"
import SummaryApi from "../common"
import Context from "../context"
import { toast } from "sonner"
import { FaImage } from "react-icons/fa6"
import ImageCarousel from "../components/ImageCarousel"
import { useTheme } from "../context/theme-context"
import { useLanguage } from "../context/language-context"
import Header from "../components/Header"

const Login = () => {
  const navigate = useNavigate()
  const { fetchUserDetails } = useContext(Context)
  const { isDark } = useTheme()
  const { t, isRTL } = useLanguage()
  const [showPassword, setShowPassword] = useState(false)

  const [data, setData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const handleOnChange = (e) => {
    const { name, value, type, checked } = e.target
    setData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Formulario de login enviado")

    try {
      const dataResponse = await fetch(SummaryApi.login.url, {
        method: SummaryApi.login.method,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
          rememberMe: data.rememberMe,
        }),
      })

      const responseData = await dataResponse.json()

      if (responseData.success) {
        toast.success(responseData.message)
        localStorage.setItem("authToken", responseData.token)
        navigate("/home")
        fetchUserDetails()
      } else {
        toast.warning(responseData.message)
      }
    } catch (error) {
      console.error("Error en la solicitud de login:", error)
      toast.error("Hubo un error al intentar iniciar sesión. Por favor, inténtalo de nuevo.")
    }
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${isDark ? "bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800" : "bg-gray-50"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Header />

      <div className="min-h-[calc(100vh-80px)] flex justify-center">
        {/* Left Panel - Branding */}
        <div
          className={`hidden lg:flex lg:w-1/3 p-12 flex-col justify-between relative overflow-hidden transition-colors duration-200 ${
            isDark ? "bg-transparent" : "bg-transparent"
          }`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className={`absolute top-20 left-20 w-32 h-32 border rounded-full ${
                isDark ? "border-white/20" : "border-slate-300"
              }`}
            ></div>
            <div
              className={`absolute bottom-40 right-20 w-24 h-24 border rounded-full ${
                isDark ? "border-white/20" : "border-slate-300"
              }`}
            ></div>
            <div
              className={`absolute top-1/2 left-1/3 w-16 h-16 border rounded-full ${
                isDark ? "border-white/20" : "border-slate-300"
              }`}
            ></div>
          </div>

          {/* Logo */}
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-[#5985ff] rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span
                className={`text-2xl font-bold transition-colors duration-200 ${
                  isDark ? "text-white" : "text-[#5985ff]"
                }`}
              >
                Clausely
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="relative z-10 flex-1 flex flex-col">
            {/* Placeholder Image */}
            <ImageCarousel />

            <h1
              className={`text-4xl font-bold mt-8 mb-4 leading-tight transition-colors duration-200 ${
                isDark ? "text-white" : "text-neutral-900"
              }`}
            >
              {t("aiFirstLegal")}
              <br />
              <span className="text-[#5985ff]">{t("compliance")}</span>
            </h1>

            <p
              className={`text-lg mb-8 leading-relaxed transition-colors duration-200 ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              {t("automateClause")}
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-1 bg-green-500/20 text-green-400 px-2 py-2 rounded-full text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>{t("gdprReady")}</span>
              </div>
              <div className="flex items-center space-x-1 bg-blue-500/20 text-blue-400 px-2 py-2 rounded-full text-sm">
                <Shield className="w-4 h-4" />
                <span>{t("aiActCompliant")}</span>
              </div>
              <div className="flex items-center space-x-1 bg-purple-500/20 text-purple-400 px-2 py-2 rounded-full text-sm">
                <Globe className="w-4 h-4" />
                <span>{t("multiJurisdiction")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Login Form */}
        <div
          className={`w-full lg:w-1/3 flex items-center justify-center transition-colors duration-200 ${
            isDark ? "bg-transparent" : "bg-gray-50"
          }`}
        >
          <div
            className={`w-full max-w-xl p-10 shadow-lg rounded-xl transition-colors duration-200 ${
              isDark ? "bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800" : "bg-white"
            }`}
          >
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center justify-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span
                className={`text-2xl font-bold transition-colors duration-200 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Clausely
              </span>
            </div>

            {/* Form Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center space-x-6 mb-6">
                <button className="px-20 py-2 bg-[#5985ff] text-white rounded-lg font-medium">{t("login")}</button>
                <Link
                  to="/sign-up"
                  className={`px-20 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    isDark
                      ? "text-slate-300 bg-slate-700 hover:text-white"
                      : "text-slate-600 bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {t("signUp")}
                </Link>
              </div>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className={`block text-sm font-medium mb-2 transition-colors duration-200 ${
                    isDark ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  {t("emailAddress")}
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder={t("emailPlaceholder")}
                  value={data.email}
                  onChange={handleOnChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 ${
                    isDark
                      ? "bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                      : "bg-white border-slate-300 text-slate-900 placeholder-slate-500"
                  }`}
                  required
                />
              </div>

              <div>
                <label
                  className={`block text-sm font-medium mb-2 transition-colors duration-200 ${
                    isDark ? "text-slate-200" : "text-slate-700"
                  }`}
                >
                  {t("password")}
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder={t("passwordPlaceholder")}
                    value={data.password}
                    onChange={handleOnChange}
                    className={`w-full px-4 py-3 pr-12 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors duration-200 ${
                      isDark
                        ? "bg-slate-700 border-slate-600 text-white placeholder-slate-400"
                        : "bg-white border-slate-300 text-slate-900 placeholder-slate-500"
                    }`}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200 ${
                      isDark ? "text-slate-400 hover:text-slate-200" : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    checked={data.rememberMe}
                    onChange={handleOnChange}
                    className="w-4 h-4 text-blue-500 border-slate-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="rememberMe"
                    className={`ml-2 text-sm transition-colors duration-200 ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {t("rememberMe")}
                  </label>
                </div>
                <Link to="/forgot-password" className="text-sm text-blue-500 hover:text-blue-600 font-medium">
                  {t("forgotPassword")}
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-[#5985ff] hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Shield className="w-5 h-5" />
                <span>{t("loginSecurely")}</span>
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div
                    className={`w-full border-t transition-colors duration-200 ${
                      isDark ? "border-slate-600" : "border-slate-300"
                    }`}
                  ></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span
                    className={`px-2 transition-colors duration-200 ${
                      isDark ? "bg-slate-800 text-slate-400" : "bg-white text-slate-500"
                    }`}
                  >
                    {t("orContinueWith")}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className={`flex items-center justify-center px-4 py-3 border rounded-lg transition-colors duration-200 ${
                    isDark ? "border-slate-600 hover:bg-slate-700" : "border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isDark ? "text-slate-200" : "text-slate-700"
                    }`}
                  >
                    {t("google")}
                  </span>
                </button>

                <button
                  type="button"
                  className={`flex items-center justify-center px-4 py-3 border rounded-lg transition-colors duration-200 ${
                    isDark ? "border-slate-600 hover:bg-slate-700" : "border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <svg
                    className={`w-5 h-5 mr-2 transition-colors duration-200 ${
                      isDark ? "text-slate-200" : "text-slate-700"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isDark ? "text-slate-200" : "text-slate-700"
                    }`}
                  >
                    {t("github")}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login