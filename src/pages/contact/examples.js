import React from 'react'
import Link from 'gatsby-link'
import Layout from '../../components/Layout'

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <p>
                Upload you resume and we will get back to you soon!
              </p>
              <ul>
                <li>
                  <Link to="/contact/file-upload/">Upload Resume</Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
