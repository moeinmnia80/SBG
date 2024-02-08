import styled from "styled-components";
import serviceImg from "../assets/images/services.png";
import servicesItems from "../constants/servicesItems.js";
import { ServiceCard } from "./ServiceCard.jsx";

const Service = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid #eee;
  padding: 3rem 0;
  overflow: hidden;
`;
const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  grid-template-rows: repeat(auto-fit, 12.5rem);
  justify-content: center;
  grid-auto-rows: 12.5rem;
  place-content: center;
  gap: 2.5rem;
  overflow: hidden;
`;
export const Services = () => {
  return (
    <Service
      id={`services`}
      className={`to-up min-h-svh xl:h-svh sm:place-content-center \
       dark:border-[#ffffff22]`}
    >
      <Container className={`group/services relative container h-full p-8`}>
        <div className={`group relative w-full h-full`}>
          <div
            className={`absolute w-full h-full top-2 -left-2 border-[1px] border-[#1a1a1d] rounded-md \ 
            bg-[#eee] group-hover:bg-fuchsia-400 dark:group-hover:bg-[#C62128] duration-300`}
          />
          <div
            className={`relative flex items-center w-full h-full bg-[#ffffff44] backdrop-blur-xl \
           border-[1px] border-[#1a1a1d] rounded-md p-4`}
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
