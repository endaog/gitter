import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import AppScreen from 'components/AppScreen';

// import { availableFilters, citations, images, storyCards, textComponents } from 'common/containers/Documents/selectors';
// import { projectMode } from 'common/containers/Project/selectors';
import { fetchProjectRequest } from 'containers/App/actions';
// import { rootDocument } from 'common/containers/RootDocument/selectors';

const mapStateToProps = createStructuredSelector({
  
});

const mapDispatchToProps = {
    fetchProjectRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppScreen);