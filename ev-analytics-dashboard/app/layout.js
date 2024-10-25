import { Nunito } from 'next/font/google';
import "./globals.css";
import MainContextWrapper from '@/components/ContextApi/MainContext';

// Adding Nunito font to the App
const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: "Utkarsh-Agarwal-Assessment",
  description: "Utkarsh Agarwal EV Analytics Dashboard",
};

export default function RootLayout({ children }) {
  // Root Layout for basic styling
  return (
    <html lang="en">
      <body
        className={`${nunito.className} antialiased bg-[#EFF4F4]`}
      >
        <MainContextWrapper>
          {children}
        </MainContextWrapper>
      </body>
    </html>
  );
}
