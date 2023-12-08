"use client";

import React from "react";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AiOutlineMenu } from 'react-icons/ai'

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const menuItems = [
    { href: "/#about", label: "About" },
    { href: "/#experience", label: "Experience" },
    { href: "/#projects", label: "Work" },
    { href: "/#certificates", label: "Certificates" },
    { href: "/#contact", label: "Contact" },
  ]
  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll isBlurred={false} className="shadow-lg">
        <NavbarContent>
          <button className="btn btn-primary sm:hidden" onClick={toggleDrawer} aria-label={isMenuOpen ? "Close menu" : "Open menu"}><AiOutlineMenu /></button>
          <NavbarBrand>
            <Link href="/" className="font-bold text-inherit text-xl text-success">C.A Tresor</Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.map((menu, i) => (
            <NavbarItem key={i}>
              <Link className="font-medium" href={menu.href} color="success">
                {menu.label}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button as={Link} color="success" href="#" variant="shadow">
              Resume
            </Button>
          </NavbarItem>
        </NavbarContent>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction='left'
          className="p-4"
          enableOverlay
        >
          <div className="menus">
            {menuItems.map((menu, i) => (
              <NavbarItem key={i} className="my-2">
                <Link onClick={toggleDrawer} className="font-medium text-lg" href={menu.href} color="primary">
                  {menu.label}
                </Link>
              </NavbarItem>
            ))}
          </div>
        </Drawer>
      </Navbar >
    </>
  );
}
