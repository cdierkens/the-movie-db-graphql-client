import Header from './Header'

const Layout = (props) => (
  <div className="layout">
    <Header />
    {props.children}
    <style jsx>{`
        .layout {
            margin: 20px;
            padding: 20px;
            border: 1px solid #DDD;
        }
    `}</style>
  </div>
)

export default Layout