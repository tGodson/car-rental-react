import React from 'react';
import renderer from 'react-test-renderer';
import AboutSection from '../components/AboutSection';

it('renders AboutSection correctly', () => {
  const tree = renderer.create(<AboutSection />);
  expect(tree).toMatchSnapshot();
});
