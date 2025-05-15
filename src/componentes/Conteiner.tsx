const Conteiner = (props) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {props.children}
    </div>
  );
}

export default Conteiner;