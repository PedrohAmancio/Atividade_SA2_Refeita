import NavBar from './NavBar'
const Layout = ({children}) => { // pq sem isso o codigo quebra vei ????
  return (
    <>
        <NavBar/>

        <div style={{paddingTop:'60px', margin:'0', paddingLeft:'0', paddingBottom:'0', paddingRight:'0'}}>
            {children}
        </div>
    </>
  )
}

export default Layout