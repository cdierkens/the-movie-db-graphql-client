import Link from 'next/link'

const Header = () => (
    <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/movies">
          <a>Movies</a>
        </Link>
        
        <style jsx>{`
            a {
                padding: 15px;
                display: inline-block;
            }

            div {
                text-align:right;
            }
        `}</style>
    </div>
)

export default Header