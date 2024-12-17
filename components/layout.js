import Head from 'next/head';
import Link from 'next/link';
export default function Layout({children, home}) {
    return(
        <div>
            <Head>
                <title>Seths Week 5 App</title>
               
            </Head>
            <header>
                <nav>
                    <a href="https://spiritualintelligencebook.com/"></a>
                </nav>
            </header>
            <main>
                {children}
            </main>
            {!home && (
                <Link href="/" className="btn btn-primary mt-3">
                    ← Back to home
                </Link>
                
            )
            
            }
            <footer>
               <p>Footer</p> 
            </footer>
        </div>
    );
}