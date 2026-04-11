import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 7;
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0,
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

   constructor() {
    super();
    this.state = {
      mode: "light",
      progress: 0  
    }
  }

  toggleMode = () => {

    document.body.style.transition = "all 0.3s ease";
    
    if (this.state.mode === "light") {
      this.setState({ mode: "dark" });
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "white"; 
    } else {
      this.setState({ mode: "light" });
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black"; 
    }
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar mode={this.state.mode} toggleMode={this.toggleMode}/>
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                setProgress={this.setProgress}
                apiKey = {this.apiKey}
                key="home"
                  pageSize={this.pageSize}
                  country="us"
                  mode={this.state.mode}
                />
              }
            />

            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey = {this.apiKey}
                  key="business"
                  pageSize={this.pageSize}
                  country="us"
                  category="business"
                  mode={this.state.mode}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey = {this.apiKey}
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="us"
                  category="entertainment"
                  mode={this.state.mode}
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey = {this.apiKey}
                  key="general"
                  pageSize={this.pageSize}
                  country="us"
                  category="general"
                  mode={this.state.mode}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey = {this.apiKey}
                  key="health"
                  pageSize={this.pageSize}
                  country="us"
                  category="health"
                  mode={this.state.mode}
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey = {this.apiKey}
                  key="science"
                  pageSize={this.pageSize}
                  country="us"
                  category="science"
                  mode={this.state.mode}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey = {this.apiKey}
                  key="sports"
                  pageSize={this.pageSize}
                  country="us"
                  category="sports"
                  mode={this.state.mode}
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  apiKey = {this.apiKey}
                  key="technology"
                  pageSize={this.pageSize}
                  country="us"
                  category="technology"
                  mode={this.state.mode}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
