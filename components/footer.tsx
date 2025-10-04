import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* packets Column */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Image src="/packets-logo.png" alt="packets Logo" width={32} height={32} className="w-8 h-8" />
              <h3 className="font-brand text-xl font-normal">packets</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-purple-400" />
                <span className="font-body text-purple-400 font-medium">Made In India</span>
              </div>
              {/* <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-300" />
                <span className="font-body text-gray-300">+91 98953 47638</span>
              </div> */}
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-300" />
                <span className="font-body text-gray-300">admin@packets.build</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-body text-xl font-bold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/" className="font-body block text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="#features" className="font-body block text-gray-300 hover:text-white transition-colors">
                Product
              </Link>
              <Link href="#use-cases" className="font-body block text-gray-300 hover:text-white transition-colors">
                Frameworks
              </Link>
              <Link href="#pricing" className="font-body block text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="#contact" className="font-body block text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-body text-xl font-bold mb-6">Legal</h3>
            <div className="space-y-3">
              <Link href="/privacy" className="font-body block text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="font-body block text-gray-300 hover:text-white transition-colors">
                Terms of Use
              </Link>
              <Link href="/cookies" className="font-body block text-gray-300 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link
                href="/data-protection"
                className="font-body block text-gray-300 hover:text-white transition-colors">
                Data Protection
              </Link>
            </div>
          </div>

          {/* Follow Us Column */}
          <div>
            <h3 className="font-body text-xl font-bold mb-6">Follow Us</h3>
            <div className="flex space-x-4 mb-8">
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/packets-build"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>


          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="font-body text-gray-400">© 2025 packets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
