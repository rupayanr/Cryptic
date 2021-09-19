
import AuthProvider from './components/Provider/AuthProvider';
import Routes from './components/Routes/Routes';



function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
