import { render, screen } from '@testing-library/react';
import MainList from '../Components/HomePage/MainList';
import store from '../redux/configureStore';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';



describe('test MainList component', () => {
    test('MainList should be in the document', () => {
      render(
        <Provider store={store}>
          <Router><MainList /></Router>
        </Provider>,
      );
      const home = screen.getByRole('list');
      expect(home).toBeInTheDocument();
    });
      test('MainList should match snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router><MainList /></Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});