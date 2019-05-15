import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import {getCharacter} from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getCharacter()
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <p>...fetching</p>
    }
    return (
      <div className="CharactersList_wrapper">
       {this.props.characters &&<CharacterList characters={this.props.characters} />}
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  console.log(state);
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetching
  };
};

// export default connect(
//   mapStateToProps /* mapStateToProps replaces null here */,
//   {
//     getCharacter/* action creators go here */
//   }
// )(CharacterListView);

export default connect(
  mapStateToProps,
  { getCharacter }
)(CharacterListView);