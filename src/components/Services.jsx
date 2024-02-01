import styled from "styled-components";
import serviceImg from "../assets/images/services.png";
import servicesItems from "../constants/servicesItems.js";
import { ServiceCard } from "./ServiceCard.jsx";

const Service = styled.div`
  position: relative;
  display: grid;
  //width: 100%;
  min-height: 100svh;
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
    <Service id={`services`}>
      <span
        className={`absolute top-40 left-4 w-52 h-52 \
        sm:w-64 sm:h-64 sm:top-52 sm:left-6
        xl:top-1/2 xl:-translate-y-[calc(50%+5rem)] xl:left-48 xl:w-96 xl:h-96 \
        rounded-full blur-xl bg-yellow-300 dark:bg-[#C62128] dark:opacity-80`}
      />
      <Container
        className={`group/services container h-full overflow-y-scroll p-8`}
      >
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
