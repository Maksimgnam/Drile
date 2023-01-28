import './Footer.css';
function Footer(){
    return(
        <div className='Footer'>
           
                <h4>Drile</h4>
             <div className='footer__block'>
               <div className='foot__block'>
                <h3 className='foot__text'>ABOUT US</h3>
                <a href=''>About us</a>
                <a href=''>Contact Us</a>
                <a href=''>Privicy Policy</a>
                <a href=''>Terms of Service</a>
               </div>
               <div className='foot__block'>
               <h3 className='foot__text'>COMPANY</h3>
               <a href=''>Explore World</a>
                <a href=''> Trending Video</a>
                <a href=''> Book a Trip </a>
                <a href=''>Visit Gallery</a>
               </div>
               <div className='foot__block'>
                <h3 className='foot__tex'>USEFUL LINKS</h3>
                <a href=''>About us</a>
                <a href=''>Contact Us</a>
                <a href=''>Privicy Policy</a>
                <a href=''>Terms of Service</a>
               </div>
               <div className='foot__block'>
                <h3 className='foot__te'>FOLLOW US</h3>
                <a href=''>About us</a>
                <a href=''>Contact Us</a>
                <a href=''>Privicy Policy</a>
                <a href=''>Terms of Service</a>
               </div>
               

             </div>
             <div className='footer__down'>
                <p className='copyright'>© Copyright 2023 | drile | All right reserved.</p>
             </div>
        </div>
    )

}
export default Footer