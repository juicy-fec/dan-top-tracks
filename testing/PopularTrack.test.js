import React from 'react';
import { render, cleanup } from 'react-testing-library';
import PopularTrack from '../client/src/components/PopularTrack.jsx';

afterEach(() => {
  cleanup();
  console.error.mockClear();
});

console.error = jest.fn();

test('<PopularTrack w/o track />', () => {
  render(<PopularTrack />);
  expect(console.error).toBeCalled();
});

const track = {
  name: 'test_name',
  artist: 'test_artist',
  image: 'test_image',
  playCount: 100,
  length: 'test_length',
};

test('<PopularTrack w/ track />', () => {
  const { getByTestId } = render(<PopularTrack track={track} />);
  expect(console.error).not.toBeCalled();
  expect(getByTestId('track-image').getAttribute('src')).toBe(track.image);
  expect(getByTestId('track-name').innerHTML).toBe(track.name);
  expect(getByTestId('track-length').innerHTML).toBe(track.length);
  expect(getByTestId('track-icon').firstChild.tagName).toEqual('I');
});