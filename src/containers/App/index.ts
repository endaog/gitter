import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import AppScreen from 'components/AppScreen';
import { projectList, tweetList } from 'containers/App/selectors';
import { fetchProjectRequest, fetchTweetRequest } from 'containers/App/actions';

const mapStateToProps = createStructuredSelector({
    projectList,
    tweetList,
});

const mapDispatchToProps = {
    fetchProjectRequest,
    fetchTweetRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppScreen);