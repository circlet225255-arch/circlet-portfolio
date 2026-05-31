const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <section className='px-0 2xl:px-60 py-6 2xl:py-12 max-w-full mx-auto relative z-0'>
        <Component />
      </section>
    );
  };

export default SectionWrapper;
