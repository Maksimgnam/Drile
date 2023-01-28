import './Header.css'
function Header(){
    return(
   <div className = 'Header'>
   <h3  className='logo'>Drile</h3>
    <nav className='navbar'>
        <a href="a"className='a'>Home</a>
        <a href="a" className='a'>Shop</a>
        <a href="a" className='a'>Product</a>
        <a href="a" className='a'>Blog</a>
        <a href="a" className='a'>Page</a>
        <a href="a" className='a'>Contact</a>
    </nav>
    <div className='icon'>
        <div className='ico ico_one'></div>
        <div className='ico ico_two'></div>
        <div className='ico ico_thre'></div>
    </div>
   
   </div>
)
}

export default Header