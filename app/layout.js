import "./globals.css";

const SPACE_MONO = "https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap";

export const metadata = {
  title: "Aditya",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href={SPACE_MONO} rel="stylesheet" />
      </head>
      <body className="font-space antialiased">{children}</body>
    </html>
  );
}
