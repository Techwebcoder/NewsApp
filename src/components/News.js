import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: null,
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalize = (str) => {
    if (!str) return "All";
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
      hasMore: true, 
    };

    document.title = `${this.capitalize(this.props.category)} - LatestNews`;
  }

  async updateNews(page = this.state.page) {
    this.props.setProgress(0);
    this.setState({ loading: true });

    let url;

    if (!this.props.category) {
      url = `https://newsapi.org/v2/everything?q=india&apiKey=${this.props.apiKey}&page=${page}&pageSize=${this.props.pageSize}`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${page}&pageSize=${this.props.pageSize}`;
    }

    let data = await fetch(url);

    this.props.setProgress(30);

    let parsedData = await data.json();

    this.props.setProgress(70);

    this.setState({
      page: page,
      articles: parsedData.articles || [],
      totalResults: parsedData.totalResults || 0,
      loading: false,
      hasMore: true, 
    });
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.updateNews(1);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.category !== this.props.category) {
      document.title = `${this.capitalize(this.props.category)} - LatestNews`;
      this.updateNews(1);
    }
  }

  fetchMoreData = async () => {
    const nextPage = this.state.page + 1;

    let url;

    if (!this.props.category) {
      url = `https://newsapi.org/v2/everything?q=india&apiKey=${this.props.apiKey}&page=${nextPage}&pageSize=${this.props.pageSize}`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${nextPage}&pageSize=${this.props.pageSize}`;
    }

    let data = await fetch(url);
    let parsedData = await data.json();

    if (!parsedData.articles || parsedData.articles.length === 0) {
      this.setState({ hasMore: false });
      return;
    }

    this.setState({
      page: nextPage,
      articles: this.state.articles.concat(parsedData.articles || []),
      totalResults: parsedData.totalResults || 0,
    });
  };

  render() {
    return (
      <div className="container my-4" style={{color: this.props.mode === "dark" ? "white" : "black"}}>
        <h1 className="text-center" style={{ margin: "70px 0px 20px 0px" }}>
          StreamNews - Top {this.capitalize(this.props.category)} Headlines
        </h1>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.hasMore} 
          loader={
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Spinner />
            </div>
          }
          scrollThreshold={0.9}
        >
          <div className="row">
            {this.state.articles
              .filter((element) => element && element.url)
              .map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg"
                      }
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      mode={this.props.mode}
                    />
                  </div>
                );
              })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
