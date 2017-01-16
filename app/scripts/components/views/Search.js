import React, { PropTypes, Component } from 'react';
import TextField from 'material-ui/TextField';
import { amber900 } from 'material-ui/styles/colors';
import algoliasearch from 'algoliasearch';
import { isEmpty } from 'lodash';

import formatAlgoliaResults from '../../utils/formatAlgoliaResults';
import formatNumber from '../../utils/formatNumber';
import { conf } from '../../utils/hnConf';
import ItemsList from '../news/ItemsList';

const style = { borderColor: amber900 };

class Search extends Component {
  constructor() {
    super();
    this.state = { results: [], data: {} };
  }

  componentDidMount() {
    this.client = algoliasearch(conf.search.appId, conf.search.searchOnlyApiKey);
    this.index = this.client.initIndex(conf.search.index);
  }

  handleSearch = (e, query) => {
    if (query && !isEmpty(query)) {
      this.index.search(query, (err, content) => {
        if (!err) {
          this.setState({
            results: content.hits.map(formatAlgoliaResults),
            data: {
              nbHits: content.nbHits,
              ms: content.processingTimeMS,
            },
          });
        }
      });
    }
  }

  render() {
    return (
      <div className="Search">
        <div className="Search-bar">
          <TextField
            hintText="Search on Hacker News here"
            onChange={this.handleSearch}
            underlineStyle={style}
            underlineFocusStyle={style}
          />
        <div className="Search-status">
          {!isEmpty(this.state.results) ? `${formatNumber(this.state.data.nbHits)} results found in ${this.state.data.ms}ms` : null}
        </div>
        </div>
        <div className="Search-results">
          {!isEmpty(this.state.results) ? <ItemsList items={this.state.results} /> : null}
        </div>
      </div>
    );
  }
}

Search.propTypes = {};

export default Search;
