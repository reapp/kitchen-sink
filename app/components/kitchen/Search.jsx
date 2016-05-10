import React from 'react';
import StaticView from 'reapp-ui/helpers/StaticView';
import Typeahead from 'reapp-ui/components/Typeahead';
import BackButton from 'components/shared/BackButton';
import Title from 'reapp-ui/components/Title';
import DemoViewMixin from 'mixins/DemoViewMixin';

export default StaticView({
  mixins: [
    DemoViewMixin
  ],

  getInitialState() {
    return {
      searchOptions: [
        {
          displayElements: 'red',
          display: 'red',
          value: '#f00'
        },
        {
          displayElements: 'green',
          display: 'green',
          value: '#0f0'
        },
        {
          displayElements: 'blue',
          display: 'blue',
          value: '#00f'
        },
        {
          displayElements: 'cyan',
          display: 'cyan',
          value: '#0ff'
        },
        {
          displayElements: 'magenta',
          display: 'magenta',
          value: '#f0f'
        },
        {
          displayElements: 'yellow',
          display: 'yellow',
          value: '#ff0'
        },
        {
          displayElements: 'black',
          display: 'black',
          value: '#000'
        }
      ]
    }
  },

  statics: {
    title: [BackButton, 'Search']
  },

  optionSelected(option) {
    document.activeElement.blur();
  },

  render() {
    return (
      <div {...this.props}>
        <Title>Search</Title>
        {this.state.searchOptions.length > 0 &&
          <Typeahead
            name='SearchTypeahead'
            placeholder='Search'
            allowCustomValues={false}
            //TODO: Add routes to the staticCustomValue to the Typeahead.
            defaultValue=''
            customValue=''
            options={this.state.searchOptions}
            maxVisible={10}
            onOptionSelected={this.optionSelected}
            clearOnOptionSelected={true}/>
        }
      </div>
    );
  }
});