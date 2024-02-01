import styled from "styled-components";
import serviceImg from "../assets/images/services.png";
import servicesItems from "../constants/servicesItems.js";
import { ServiceCard } from "./ServiceCard.jsx";

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
  grid-template-rows: repeat(2, 12.5rem);
  place-content: center;
  grid-auto-rows: 15rem;
  gap: 2.5rem;
  overflow: hidden;
`;
export const Services = () => {
  return (
    <Service id={`services`} className={`min-h-svh md:mt-20`}>
      <span
        className={`absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 \
        sm:w-80 sm:h-80 sm:top-8 sm:left-12 sm:translate-x-0 \
        lg:top-14 lg:left-0 \
        xl:top-1/2 xl:-translate-y-[calc(50%+5rem)] xl:left-48 xl:w-96 xl:h-96 \
        rounded-full blur-xl bg-yellow-300 dark:bg-[#C62128] dark:opacity-80`}
      />
      <Container className={`group/services container h-full  p-8`}>
        <div className={`w-full h-full grid place-items-center z-20`}>
          <img
            src={`${serviceImg}`}
            alt="services"
            className={`relative w-full`}
          />
        </div>
        {servicesItems.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </Container>
    </Service>
  );
};
