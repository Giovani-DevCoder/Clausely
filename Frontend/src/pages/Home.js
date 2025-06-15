import { useTheme } from "../context/theme-context"
import { useLanguage } from "../context/language-context"
import Header from "../components/Header"
import HeroSection from "../components/home/hero-section"
import FeatureSection from "../components/home/feature-section"
import StatsSection from "../components/home/stats-section"
import { Link } from "react-router-dom"

const Home = () => {
  const { isDark } = useTheme()
  const { t, isRTL } = useLanguage()

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${isDark ? "bg-slate-900" : "bg-gray-50"}`}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Call to Action */}
        <div className="text-center mt-20">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}>
            Ready to ensure compliance?
          </h2>
          <p className={`text-lg mb-8 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            Join thousands of developers who trust Clausely for their legal compliance needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-26">
            <Link to="/dashboard">
            <button className="bg-blue-500 hover:bg-blue-600 text-3xl text-white font-semibold py-8 px-20 rounded-xl transition-colors duration-200">
              Dashboard
            </button>
            </Link>
            <Link to="/projects">
            <button
              className={`font-semibold text-2xl py-4 px-14 rounded-xl transition-colors duration-200 ${
                isDark ? "text-slate-300 hover:text-white" : "text-slate-700 hover:text-slate-900"
              }`}
            >
              Projects
            </button>
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <HeroSection />

        {/* Feature Section */}
        <FeatureSection />

        {/* Stats Section */}
        <div className="mt-20">
          <StatsSection />
        </div>

      </main>
    </div>
  )
}

export default Home
