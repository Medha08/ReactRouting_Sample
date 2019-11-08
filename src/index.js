import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Link } from "react-router-dom";

import "./styles.css";

class Sample extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  componentDidMount() {
    this.props.history.push("/");
  }
  render() {
    return (
      <div>
        <h1>This is sample page</h1>
      </div>
    );
  }
}

const HomePage = props => {
  console.log("props", props);
  return (
    <div className="homepage">
      <h1>HOMEPAGE</h1>
    </div>
  );
};

const TopicList = props => {
  console.log("propsTopic ", props);
  return (
    <div className="topicpage">
      <h1>TopicPage</h1>
      <h2>Dynamic Routing Example</h2>
      <Link to={`${props.match.url}/13`}>Topic 13</Link>
      <br />
      <Link to={`${props.match.url}/14`}>Topic 14</Link>
      <br />
      <Link to={`${props.match.url}/15`}>Topic 15</Link>
      <br />
      <Link to={`${props.match.url}/16`}>Topic 16</Link>
      <br />
      <Link to={`${props.match.url}/17`}>Topic 17</Link>
      <br />
      <Link to={`${props.match.url}/18`}>Topic 18</Link>
      <br />
    </div>
  );
};

const Topic = props => {
  console.log("propsTopicSingle ", props);
  return (
    <div className="topic">
      <Link to={`${props.match.path}`.slice(0, props.match.path.length - 3)}>
        Topic List
      </Link>
      <h1>Topic {props.match.params.id}</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/sample" component={Sample} />
      <Route exact path="/topiclist" component={TopicList} />
      <Route exact path="/topiclist/:id" component={Topic} />
      <Route exact path="/blog/xyz/topiclist" component={TopicList} />
      <Route exact path="/blog/xyz/topiclist/:id" component={Topic} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);
