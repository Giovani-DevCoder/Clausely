'use client'

import { Shield, CheckCircle, Globe } from "lucide-react"
import { useTheme } from "../context/theme-context"
import { useLanguage } from "../context/language-context"
import { Carousel } from "./Carousel"

const BrandingPanel = () => {
  const { isDark } = useTheme()
  const { t } = useLanguage()

  return (
    <div
      className={`w-full lg:w-1/3 p-12 flex flex-col justify-between relative overflow-hidden transition-colors duration-200 ${
        isDark ? "bg-transparent" : "bg-transparent"
      }`}>
      <div className="absolute inset-0 opacity-10">
        <div
          className={`absolute top-20 left-20 w-32 h-32 border rounded-full ${
            isDark ? "border-white/20" : "border-slate-300"
          }`}>
        </div>
        <div
          className={`absolute bottom-40 right-20 w-24 h-24 border rounded-full ${
            isDark ? "border-white/20" : "border-slate-300"
          }`}>
        </div>
        <div
          className={`absolute top-1/2 left-1/3 w-16 h-16 border rounded-full ${
            isDark ? "border-white/20" : "border-slate-300"
          }`}>
        </div>
      </div>

      <div className="relative z-10">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-10 h-10 bg-[#5985ff] rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span
            className={`text-2xl font-bold transition-colors duration-200 ${
              isDark ? "text-white" : "text-[#5985ff]"
            }`}>
            Clausely
          </span>
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col">
        <Carousel images={[
          "/images/carousel/image1.jpg",
          "/images/carousel/image2.jpg",
          "/images/carousel/image3.jpg",
        ]} />

        <h1
          className={`text-4xl font-bold mb-4 leading-tight transition-colors duration-200 ${
            isDark ? "text-white" : "text-neutral-900"
          }`}>
          {t("aiFirstLegal")}
          <br />
          <span className="text-[#5985ff]">{t("compliance")}</span>
        </h1>

        <p
          className={`text-lg mb-8 leading-relaxed transition-colors duration-200 ${
            isDark ? "text-slate-300" : "text-slate-700"
          }`}>
          {t("automateClause")}
        </p>

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
  )
}

export default BrandingPanel