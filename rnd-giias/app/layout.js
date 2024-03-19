import "./globals.css";
import "yet-another-react-lightbox/styles.css";
import Script from "next/script";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        {/* <Script
          src="https://aframe.io/releases/1.5.0/aframe.min.js"
        /> */}
        <Script
          src="https://cdn.jsdelivr.net/npm/mind-ar@1.2.5/dist/mindar-image-aframe.prod.js" 
        />
      </body>
    </html>
  );
}
