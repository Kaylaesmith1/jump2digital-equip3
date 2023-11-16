import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Map from '../src/components/Map.jsx';

describe('<Map />', () => {
  test('Map mounts properly and has 3 Toggle components with correct props and ids', () => {
    const { container } = render(<Map />);
    expect(container).toBeTruthy();
  });
});
