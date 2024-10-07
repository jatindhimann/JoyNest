const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          Welcome to
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Joynest
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        At Joynest, we believe in creating spaces that feel like home. Our
        collection features a wide range of beautifully crafted furniture
        designed for comfort and style. Discover unique pieces that bring joy to
        your living spaces and elevate your home decor. Join us in making your
        house a joyful nest!
      </p>
    </>
  )
}
export default About
