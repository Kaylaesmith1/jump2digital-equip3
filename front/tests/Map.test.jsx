import { describe, test, expect } from 'vitest';
import { render } from '@testing-library/react';
import Map from '../src/components/Map.jsx';

describe('<Map />', () => {
  test('Map mounts properly', () => {
    const { container } = render(<Map />);
    expect(container).toBeTruthy();
  });
});
