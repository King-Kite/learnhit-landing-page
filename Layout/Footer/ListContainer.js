import CustomLink from "./Link";

const brandStyle = "capitalize text-lg md:text-xl text-gray-100 mb-4";
const containerStyle = "p-2 w-full md:order-2 md:w-1/2 lg:order-1 lg:w-3/12";
const linkListStyle =
  "m-1 md:ml-0 text-left text-gray-100 tracking-wide lg:w-1/3 lg:w-full";
const linkTitleStyle =
  "duration-200 border-b-2 border-opacity-0 hover:text-gray-200 hover:border-opacity-100 hover:text-lg text-base transition-all transform";

const ListContainer = ({ links, head }) => (
  <section className={containerStyle}>
    <h1 className={brandStyle}>{head}</h1>
    <ul className={linkListStyle}>
      {links?.map(({ title, ...props }) => (
        <CustomLink key={title} title={title} {...props} />
      ))}
    </ul>
  </section>
);

export default ListContainer;
