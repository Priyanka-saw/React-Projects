const Hero = () => {
  return (
    <div className="main container flex justify-around">
      <div className="hero-content">
        <h1 className="hero-header text-7xl ">The Better we Deserve, The Better we Get</h1>
        <p className="hero-para">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
          perspiciatis eveniet, architecto deserunt a ipsa atque cumque odio,
          mollitia necessitatibus minima nam? Hic dolore sapiente ad nostrum,
          unde iste eum?
        </p>
        <div className="hero-btn">
          <button className="hero-btn-one bg-red-500">Shop Now</button>
          <button className="hero-btn-two">Category</button>
        </div>
      </div>
      <div className="hero-image flex items-center h-120 w-220">
        <img src="/src/assets/hero_image.png" alt="" />
      </div>
    </div>
  );
};
export default Hero;
