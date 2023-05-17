export default function AcessNegado() {
  return (
    <div>
      <h1>Acesso Negado!</h1>
      <button
        onClick={() => {
          history.back();
        }}
      >
        Voltar
      </button>
    </div>
  );
}
