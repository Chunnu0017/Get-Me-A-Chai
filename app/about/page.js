import React from 'react'
function About() {
  return (
    <>
      <div className="h-screen overflow-hidden flex flex-col text-white py-10">
        <div className="container mx-auto px-6 flex-grow">
          <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-10">
            Our platform is dedicated to empowering developers by providing a unique space for them to fund their innovative projects.
            We believe in the power of community and collaboration, and our mission is to make sure every developer has the resources
            they need to bring their ideas to life.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p>
                We aim to bridge the gap between developers and funding by creating a platform that connects them with people who believe
                in their potential. Whether you're a seasoned developer or just starting out, our platform is designed to help you find
                the support you need to succeed.
              </p>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold">Why Crowdfunding?</h2>
              <p>
                Crowdfunding allows developers to secure the financial backing they need without relying on traditional methods like
                loans or venture capital. It's a way to build a community around your project and gain the support of people who are
                genuinely interested in seeing you succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About

// for metadata 
 export const metadata = {
  title: "About - Get Me A Chai"
 }