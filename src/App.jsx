import './index.css'

function App() {
  // Simularemos dados locais básicos baseados em nossa aula (State Management Simples)
  const alunoMock = { name: "João Silva", goal: "Hipertrofia" };
  const treinosMock = [
    { id: 1, title: 'Treino A - Peito e Tríceps' },
    { id: 2, title: 'Treino B - Costas e Bíceps' },
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.profile}>
          <div style={styles.avatar}>JS</div>
          <div>
            <h1 style={styles.title}>Olá, {alunoMock.name}</h1>
            <span style={styles.subtitle}>Foco: {alunoMock.goal}</span>
          </div>
        </div>
      </header>

      <main style={styles.main}>
        <h2 style={styles.sectionTitle}>Seus Treinos</h2>

        <div style={styles.list}>
          {treinosMock.map(treino => (
            <div key={treino.id} style={styles.card}>
              <div style={styles.cardIcon}>🏋️</div>
              <div style={styles.cardContent}>
                <h3 style={styles.cardTitle}>{treino.title}</h3>
                <span style={styles.cardAction}>Iniciar ›</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer style={styles.footer} className="no-select">
        {/* Menu fixo embaixo, bem similar a Apps Nativos */}
        <button style={styles.footerBtnActive}>🏠 Home</button>
        <button style={styles.footerBtn}>📊 Progresso</button>
        <button style={styles.footerBtn}>⚙️ Ajustes</button>
      </footer>
    </div>
  )
}

// Estilização em JS (CSS-in-JS simulado para escopo do componente App) para focar na didática do professor.
// No mercado real, frequentemente usamos Styled Components, TailwindCSS ou CSS Modules.
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    padding: 'var(--spacing-lg) var(--spacing-md)',
    backgroundColor: 'var(--bg-card)',
    borderBottom: '1px solid #323238'
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-md)'
  },
  avatar: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: 'var(--brand-color)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    color: 'white'
  },
  title: {
    fontSize: '1.2rem',
    margin: 0
  },
  subtitle: {
    fontSize: '0.85rem',
    color: 'var(--text-secondary)'
  },
  main: {
    flex: 1,
    padding: 'var(--spacing-lg) var(--spacing-md)'
  },
  sectionTitle: {
    fontSize: '1.1rem',
    marginBottom: 'var(--spacing-md)',
    color: 'var(--text-secondary)'
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-sm)'
  },
  card: {
    backgroundColor: 'var(--bg-card)',
    padding: 'var(--spacing-md)',
    borderRadius: 'var(--border-radius)',
    display: 'flex',
    alignItems: 'center',
    gap: 'var(--spacing-md)',
    cursor: 'pointer'
  },
  cardIcon: {
    fontSize: '1.5rem',
    backgroundColor: '#323238',
    padding: '10px',
    borderRadius: '8px'
  },
  cardContent: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardTitle: {
    fontSize: '1rem',
    margin: 0
  },
  cardAction: {
    color: 'var(--brand-color)',
    fontWeight: 'bold',
    fontSize: '0.9rem'
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: 'var(--bg-card)',
    padding: '12px 0',
    borderTop: '1px solid #323238',
    paddingBottom: 'calc(12px + env(safe-area-inset-bottom))' // Previne sobreposição na barrinha do iOS
  },
  footerBtn: {
    backgroundColor: 'transparent',
    color: 'var(--text-secondary)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '0.75rem',
    gap: '4px'
  },
  footerBtnActive: {
    backgroundColor: 'transparent',
    color: 'var(--brand-color)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '0.75rem',
    gap: '4px',
    fontWeight: 'bold'
  }
}

export default App
