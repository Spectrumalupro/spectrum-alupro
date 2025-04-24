import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-gray-100 p-6 shadow-md flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/pobrane.png" alt="Spectrum Alupro logo" className="h-12" />
          <h1 className="text-2xl font-bold">Spectrum Alupro</h1>
        </div>
        <nav className="space-x-6">
          <a href="#about">O nas</a>
          <a href="#offer">Oferta</a>
          <a href="#projects">Realizacje</a>
          <a href="#contact">Kontakt</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-100 text-center py-20">
        <h2 className="text-4xl font-bold mb-4">Nowoczesne rozwiązania aluminiowe</h2>
        <p className="text-lg">Produkcja i montaż okien, drzwi oraz fasad aluminiowych</p>
      </section>

      {/* About Section */}
      <section id="about" className="p-10 max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-4">O nas</h3>
        <p>
          Spectrum Alupro to polska firma specjalizująca się w produkcji i montażu wysokiej jakości konstrukcji aluminiowych. Działamy na rynku od wielu lat, dostarczając nowoczesne i trwałe rozwiązania dla klientów indywidualnych oraz firm.
        </p>
      </section>

      {/* Offer Section */}
      <section id="offer" className="bg-gray-50 p-10">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">Oferta</h3>
          <ul className="space-y-4">
            <li>✅ Produkcja okien aluminiowych</li>
            <li>✅ Drzwi aluminiowe</li>
            <li>✅ Fasady aluminiowe</li>
            <li>✅ Profesjonalny montaż</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-10 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6">Realizacje</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img src="/PDGQ0900.JPG" alt="Realizacja 1" className="rounded-xl shadow-md" />
          <img src="/PIQP4063.JPG" alt="Realizacja 2" className="rounded-xl shadow-md" />
          <img src="/placeholder.png" alt="Realizacja 3" className="rounded-xl shadow-md" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 p-10">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6">Kontakt</h3>
          <p className="mb-4 text-lg">
            📞 Telefon: <a href="tel:+48790389888" className="text-blue-600">+48 790 389 888</a><br />
            ✉️ Email: <a href="mailto:m.siatkowski4@gmail.com" className="text-blue-600">m.siatkowski4@gmail.com</a>
          </p>
          <form className="space-y-4">
            <Input placeholder="Imię i nazwisko" required />
            <Input placeholder="Adres e-mail" type="email" required />
            <Textarea placeholder="Wiadomość" rows={4} required />
            <Button type="submit">Wyślij wiadomość</Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-4">
        &copy; {new Date().getFullYear()} Spectrum Alupro. Wszelkie prawa zastrzeżone.
      </footer>
    </div>
  );
}
