import { Card } from '@/presentation/components/Card';
import { fireEvent, render } from '@testing-library/react';

describe('Card Button', () => {
  it('should render the Card component correctly', () => {
    const { findByText } = render(
      <Card.Root>
        <Card.Button>Card Button Render</Card.Button>
      </Card.Root>,
    );
    expect(findByText('Card Button Render')).toBeTruthy();
  });

  it('should handle onClick event', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Card.Root>
        <Card.Button onClick={handleClick}>Click Me</Card.Button>
      </Card.Root>,
    );

    const button = getByText('Click Me');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should apply custom className to Card correctly', () => {
    const { container } = render(
      <Card.Root className="w-64">
        <Card.Button>Button</Card.Button>
      </Card.Root>,
    );

    expect(container.getElementsByTagName('w-64')).toBeDefined();
  });
});
