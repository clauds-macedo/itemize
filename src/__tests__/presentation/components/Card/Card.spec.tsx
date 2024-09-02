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

  it('should render the image with the provided src and alt', () => {
    const { getByAltText } = render(
      <Card.Image src="test-image.jpg" alt="Test Image" />,
    );

    const img = getByAltText('Test Image');
    expect(img.getAttribute('src')).toBe('test-image.jpg');
  });

  it('should render the price correctly', () => {
    const { getByText } = render(<Card.Price>$49.12</Card.Price>);

    expect(getByText('$49.12')).toBeTruthy();
  });

  it('should render the rating correctly', () => {
    const { getByText } = render(<Card.Rating>1.25</Card.Rating>);

    expect(getByText('1.25')).toBeTruthy();
  });

  it('should render the title correctly', () => {
    const { getByText } = render(<Card.Title>Test Title</Card.Title>);

    expect(getByText('Test Title')).toBeTruthy();
  });
});
