import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <img
            className="w-20"
            src="https://i.ibb.co/zQBx7d9/Tweeting.png"
            alt="Tweeting"
          />
          <p className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <span className="bg-sky-600 font-bold">
              Tweeting<sub>System-App</sub>
            </span>
          </p>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>

          <Navbar.Link href="/signup">Sign Up</Navbar.Link>
          <Navbar.Link href="/login">Sign In</Navbar.Link>
        </Navbar.Collapse>
        <Navbar.Link href="/navbars">About</Navbar.Link>
      </Navbar>
    </div>
  );
};

export default NavBar;
