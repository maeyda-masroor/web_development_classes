import {Link} from 'react-router-dom';
function AboutUs(){
    return <div>
  <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
          <div className="about-text">
            <small className="small-text">Welcome to <span className="mobile-block">Puzzle Your Code</span></small>
            <h1 className="animated animated-text">
              <span className="mr-2">Hi there, I'm</span>
              <div className="animated-info">
                <span className="animated-item">Maeydah</span>
                <span className="animated-item">Web Designer</span>
                <span className="animated-item">Graphics</span>
              </div>
            </h1>
            <p>A self taught mern stack developer. looking for job remotely . i found my interest in programming since year 2013 when i did my bachelor's in computer science . After that i taught at DSU where i received 90% feedback from students to whom i taught web devand mobile application 
                i have experience as ios developer
                next i shift to react since it universal and now a very famous easy platform 
                in my free time i like to create different application related to real estates and other businesses using mern stack
                i am always eager to learn and striving to excel in the field of computer science
            .</p>
            <div className="custom-btn-group mt-4">
            <Link to = "https://github.com/maeyda-masroor">Github</Link>
            &nbsp;
            <Link to = "https://www.youtube.com/channel/UCu23maBTnXky2rsYzPJG6UQ">Youtube</Link>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-12 col-12">
          <div className="about-image svg">
            <img src="" className="img-fluid" alt="svg image" />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

}
export default AboutUs;