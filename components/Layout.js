const Layout = (props) => (
  <div>
    {props.children}
    <style jsx>{`
        div {
            margin: 20px;
            padding: 20px;
            border: 1px solid #DDD;
        }
    `}</style>
  </div>
)

export default Layout