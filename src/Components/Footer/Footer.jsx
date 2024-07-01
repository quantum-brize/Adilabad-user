
import '../Footer/Footer.css'
import logo from '../Assets/Images/logo.png'
import fb from '../Assets/Images/fb.png'
import insta from '../Assets/Images/insta.png'
import wp from '../Assets/Images/wp.png'
import call from '../Assets/Images/call.png'
import x from '../Assets/Images/x.png'
const Footer = () => {
  return (
    <footer className="footer">

        <div className="footer-top">
            <div className="footer-logo">
        
            <img src={logo} alt="" />
            <div className="detail">
                <h4>ADILABAD APP</h4>
                <p>Address: Adilabad, Telangana, India, Asia</p>
            </div>
            </div>
            
            <div className="logos">
        <img className='image' src={call} alt="" />
        <img className='image' src={wp} alt="" />
        </div>
        </div>
       
     <div className="footer-below">
        
     <img className='image' src={fb} alt="" />
     <img className='image' src={insta} alt="" />
     <img className='image' src={x} alt="" />
     </div>
     <div className="copyright">
        <p>2024 @ Adilabad App</p>
     </div>
    </footer>
  );
};

export default Footer;
