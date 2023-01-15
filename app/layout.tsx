import MainContainer from "../components/MainContainer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
