import logoTopBar from "../assets/logoTopBar.png";

export function TopBar() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "rgba(219, 219, 219, 0.6)",
        backdropFilter: "saturate(180%) blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        zIndex: 1000,
      }}
    >
      <div>
        <img
          src={logoTopBar}
          alt="Full Engineering Logo"
          style={{ height: "50px" }}
        />
      </div>

      <nav style={{ display: "flex", gap: "24px" }}>
        <a href="#inicio" style={{ color: "#fff", textDecoration: "none" }}>
          Inicio
        </a>
        <a
          href="#sobre-nosotros"
          style={{ color: "#fff", textDecoration: "none" }}
        >
          Sobre Nosotros
        </a>
        <a href="#servicios" style={{ color: "#fff", textDecoration: "none" }}>
          Servicios
        </a>
        <a href="#proyectos" style={{ color: "#fff", textDecoration: "none" }}>
          Proyectos
        </a>
      </nav>

      <button
        style={{
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          padding: "8px 16px",
          borderRadius: "4px",
          cursor: "pointer",
          fontWeight: 500,
          fontSize: "1rem",
        }}
      >
        Contáctanos
      </button>
    </header>
  );
}
