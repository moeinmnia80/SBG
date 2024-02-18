import serviceImg from "../assets/images/services.png";
import styled from "styled-components";
import servicesItems from "../constants/servicesItems.js";
import { ServiceCard } from "./ServiceCard.jsx";

const Service = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 4rem 2rem;
`;
const Container = styled.section`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(4rem, 5rem));
  grid-auto-rows: minmax(4rem, 5.5rem);
  justify-content: center;
  place-items: center;
  place-content: center;
  gap: 2.5rem;
`;
export const Services = () => {
  return (
    <Service
      id={`services`}
      className={` min-h-svh sm:place-content-center dark:border-[#ffffff22] `}
    >
      <Container className={`to-up container h-full lg:grid-cols-[_1fr_1fr]`}>
        <div className={`relative flex items-center justify-center w-1/2`}>
          <img
            src={`${serviceImg}`}
            alt="services"
            className={`relative w-2/3`}
          />
        </div>
        {servicesItems.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </Container>
    </Service>
  );
};
