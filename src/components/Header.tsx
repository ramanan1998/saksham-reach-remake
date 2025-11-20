import React from 'react';
import { Button } from './ui/button';
import { NavLink } from 'react-router-dom';
import { NavMobile } from './NavMobile';

const Header = () => {

  const routes = [
    {
      name: "Home",
      route: "/"
    },
    {
      name: "Projects",
      route: "/projects"
    },
    {
      name: "Our Team",
      route: "/our-team"
    },
    {
      name: "Contact",
      route: "/contact"
    },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="mx-auto px-4 py-4">
        <div className="flex items-center justify-between md:container">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">SAKSHAM</h1>
              <p className="text-xs text-muted-foreground">Tamil Nadu</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {routes.map(item => (
              <NavLink 
                className={({ isActive }) => isActive ? "text-green-700 transition-colors font-medium" : "text-foreground hover:text-primary transition-colors font-medium" }
                key={item.route} 
                to={item.route}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
          {/* <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="" className="text-foreground hover:text-primary transition-colors font-medium">
              Projects
            </a>
            <a href="" className="text-foreground hover:text-primary transition-colors font-medium">
              Our Team
            </a>
            <a href="" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav> */}

          {/* Donate Button */}
          <Button variant="donate" size="lg">
            Donate Now
          </Button>

          <NavMobile routes={routes}/>
        </div>
      </div>
    </header>
  );
};

export default Header;