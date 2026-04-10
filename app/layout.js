import "./globals.css";
import { Manrope, Playfair_Display } from "next/font/google";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { AppProvider } from "../components/AppContext";
import { RouteTransition } from "../components/RouteTransition";

export const metadata = {
  title: "Virtual Thread - Virtual Fashion Try-On",
  description:
    "Virtual Thread is a virtual fashion try-on platform with 3D avatars and AR-like interaction."
};

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"]
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${playfair.variable}`}>
      <body>
        <AppProvider>
          <div id="app-shell" className="bg-onyx text-snow min-h-screen">
            <RouteTransition />
            <Navigation />
            {children}
            <Footer />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
