import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import App from '../src/App.jsx';

describe('<App />', () => {
  test('App mounts properly', () => {
    const container = render(<App />);
    expect(container).toBeTruthy();
  });
});
