import { Link } from 'react-router-dom';

const Public = () => {
  const content = (
      <section className="public">
          <header>
              <h1>Welcome to <span className="nowrap">Jorge.Go.Co. Repairs!</span></h1>
          </header>
          <main className="public__main">
              <p>Located in Some City, Jorge.Go.Co. Repairs  provides a trained staff ready to meet your tech repair needs.</p>
              <address className="public__addr">
                  Jorge.Go.Co. Repairs<br />
                  444 Some Drive<br />
                  Some City, OH 12345<br />
                  <a href="tel:+15555555555">(555) 555-5555</a>
              </address>
              <br />
              <p>Owner: Jorge González</p>
          </main>
          <footer>
              <Link to="/login">Employee Login</Link>
          </footer>
      </section>

  )
  return content
}
export default Public
