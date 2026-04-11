import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <div className="my-3">
        <div
          className="card"
          style={{
            backgroundColor: this.props.mode === "dark" ? "#1e1e1e" : "white",
            color: this.props.mode === "dark" ? "white" : "black",
            border:
              this.props.mode === "dark" ? "1px solid #444" : "1px solid #ddd",
            borderRadius: "10px",
            boxShadow:
              this.props.mode === "dark"
                ? "0 4px 10px rgba(255,255,255,0.1)"
                : "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={imageUrl}
            alt="news"
            className="card-img-top"
            style={{ height: "200px", objectFit: "cover",borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg";
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small style={{color: this.props.mode === "dark" ? "#ccc" : "#555"}}>
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className={`btn btn-sm btn-${this.props.mode === "dark" ? "light" : "dark"}`}
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
