const Card = ({ cadastro }) => {
  return (
    <div className="card">
      <h2>Cadastro</h2>
      <p>Username: {cadastro.user}</p>
      <p>Name: {cadastro.name}</p>
      <p>Email: {cadastro.email}</p>
    </div>
  );
};

export default Card;
