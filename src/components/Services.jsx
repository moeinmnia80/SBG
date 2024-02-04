import styled from "styled-components";
import serviceImg from "../assets/images/services.png";
import servicesItems from "../constants/servicesItems.js";
import { ServiceCard } from "./ServiceCard.jsx";
import { useEffect } from "react";
import { observerServices } from "../helpers/helpers.js";

const Service = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  place-items: center;
  padding: 0 1rem;
  overflow: hidden;
`;
const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-template-rows: repeat(auto-fit, 12.5rem);
  justify-content: center;
  grid-auto-rows: 12.5rem;
  gap: 2.5rem;
  overflow: hidden;
`;
export const Services = () => {
  useEffect(() => {
    document
      .querySelectorAll(".services")
      .forEach((section) => observerServices.observe(section));
  }, [window.scrollY]);
  return (
    <Service
      id={`services`}
      className={`min-h-svh xl:h-svh sm:place-content-center my-14 md:mt-20 xl:m-0`}
    >
      <Container className={`group/services relative container h-full  p-8`}>
        <div className={`group relative services w-full h-full`}>
          <div
            className={`absolute w-full h-full top-2 -left-2 border-[1px] border-black rounded-md \ 
            bg-[#eee] group-hover:bg-fuchsia-400 duration-300`}
          />
          <div
            className={`relative flex items-center w-full h-full bg-[#ffffff44] backdrop-blur-xl \
             border-[1px] border-black rounded-md p-4`}
          >
            <img
              src={`${serviceImg}`}
              alt="services"
              className={`relative w-full`}
            />
          </div>
        </div>
        {servicesItems.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </Container>
    </Service>
  );
};
