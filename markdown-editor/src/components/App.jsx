import "bootstrap/dist/css/bootstrap.min.css";
import "../css/App.css";
import Container from "react-bootstrap/Container";

function App() {
  // Task 5: Write state for col here

  return (
    // Task 5: ThemeContext.Provider here
    <Container className="my-5">
      <div className="text-center">
        <h1 className="fw-bold">Convert Markdown to HTML</h1>
        <p>
          Markdown to HTML Converter helps to convert markdown markup language
          to HTML code
        </p>
      </div>

      {/* Task 3: MarkdownEditor here */}

      {/* Task 2: MarkdownCheatSheet here */}
      
    </Container>
    // Task 5: ThemeContext.Provider closing tag here
  );
}

export default App;
