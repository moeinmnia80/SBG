import styled from "styled-components";

const Container = styled.div`
  display: grid;
`;
export const Footer = () => {
  return (
    <>
      <section className={`relative w-full h-44 bg-[#eee] p-4`}>
        <Container className={`container`}>
          <div
            className={`absolute bottom-full translate-y-1/2 left-1/2 -translate-x-1/2 \
            w-3/4 h-16 bg-black rounded-xl`}
          >
            <input type="text" placeholder={`name`} />
          </div>
        </Container>
      </section>
    </>
  );
};
