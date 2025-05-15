const Corpo = (props) => {
  return (
    <main className="flex-grow container mx-auto p-4 md:p-8">
      {props.children}
    </main>
  );
};

export default Corpo;