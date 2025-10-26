import React from "react";
import {render, screen} from '@testing-library/react'
import "@testing-library/jest-dom";
import Hero from '../landing_page/home/Hero';

//test suites
describe("Hero component",()=>{
    test("renders Hero image",()=>{
        render(<Hero/>);
        const heroImage=screen.getByAltText("heroimage");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","/media/images/homeHero.png");
    })

     test("renders signup button",()=>{
        render(<Hero/>);
        const signupButton=screen.getByRole("button",{name:"Signup Now"});
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary");
    })

    
    test("renders invest paragraph", () => {
  render(<Hero />);
  const p = screen.getByText(
    "Online plateform to invest in stocks, derivatives, mutual finds and more"
  );
  expect(p).toBeInTheDocument();
});
})