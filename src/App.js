import React from 'react';
import NewsContainer from './components/News/NewsComponent';
import './styles/App.css';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>

      <pre>{error.message}</pre>
    </div>
  );
}
const App = () => {
  return (
    <>
      <div id="parentContainer">
        <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
          <NewsContainer items="BTC" apiKeyNumber={1} />
        </ErrorBoundary>
      </div>
    </>
  );
};

export default App;
