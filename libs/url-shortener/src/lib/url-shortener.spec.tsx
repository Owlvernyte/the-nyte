import { render } from '@testing-library/react';

import UrlShortener from './url-shortener';

describe('UrlShortener', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UrlShortener />);
    expect(baseElement).toBeTruthy();
  });
});
