// Test away
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Dashboard from './Dashboard'

afterEach(rtl.cleanup);

let wrapper;
beforeEach(() => {
  wrapper = rtl.render(<Dashboard />)
});

const unlocked = () => wrapper.queryByText(/Unlocked/i);
const open = () => wrapper.queryByText(/Open/i);
const lockGate = () => wrapper.queryByText(/Lock Gate/i);
const closeGate = () => wrapper.queryByText(/Close Gate/i);
const closed = () => wrapper.queryByText(/Closed/i);
const openGate = () => wrapper.queryByText(/Open Gate/i);
const locked = () => wrapper.queryByText(/Locked/i);
const unlockGate = () => wrapper.queryByText(/Unlock Gate/i);


describe('Dashboard Component renders without crashing', () => {
  it('matches previous snapshot', () => {
    expect(wrapper.container).toMatchSnapshot();
  })

  it('displays initial components correctly', () => {
    expect(unlocked()).toBeInTheDocument();
    expect(open()).toBeInTheDocument();
    expect(lockGate()).toBeInTheDocument();
    expect(closeGate()).toBeInTheDocument();
    expect(lockGate()).toBeDisabled();
  })
})

describe('Close Gate works properly', () => {

  it('on "Close Gate" click "Open" changes to "Closed"', () => {
    rtl.fireEvent.click(closeGate());
    expect(closed()).toBeInTheDocument();
    expect(openGate()).toBeInTheDocument();
    expect(lockGate()).not.toBeDisabled();
    expect(wrapper.container).toMatchSnapshot();
  })
})
