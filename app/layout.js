import '../assets/globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['100', '300', '400', '700'],
  display: "swap",
});

export const metadata = {
  title: "Sendr",
  description: "A peer-to-peer delivery app connecting senders with travelers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
