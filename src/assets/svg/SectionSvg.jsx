import PlusSvg from "./PlusSvg";

const SectionSvg = ({ crossesOffset }) => {
  return (
    <>
      <PlusSvg
        className={`hidden absolute -top-[5.30rem] left-[1.5625rem] ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:left-[2.1875rem]`}
      />

      <PlusSvg
        className={`hidden absolute  -top-[5.30rem] right-[1.5625rem] ${
          crossesOffset && crossesOffset
        } pointer-events-none lg:block xl:right-[2.1875rem]`}
      />
    </>
  );
};

export default SectionSvg;
