import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../../services/posts";
import Post from "../../components/Post/Post";
import { TopBar } from "../TopBar/TopBar";
import React from "react";
import { LikedButton } from "../../components/LikedButton";
import { NavigationPill } from "../../components/NavigationPill";
import { Pagination } from "../../components/Pagination";
import { PostCardWithLike } from "../../components/PostCardWithLike";
import { PropertyDefault } from "../../components/PropertyDefault";
import { Search } from "../../components/Search";
import { TagToggle } from "../../components/TagToggle";
import { Text } from "../../components/Text";
import { Check1 } from "../../icons/Check1";
import { IconOutlinedActionThumbThumbUp7 } from "../../icons/IconOutlinedActionThumbThumbUp7";
import { IconOutlinedSuggestedSymbol } from "../../icons/IconOutlinedSuggestedSymbol";
import "./style.css";

export const FeedPage = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getPosts(token)
        .then((data) => {
          setPosts(data.posts);
          localStorage.setItem("token", data.token);
        })
        .catch((err) => {
          console.error(err);
          navigate("/login");
        });
    }
  }, [navigate]);

  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
    return null;
  }

  return (
    <>
      <TopBar />
      <div className="feed">
        <div className="top-bar-group">
          <div className="overlap-group-2">
            <header className="header">
              <img
                className="block"
                alt="Block"
                src="https://c.animaapp.com/CwAkVolA/img/block-2.svg"
              />
              <div className="text-wrapper-8">AceBook</div>
              <div className="navigation-pill-list">
                <NavigationPill
                  className="design-component-instance-node-3"
                  label="Home"
                  state="active"
                />
                <NavigationPill
                  className="design-component-instance-node-3"
                  label="Feed"
                  state="default"
                />
                <NavigationPill
                  className="design-component-instance-node-3"
                  label="About us"
                  state="default"
                />
              </div>
              <div className="header-auth">
                <div className="avatar-2" />
              </div>
            </header>
            <Search className="search-instance" />
            <div className="new-post-button">
              <IconOutlinedSuggestedSymbol
                className="icon-outlined"
                color="#D9D9D9"
              />
              <button className="button-3">New Post</button>
            </div>
          </div>
        </div>
        <h2>Posts</h2>
        <div className="feed" role="feed">
          {posts.map((post) => (
            <Post post={post} key={post._id} />
          ))}
        </div>
        <div className="page-product-results">
          <div className="filter-menu">
            <div className="div-2">
              <Text className="design-component-instance-node-3" text="Filter" />
            </div>
            <div className="div-2">
              <Text className="design-component-instance-node-3" text="Posts" />
              <div className="div-2">
                <div className="checkbox-field">
                  <div className="checkbox-and-label">
                    <div className="checkbox">
                      <Check1 className="check-1" color="#F5F5F5" />
                    </div>
                    <div className="label">Public</div>
                  </div>
                </div>
                <div className="checkbox-field">
                  <div className="checkbox-and-label">
                    <div className="checkbox-2" />
                    <div className="label">Private</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-product-grid">
            <div className="filter-bar">
              <div className="tag-toggle-group">
                <TagToggle
                  className="design-component-instance-node-3"
                  label="Rating"
                  state="off"
                />
                <TagToggle
                  className="design-component-instance-node-3"
                  label="Recommended"
                  state="off"
                />
                <TagToggle
                  className="design-component-instance-node-3"
                  label="2018"
                  state="off"
                />
              </div>
            </div>
            <div className="card-grid">
              <PostCardWithLike
                className="post-card-with-like-button"
                override={
                  <LikedButton
                    className="like-button-2"
                    iconOutlinedActionSubtract="https://c.animaapp.com/CwAkVolA/img/subtract-2.svg"
                  />
                }
                postCardAvatarTypeInitialSizeClassName="post-card-with-like-instance"
              />
              <PostCardWithLike
                className="post-card-with-like-button"
                override={
                  <PropertyDefault
                    className="like-button-2"
                    icon={
                      <IconOutlinedActionThumbThumbUp7 className="icon-outlined-action-thumb-thumb-up-7" />
                    }
                  />
                }
                postCardAvatarTypeInitialSizeClassName="post-card-with-like-instance"
              />
              <PostCardWithLike
                className="post-card-with-like-button-instance"
                override={
                  <PropertyDefault
                    className="like-button-2"
                    icon={
                      <IconOutlinedActionThumbThumbUp7 className="icon-outlined-action-thumb-thumb-up-7" />
                    }
                  />
                }
                postCardAvatarTypeInitialSizeClassName="post-card-with-like-instance"
              />
              <PostCardWithLike
                className="post-card-with-like-button-instance"
                override={
                  <PropertyDefault
                    className="like-button-2"
                    icon={
                      <IconOutlinedActionThumbThumbUp7 className="icon-outlined-action-thumb-thumb-up-7" />
                    }
                  />
                }
                postCardAvatarTypeInitialSizeClassName="post-card-with-like-instance"
              />
              <PostCardWithLike
                className="post-card-with-like-2"
                override={
                  <PropertyDefault
                    className="like-button-2"
                    icon={
                      <IconOutlinedActionThumbThumbUp7 className="icon-outlined-action-thumb-thumb-up-7" />
                    }
                  />
                }
                postCardAvatarTypeInitialSizeClassName="post-card-with-like-instance"
              />
              <PostCardWithLike
                className="post-card-with-like-2"
                override={
                  <PropertyDefault
                    className="like-button-2"
                    icon={
                      <IconOutlinedActionThumbThumbUp7 className="icon-outlined-action-thumb-thumb-up-7" />
                    }
                  />
                }
                postCardAvatarTypeInitialSizeClassName="post-card-with-like-instance"
              />
            </div>
          </div>
        </div>
        <Pagination className="pagination-instance" />
      </div>
    </>
  );
};
