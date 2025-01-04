"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BotOff } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Logo_Top from "@/public/assets/Logo_top.jpg";
import Logo_Bottom from "@/public/assets/Logo_bottom.jpg";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToggled, setIsToggled] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const topNavLinks = [
    // { name: "About Us", href: "/about-us" },
    // { name: "Partners", href: "/partners" },
    // { name: "Blogs", href: "/blog" },
    // { name: "FAQ", href: "/faqs" },
    { name: "Loan Request", href: "/loan-request", sub: "" },
    { name: "Contact Us", href: "/contact-us", sub: "" },
    { name: "Login", href: "/login", sub: "" },
  ];

  const bottomNavLinks = [
    { name: "Home", href: "/", sub: "" }, // Home comes first now
    {
      name: "Solutions",
      href: "",
      sub: [
        {
          name: "Lead Generation",
          href: "/solutions/lead-generation",
        },
        {
          name: "Marketing Sales",
          href: "/solutions/marketing-sales",
        },
        {
          name: "Loan Management",
          href: "/solutions/loan-management",
        },
        {
          name: "Analytics",
          href: "/solutions/analytics",
        },
      ],
    },
    { name: "Broker Development", href: "/broker-development", sub: "" },
    { name: "Notifications", href: "/notifications", sub: "" },
    {
      name: "Resources",
      href: "",
      sub: [
        {
          name: "FAQs",
          href: "/resources/faqs",
        },
        {
          name: "Blogs",
          href: "/resources/blogs",
        },      
      ],
    },
    { 
      name: "Technologies", 
      href: "/technologies", 
      sub: [
        {
          name: "AI/ML",
          href: "/technologies/ai-ml",
        },
        {
          name: "Cloud Computing",
          href: "/technologies/cloud-computing",
        },    
        {
          name: "Data Analytics",
          href: "/technologies/data-analytics",
        },
        {
          name: "API Integrations",
          href: "/technologies/api-integrations",
        },  
      ] 
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Logo and Top Links */}
      <div className="bg-white border-b flex items-center">
        <div className="flex items-center px-4">
          <span className="text-lg font-bold pr-2">AiBuildiQ™</span>
          <div
            className="h-[60px] w-[80px] bg-contain bg-no-repeat"
            style={{
              backgroundImage: `url(${Logo_Top.src})`,
            }}
          ></div>
        </div>
        <div className="flex justify-end items-center py-2 w-full pr-10">
          {!isMobile && (
            <div className="flex items-center space-x-6">
              {topNavLinks.map((link) => (
                <div key={link.name} className="relative">
                  <Link
                    href={link.href}
                    className={`text-gray-600 hover:text-[#004F8F] transition-colors duration-200 ${
                      activeLink === link.name
                        ? "text-blue-300 underline"
                        : ""
                    }`}
                    onMouseEnter={() => setActiveLink(link.name)}
                    onMouseLeave={() => setActiveLink("")}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search..."
                  className="px-4 py-1 border rounded-full focus:outline-none focus:ring-2"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Second Layer - Blue Background Matching Box */}
      <div
        className="bg-[#00315C] flex items-center justify-center"
        style={{
          height: "80px", // Adjusted height to match the reference blue box
          width: "100%", // Full width to cover the screen
        }}
      >
        <div className="flex space-x-8 items-center">
          {bottomNavLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => {
                setActiveLink(link.name);
                setIsToggled(link.name);
              }}
            >
              {link.href ? (
                <Link
                  href={link.href}
                  className={`text-white text-lg hover:text-gray-300 transition-colors duration-200 px-3 py-2 ${
                    activeLink === link.name ? "bg-[#004F8F] rounded-lg" : ""
                  }`}
                  onMouseLeave={() => setActiveLink("")}
                >
                  {link.name}
                </Link>
              ) : (
                <div className="dropdown relative">
                  <NavigationMenu>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-[#00315C] text-lg text-white hover:bg-[#004F8F] hover:text-white px-3 py-2">
                          {link.name}
                        </NavigationMenuTrigger>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                  <div
                    className={`dropdown-content absolute w-48 mt-2 bg-white shadow-lg rounded-md py-2 ${
                      isToggled === link.name ? "show" : "hidden"
                    }`}   
                    onMouseLeave={() => {
                      setActiveLink("");
                      setIsToggled("");
                    }}
                  >
                    {Array.isArray(link.sub) &&
                      link.sub.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 hover:text-[#004F8F]"
                          onMouseEnter={() => setActiveLink(subLink.name)}
                          onMouseLeave={() => setActiveLink("")}
                        >
                          {subLink.name}
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
