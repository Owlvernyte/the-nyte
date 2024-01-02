import { render } from '@testing-library/react';

import QrMaker from './qr-maker';

describe('QrMaker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QrMaker />);
    expect(baseElement).toBeTruthy();
  });
});
