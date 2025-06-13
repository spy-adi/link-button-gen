import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import InformationTile from '../InformationTile.native';

describe('InformationTile Component', () => {
  const baseProps = {
    testID: 'info-tile',
    title: 'Test Title',
    description: 'This is a description',
    footerDescription: ['Footer content'],
    actions: [
      {
        text: 'Action',
        url: 'https://example.com',
      },
    ],
    items: [
      {
        title: 'Item Title',
        description: 'Item Description',
        icon: 'icon-name',
        index: 0,
      },
    ],
    image: {
      contentKey: 'icon-name',
      altText: 'Sample image',
    },
    contentHost: 'https://images.example.com',
    horizontalPadding: true,
    actionCallback: jest.fn(),
    actionCallbackAlt: jest.fn(),
  };

  it('renders title and description', () => {
    const { getByText } = render(<InformationTile {...baseProps} />);
    expect(getByText('Test Title')).toBeTruthy();
    expect(getByText('This is a description')).toBeTruthy();
  });

  it('renders footer description if provided', () => {
    const { getByText } = render(<InformationTile {...baseProps} />);
    expect(getByText('Footer content')).toBeTruthy();
  });

  it('renders actions when available', () => {
    const { getByTestId } = render(<InformationTile {...baseProps} />);
    expect(getByTestId('info-tile-icon-chevron-right')).toBeTruthy();
  });

  it('does not render image if contentKey is missing', () => {
    const { queryByTestId } = render(
      <InformationTile {...baseProps} image={{ contentKey: '' }} />
    );
    expect(queryByTestId('info-tile-icon-name')).toBeNull();
  });

  it('calls actionCallback when pressed', () => {
    const { getByRole } = render(<InformationTile {...baseProps} />);
    const linkButton = getByRole('link');
    fireEvent.press(linkButton);
    expect(baseProps.actionCallback).toHaveBeenCalled();
  });

  it('renders item list correctly', () => {
    const { getByText } = render(<InformationTile {...baseProps} />);
    expect(getByText('Item Title')).toBeTruthy();
    expect(getByText('Item Description')).toBeTruthy();
  });
});