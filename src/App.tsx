import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <>
      <div>
        <Alert>
          ALERT IS <span>Working</span>
        </Alert>
      </div>

      <div>
        <Button>
          Test Button
          </Button>
      </div>
    </>
  );
}
export default App;
