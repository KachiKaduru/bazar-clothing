export default function Navigate() {
  return (
    <section className="navigate">
      <div className="container">
        <button>PREV</button>

        <div className="pages">
          <span className="page current">1</span>
          <span className="page">2</span>
          <span className="page">3</span>
          <span className="page">...</span>
          <span className="page">10</span>
        </div>

        <button>NEXT</button>
      </div>
    </section>
  );
}
