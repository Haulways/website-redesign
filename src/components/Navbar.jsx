import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo.png'

export default function Navbar(){
    
    return(
        <>
        <nav className={`xui-navbar grascope-navbar xui-pl-1-half xui-pr-half `} brand="true" layout="2" menu="2">
            <div className="brand xui-h-fluid-100">
                <NavLink className="xui-text-dc-none xui-h-fluid-100 xui-text-inherit xui-d-inline-flex xui-flex-ai-center" to={'/'}>
                    <img className='xui-img-150' src={Logo} alt="" />
                </NavLink>
            </div>
            <div className="links" placed="center">
                <div className="main dark-color primary bg-navyblue">
                    <ul className='xui-grid-gap-2'>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'active-link xui-font-sz-120 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-400' : 'xui-font-sz-120 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-400'} to={"/"}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'active-link xui-font-sz-120 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-400' : 'xui-font-sz-120 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-400'} to={"about"}>About us</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'active-link xui-font-sz-120 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-400' : 'xui-font-sz-120 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-400'} to={"company"}>Company</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'active-link xui-font-sz-120 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-400' : 'xui-font-sz-120 nav-links xui-md-font-sz-200 xui-lg-font-sz-100 xui-font-w-400'} to={"co-workspace"}>Co-workspace</NavLink>
                        </li>
                     
                    </ul>
                </div>
                <div className="fixed xui-lg-d-block xui-md-d-block xui-d-block">
                    <ul>
                        <li>
                            <Link className='xui-btn xui-bdr-rad-2 xui-bg-white color-primary'>Signin</Link>
                            <Link to={'contact'} className='xui-btn xui-bdr-rad-2 bg-primary xui-text-white xui-ml-1'>Contact us</Link>
                        </li>
                    </ul>
                </div>
                <div className="menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
        </>
    );
}