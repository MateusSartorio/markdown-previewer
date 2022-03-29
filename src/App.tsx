// Importing default React stuff
import React from 'react';

// Importing custom components
import { Editor } from './components/Editor';
import { Previewer } from './components/Previewer';

// Importing Redux stuff
import { connect } from 'react-redux';
import { ActionTypes } from './reducers/rootReducer';

// Importing the main CSS stylesheet

const App = (props: any) => {
  const { code, changeCode } = props;

  return (
    <div className="App">
      <Editor code={code} changeCode={changeCode}/>
      <Previewer code={code}/>
    </div>
  );
}

const mapStateToProps = (state: {code: string}): any => {
  return {
    code: state.code,
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    changeCode: (code: string) => dispatch({type: ActionTypes.CHANGE_CODE, code})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);