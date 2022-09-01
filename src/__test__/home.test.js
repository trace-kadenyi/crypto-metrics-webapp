import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Home from '../Components/Homepage/Home';

describe('test Home component', () => {
  test('Home should be in the document', () => {
    render(
      <Provider store={store}>
        <Router><Home /></Router>
      </Provider>,
    );
    const home = screen.getByRole('list');
    expect(home).toBeInTheDocument();
  });
  test('Home should match snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router><Home /></Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
