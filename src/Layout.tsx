import { useEffect, useMemo, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Phone, Mail, MapPin,
  Facebook, Instagram, Linkedin, Twitter, ArrowUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/config/brand";

export default function Layout() {
  const location = useLocation();

  const overlayHeaderRoutes = useMemo(
    () => new Set(["/", "/about", "/services"]),
    []
  );

  const isOverlayHeader = overlayHeaderRoutes.has(location.pathname);

  const [isScrolled, setIsScrolled] = useState(() => window.scrollY > 20);
  const [showScrollTop, setShowScrollTop] = useState(() => window.scrollY > 400);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerSolid = isScrolled || !isOverlayHeader;

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 20);
      setShowScrollTop(y > 400);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className={`min-h-screen ${isOverlayHeader ? "bg-slate-950" : "bg-white"}`}>
      {/* Top Bar */}
      <div className="hidden lg:block bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${BRAND.phone}`}
              className="flex items-center gap-2 hover:text-orange-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {BRAND.phone}
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="flex items-center gap-2 hover:text-orange-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              {BRAND.email}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href={BRAND.socials.facebook} className="hover:text-orange-400 transition-colors"><Facebook className="w-4 h-4" /></a>
            <a href={BRAND.socials.instagram} className="hover:text-orange-400 transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href={BRAND.socials.linkedin} className="hover:text-orange-400 transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href={BRAND.socials.twitter} className="hover:text-orange-400 transition-colors"><Twitter className="w-4 h-4" /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300
          ${headerSolid ? "bg-white/95 backdrop-blur-md shadow-lg top-0" : "bg-transparent top-0 lg:top-8"}
        `}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">
                    {BRAND.logo.letter}
                </span>
                </div>

                <span className={`text-xl font-bold tracking-tight ${headerSolid ? "text-slate-900" : "text-white"}`}>
                {BRAND.logo.text.slice(0, 2)}
                <span className="text-orange-500">
                    {BRAND.logo.text.slice(2)}
                </span>
                </span>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {BRAND.navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors relative group ${
                      headerSolid ? "text-slate-700 hover:text-orange-500" : "text-white/90 hover:text-white"
                    }` + (isActive ? ` ${headerSolid ? "text-orange-500" : "text-white"}` : "")
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.name}
                      <span
                        className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}

              <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 ml-4">
                {BRAND.ctaLabel}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className={`lg:hidden p-2 rounded-lg ${headerSolid ? "text-slate-900" : "text-white"}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="px-6 py-6 space-y-4">
                {BRAND.navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block py-3 text-lg font-medium ${isActive ? "text-orange-500" : "text-slate-700"}`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}

                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-full h-12 mt-4">
                  Falar com a Lumora
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Conteúdo */}
      <main className={isOverlayHeader ? "" : "pt-20 lg:pt-28"}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="py-16 md:py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <NavLink to="/" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-orange-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{BRAND.logo.letter}</span>
                </div>

                <span className="text-xl font-bold tracking-tight">
                  {BRAND.logo.text.slice(0, 3)}
                  <span className="text-orange-500">{BRAND.logo.text.slice(3)}</span>
                </span>
              </NavLink>

              <p className="text-slate-400 leading-relaxed mb-6">
                {BRAND.shortAbout}
              </p>

              <div className="flex gap-3">
                <a href={BRAND.socials.facebook} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href={BRAND.socials.instagram} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={BRAND.socials.linkedin} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={BRAND.socials.twitter} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Páginas</h4>
              <ul className="space-y-3">
                {BRAND.navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        `text-slate-400 hover:text-orange-400 transition-colors ${
                          isActive ? "text-orange-400" : ""
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Serviços</h4>
              <ul className="space-y-3 text-slate-400">
                {BRAND.servicesLinks.map((s) => (
                  <li key={s.name}>
                    <a href={s.href} className="hover:text-orange-400 transition-colors">
                      {s.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contato</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span>
                    {BRAND.addressLine1}
                    <br />
                    {BRAND.addressLine2}
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <a href={`tel:${BRAND.phone}`} className="hover:text-orange-400 transition-colors">
                    {BRAND.phone}
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <a href={`mailto:${BRAND.email}`} className="hover:text-orange-400 transition-colors">
                    {BRAND.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© {new Date().getFullYear()} {BRAND.name}. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-orange-400 transition-colors">Privacidade</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg flex items-center justify-center z-50 transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
