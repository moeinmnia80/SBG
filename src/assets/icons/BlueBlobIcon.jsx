import { useSelector } from "react-redux";

export const BlueBlobIcon = ({ style }) => {
  const theme = useSelector((store) => store.theme.theme);
  return (
    <>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className={`${style}`}
      >
        <path
          fill={`${theme === "dark" ? `#08BDBA` : `#000`}`}
          d="M37.7,-38.3C47,-28.4,51.3,-14.2,52.3,0.9C53.2,16.1,50.8,32.2,41.5,43.3C32.2,54.3,16.1,60.2,0.3,60C-15.5,59.7,-31.1,53.2,-44.9,42.1C-58.8,31.1,-70.9,15.5,-69.7,1.2C-68.6,-13.2,-54.1,-26.4,-40.2,-36.2C-26.4,-46,-13.2,-52.4,0.5,-52.9C14.2,-53.5,28.4,-48.1,37.7,-38.3Z"
          transform="translate(100 100)"
        />
      </svg>
    </>
  );
};
