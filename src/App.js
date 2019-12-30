import React, {Component} from 'react';
import {Route, Switch, Link} from 'react-router-dom'
import {HomePages} from './pages/homepage/homepage.component'
import './App.css';

const HomePage = (props) => {
    console.log(props)
    return (
        <div>
            <Link to='/topicsList'>
                <h1>Home Page</h1>
            </Link>
        </div>
    )
}
const TopicsList = (props) => {
    console.log(props)
    return (
        <div>
            <h1>TopicList Pages</h1>
        </div>
    )
}
const hats = (props) => {
  console.log(props)
  return (
      <div>
          <h1>hats</h1>
      </div>
  )
}
const TopicDetail = (props) => {

    return (
        <div>
            <h1>Topic Details PAGES: {props.match.params.TopicDetail}</h1>
        </div>
    )
}
export default class App extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={HomePages}/>
                    <Route exact path="/HomePage" component={HomePage}/>
                    <Route exact path="/TopicsList" component={TopicsList}/>
                    <Route exact path="/hats" component={hats}/>
                    <Route path="/TopicsList/:TopicDetail" component={TopicDetail}/>
                </Switch>
            </div>
        )
    }
}
