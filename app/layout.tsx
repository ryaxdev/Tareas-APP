/* eslint-disable @next/next/no-head-element */
import Link from 'next/link';
/* import './globals.css'; */
import '@picocss/pico'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
            <main class="container" >
            <nav>
                <ul>
                    <li><strong>Tareas 3A</strong></li>
                </ul>
                <ul>
                    <li><Link href="/" role="button">Inicio</Link></li>
                    <li><Link href="/notes" role="button">Tareas</Link></li>
                </ul>
            </nav>
                {children}
            </main>
      </body>
    </html>
  );
}