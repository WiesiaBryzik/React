import { connect } from 'react-redux';
import { getCardsForSearchResults } from '../../redux/cardsRedux.js';
import SearchResults from './SearchResults';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearchResults(state, props.match.params.searchString),
});

export default connect(mapStateToProps, null)(SearchResults);