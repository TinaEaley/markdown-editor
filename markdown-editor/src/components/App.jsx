import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';
import Container from 'react-bootstrap/Container';
import MarkdownCheatSheet from './MarkdownCheatSheet';
import MarkdownEditor from './MarkdownEditor';

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

      <MarkdownEditor />

      <MarkdownCheatSheet />
    </Container>
    // Task 5: ThemeContext.Provider closing tag here
  );
}

export default App;
