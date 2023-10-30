import "./Footer.css";
import SocialRouter from "./SocialRouter";

const Footer = () => {
  return (
    <section id='footer'>
      <footer className='text-center text-lg-start'>
        <div className='container d-flex justify-content-center pt-3'>
          <SocialRouter />
        </div>
        <div className='text-center text-white p-3'>
          Copyright &#169; {new Date().getFullYear()} Darshan Lakade
        </div>
      </footer>
    </section>
  );
};

export default Footer;
