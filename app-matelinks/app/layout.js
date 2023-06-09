import { Inter } from "next/font/google";
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MateLinks",
  description: "Generated by create next app",
};
//separar en archivo "router"
const Links = [
  {
    label: "Hello",
    route: "/hello",
  },{
    label: "page",
    route: "/getOut",
  },{
    label: "Home",
    route: "/",
  },
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <ul>
              {Links.map(({ label, route }) => (
                <li key={route}>
                  <Link href={route}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <div>{children}</div>
      </body>
    </html>
  );
}
