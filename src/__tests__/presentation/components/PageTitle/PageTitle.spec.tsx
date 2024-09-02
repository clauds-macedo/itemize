import { PageTitle } from '@/presentation/components/PageTitle';
import { render } from '@testing-library/react';

describe('PageTitle', () => {
  it('should render PageTitle correctly', () => {
    const { findByText } = render(<PageTitle>Title</PageTitle>);
    const title = findByText('Title');

    expect(title).toBeDefined();
  });
});
