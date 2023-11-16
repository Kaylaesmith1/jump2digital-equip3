import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Nav from '../src/components/Nav.jsx';

describe('<Nav />', () => {
  test('Nav mounts properly and has 3 Toggle components', () => {
    const { container } = render(<Nav />);
    expect(container).toBeTruthy();

    const toggleComponents = container.querySelectorAll('.Toggle');
    expect(toggleComponents.length).toBe(2);
  });
});
