import React, { useState, useEffect } from "react";
import "./assets/style.css";
import "./assets/script";

//Components
import Navbar from "./Layouts/Navbar";
import Home from "./components/Home/Home";
import Features from "./components/Features/Features";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import Testimonial from "./components/Testimonial/Testimonial";
import Blog from "./components/Blog/Blog";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./Layouts/Footer";

//Elements
import Seperator from "./Elements/Seperator";
import BackToTop from "./Elements/BackToTop";
import Credits from "./Elements/Credits";
import Spinner from "./Elements/Spinner";

const App = () => {
  const [bodyClick, setBodyClick] = useState(false);
  const [onHireMeClick, setOnHireMeClick] = useState(true);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      // The entire page has loaded, so hide the loader.
      setIsLoading(false);
    };
  }, []);

  const hireMeClick = (childStateValue) => {
    setOnHireMeClick(childStateValue);
  };

  // className={`${!onHireMeClick ? "fixed " : null}`}
  // onClick={() => setBodyClick(true)}

  /////////////////////////////////////////////////////////   NAVBAR   //////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////   HOME   //////////////////////////////////////////////////////////

  const name = "Mubeen";
  const profession = "mern developer";
  const aboutMe = `I am a MERN stack developer skilled in building full-stack web
  applications. I specialize in MongoDB, Express.js, React, and
  Node.js to create robust and dynamic online experiences.`;
  const githubAccountLink = "https://github.com/Mubeen-jawed";
  const twitterAccountLink = "https://twitter.com/Mubeenjawed2";
  const linkedinAccountLink =
    "https://www.linkedin.com/in/mubeen-jawed-7b5062231";

  /////////////////////////////////////////////////////////   FEATURES   //////////////////////////////////////////////////////////

  // Just fill the content for number of boxes you want. e.g if you want 4 boxes fill up four boxes.

  const febox1Title = "Web Development";
  const febox1Description =
    "I am a proficient web developer with expertise in crafting websites using a combination of different technologies";

  const febox2Title = "Software Development";
  const febox2Description = `As a MERN stack development specialist, I offer expertise in crafting robust and dynamic web applications. `;

  const febox3Title = "AI Integration";
  const febox3Description =
    "In the realm of AI integration, I specialize in seamlessly merging artificial intelligence solutions into your existing systems and processes. ";

  /////////////////////////////////////////////////////////   RESUME   //////////////////////////////////////////////////////////

  /////////////////////////////////////////////////////////   PORTFOLIO   //////////////////////////////////////////////////////////

  const pobox1Img =
    "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-02-340x250.jpg";
  const pobox1Title = "Ecommerce Fashion Website";
  const pobox1NumOfLikes = "14";

  const pobox2Img =
    "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-02-340x250.jpg";
  const pobox2Title = "Quiz Builder Application";
  const pobox2NumOfLikes = "4";

  const pobox3Img =
    "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-02-340x250.jpg";
  const pobox3Title = "Notes Keeping Application";
  const pobox3NumOfLikes = "26";

  /////////////////////////////////////////////////////////   TESTIMONIAL   //////////////////////////////////////////////////////////

  const teimg =
    "https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/final-home-1st.png";
  const tename = "Nevine Acotanza";
  const tecompany = "RAINBOW-THEMES";
  const teposition = "Chief Operating Office";
  const tetitle = "Android App Development";
  const temoreInfo = "via Upwork - Mar 4, 2015 - Aug 30, 2021";
  const tedescription = `hroughout the development process, communication was
  seamless. I was kept informed at every stage, and any
  questions or concerns I had were addressed promptly. The team
  was highly professional and responsive, making it a
  collaborative and enjoyable partnership.`;
  const terating = "⭐⭐⭐⭐⭐";

  /////////////////////////////////////////////////////////   PRICING   //////////////////////////////////////////////////////////

  //Basic

  const prBasicTitle = "Make Your Single Page";
  const prBasicPrice = "30";
  const prbasicDescription =
    "I offer a professional service to create custom single-page websites tailored to your needs.";

  //Standard

  const prStandardTitle = "Make Your Single Page";
  const prStandardPrice = "50";
  const prStandardDescription =
    "I offer a professional service to create custom single-page websites tailored to your needs.";

  //Premium

  const prPremiumTitle = "Make Your Single Page";
  const prPremiumPrice = "100";
  const prPremiumDescription =
    "I offer a professional service to create custom single-page websites tailored to your needs.";

  /////////////////////////////////////////////////////////   BLOG   //////////////////////////////////////////////////////////

  const blbox1Img =
    "https://miro.medium.com/v2/resize:fit:1024/0*zb0GzPvxSsnwuBOu.png";
  const blbox1Title = "What are cors and why is it important for browsers?";
  const blbox1Category = "Technology";
  const blbox1Time = "2";

  const blbox2Img =
    "https://blog.openreplay.com/images/how-to-build-your-own-react-components-library/images/hero.png";
  const blbox2Title = "Five most amazing React libraries.";
  const blbox2Category = "Discover";
  const blbox2Time = "7";

  const blbox3Img =
    "https://devtechnosys.com/insights/wp-content/uploads/2022/12/Mern-Stack.png";
  const blbox3Title = "Best Resources to learn mern stack in 2023.";
  const blbox3Category = "Learn";
  const blbox3Time = "6";

  /////////////////////////////////////////////////////////   FOOTER   //////////////////////////////////////////////////////////

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Navbar bodyClick={bodyClick} onHireMeClick={hireMeClick} />

          <Home
            name={name}
            profession={profession}
            aboutMe={aboutMe}
            github={githubAccountLink}
            twitter={twitterAccountLink}
            linkedin={linkedinAccountLink}
          />
          <Seperator />
          <Features
            box1Title={febox1Title}
            box1Description={febox1Description}
            box2Title={febox2Title}
            box2Description={febox2Description}
            box3Title={febox3Title}
            box3Description={febox3Description}
          />
          <Seperator />
          <Resume />
          <Seperator />
          <Portfolio
            box1Img={pobox1Img}
            box1NumOfLikes={pobox1NumOfLikes}
            box1Title={pobox1Title}
            box2Img={pobox2Img}
            box2NumOfLikes={pobox2NumOfLikes}
            box2Title={pobox2Title}
            box3Img={pobox3Img}
            box3NumOfLikes={pobox3NumOfLikes}
            box3Title={pobox3Title}
          />
          <Seperator />
          <Testimonial
            img={teimg}
            name={tename}
            company={tecompany}
            position={teposition}
            title={tetitle}
            moreInfo={temoreInfo}
            description={tedescription}
            rating={terating}
          />
          <Seperator />
          <Pricing
            basicTitle={prBasicTitle}
            basicPrice={prBasicPrice}
            basicDescription={prbasicDescription}
            standardTitle={prStandardTitle}
            standardPrice={prStandardPrice}
            standardDescription={prStandardDescription}
            premiumTitle={prPremiumTitle}
            premiumPrice={prPremiumPrice}
            premiumDescription={prPremiumDescription}
          />
          <Seperator />
          <Blog
            box1Img={blbox1Img}
            box1Category={blbox1Category}
            box1Miuntes={blbox1Time}
            box1Title={blbox1Title}
            box2Img={blbox2Img}
            box2Category={blbox2Category}
            box2Miuntes={blbox2Time}
            box2Title={blbox2Title}
            box3Img={blbox3Img}
            box3Category={blbox3Category}
            box3Miuntes={blbox3Time}
            box3Title={blbox3Title}
          />
          <Seperator />
          <Footer />
          <Seperator />
          <Credits />
          <BackToTop />
        </>
      )}
    </>
  );
};

export default App;
