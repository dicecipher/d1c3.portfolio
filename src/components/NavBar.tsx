import './styles/NavBar.scss'
import { useState } from "react";


function NavBar() {
    const [active, setActive] = useState("overview");
    const items = [
        { name: "overview", color: "#d76a50" }, 
        { name: "projects", color: "#2e2f49" }, 
        { name: "contact", color: "#7fae9d" }, 
        { name: "faqs", color: "#f2cb8c" }, 
      ];
    return (
    
      <>
      <div className="navbar-container">
        <div className='hello-container'><span className='h'>h</span><span className='e'>e</span><span className='l'>lllllll</span><span className='o'>o</span><span className='exclamation'>!</span></div>

        <nav className="navbar">
      <ul>
        {items.map(({ name, color }) => (
          <li
            key={name}
            className={active === name ? "active" : ""}
            onClick={() => setActive(name)}
            style={{
              "--underline-color": color, 
            } as React.CSSProperties}
          >
            <span className="box" style={{ backgroundColor: color }}></span> {name}
          </li>
        ))}
      </ul>
    </nav>

    <div className='line'></div>
      </div>
      </>
      
    )
  }
  
  export default NavBar
  